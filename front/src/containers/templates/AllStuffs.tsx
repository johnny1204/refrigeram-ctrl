/* eslint-disable prefer-arrow/prefer-arrow-functions */
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Stuffs from '../../components/templates/Stuffs';
import { FoodStuff, FoodStuffApiResponse } from '../../data/data';

const FoodStuffs: FC = () => {
	const [foods, setFoods] = useState<FoodStuff[]>();

	useEffect(() => {
		async function getFoods() {
			const resp = await axios.get<FoodStuffApiResponse>(
				'http://192.168.11.7:8080/api/food_stuff'
			);

			return resp;
		}

		void getFoods()
			.then((resp) => resp.data)
			.then((data) => setFoods(data.data));
	}, []);

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
