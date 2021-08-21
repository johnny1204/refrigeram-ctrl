import { FC } from 'react';
import Stuffs from '../../components/templates/Stuffs';
import { FoodStuff, foodStuffs, foodTypes } from '../../data/data';

const FoodStuffs: FC = () => {
	const stuffs = Object.values(foodStuffs).map((v) => v);

	const chunkStuffs = stuffs.reduce(
		(newarr, _, i) =>
			i % 2 ? newarr : [...newarr, stuffs.slice(i, i + 2)],
		[] as FoodStuff[][]
	);

	return <Stuffs stuffs={chunkStuffs} foodTypes={foodTypes} />;
};

export default FoodStuffs;
