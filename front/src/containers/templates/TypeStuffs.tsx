import { FC } from 'react';
import { useParams } from 'react-router';
import Stuffs from '../../components/templates/Stuffs';
import { FoodStuff, foodStuffs, foodTypes } from '../../data/data';

const FoodStuffs: FC = () => {
	const { stuffTypeId } = useParams<{ stuffTypeId: string }>();

	const stuffs = Object.values(foodStuffs).filter(
		(v) => v.type === stuffTypeId
	);

	const chunkStuffs = stuffs.reduce(
		(newarr, _, i) =>
			i % 2 ? newarr : [...newarr, stuffs.slice(i, i + 2)],
		[] as FoodStuff[][]
	);

	return <Stuffs stuffs={chunkStuffs} foodTypes={foodTypes} />;
};

export default FoodStuffs;
