import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Loader } from 'semantic-ui-react';
import Tabs from '../../components/templates/Tabs';
import { FoodType, FoodTypeApiResponse } from '../../data/data';

const StuffTabs: FC = () => {
	const { stuffTypeId } = useParams<{ stuffTypeId: string }>();

	const [types, setTypes] = useState<FoodType[]>();
	useEffect(() => {
		// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
		async function getTypes() {
			const resp = await axios.get<FoodTypeApiResponse>(
				'http://localhost:8080/api/food_type'
			);

			return resp;
		}

		void getTypes()
			.then((resp) => resp.data)
			.then((data) => setTypes(data.data));
	}, []);

	if (types) {
		return (
			<>
				<Tabs tabItems={types} currentIndex={+stuffTypeId - 1} />
			</>
		);
	}

	return <Loader active size="large" />;
};

export default StuffTabs;
