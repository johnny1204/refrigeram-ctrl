import { FC, useState } from 'react';
import IncrementButton from '../../components/atoms/IncrementButton';

type Props = {
	count: number;
};

const Counter: FC<Props> = ({ count }) => {
	const [current, setCount] = useState(count);
	const increment = () => setCount((c) => c + 1);
	const decrement = () => setCount((c) => (c > 0 ? c - 1 : c));

	return (
		<>
			<IncrementButton countUp={decrement} iconName="minus" />
			{current}
			<IncrementButton countUp={increment} iconName="plus" />
		</>
	);
};

export default Counter;
