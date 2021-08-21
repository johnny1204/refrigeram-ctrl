import { FC, useEffect, useState } from 'react';
import IncrementButton from '../../components/atoms/IncrementButton';

type Props = {
	count: number;
	currentCount?: (c: number) => void;
};

const Counter: FC<Props> = ({ count, currentCount = () => undefined }) => {
	const [current, setCount] = useState(count);
	const increment = () => setCount((c) => c + 1);
	const decrement = () => setCount((c) => (c > 0 ? c - 1 : c));

	useEffect(() => {
		currentCount(current);
	}, [current, currentCount]);

	return (
		<>
			<IncrementButton countUp={decrement} iconName="minus" />
			{current}
			<IncrementButton countUp={increment} iconName="plus" />
		</>
	);
};

export default Counter;
