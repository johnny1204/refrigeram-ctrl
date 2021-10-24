import { FC, useState } from 'react';
import IncrementButton from '../../components/atoms/IncrementButton';
import { CartItem } from '../../data/data';
import CartDecrementButton from '../atoms/CartDecrementButton';

type Props = {
	cartItem: CartItem;
	createCart: (item: CartItem) => void;
};

const CartCounter: FC<Props> = ({ cartItem, createCart }) => {
	const [count, setCount] = useState<number>(cartItem.count);

	const increment = () => {
		const incrementCount = cartItem.count + 1;
		setCount(incrementCount);
		createCart({
			count: incrementCount,
			name: cartItem.name,
		});
	};

	const decrement = () => {
		const decrementCount = cartItem.count - 1;
		setCount(decrementCount);
		createCart({
			count: decrementCount,
			name: cartItem.name,
		});
	};

	return (
		<>
			<CartDecrementButton cartItem={cartItem} decrement={decrement} />
			{count}
			<IncrementButton countUp={increment} iconName="plus" />
		</>
	);
};

export default CartCounter;
