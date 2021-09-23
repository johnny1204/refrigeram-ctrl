/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Loader } from 'semantic-ui-react';
import Stuffs from '../../components/templates/Stuffs';
import { FoodStuff, FoodStuffApiResponse } from '../../data/data';

const FoodStuffs: FC = () => {
	const { stuffTypeId } = useParams<{ stuffTypeId: string }>();
	const [foods, setFoods] = useState<FoodStuff[]>();

	useEffect(() => {
		async function getFoods() {
			const resp = await axios.get<FoodStuffApiResponse>(
				'http://192.168.11.9:8080/api/food_stuff',
				{
					params: {
						type_name: stuffTypeId,
					},
				}
			);

			return resp;
		}

		void getFoods()
			.then((resp) => resp.data)
			.then((data) => setFoods(data.data));
	}, [stuffTypeId]);

	if (foods) {
		const chunkStuffs = foods.reduce(
			(newarr, _, i) =>
				i % 2 ? newarr : [...newarr, foods.slice(i, i + 2)],
			[] as FoodStuff[][]
		);

		return <Stuffs stuffs={chunkStuffs} />;
	}

	return <Loader active size="large" />;
};

export default FoodStuffs;
