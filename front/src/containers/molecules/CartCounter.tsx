import { FC } from 'react';
import IncrementButton from '../../components/atoms/IncrementButton';
import { CartItem } from '../../data/data';
import CartDecrementButton from '../atoms/CartDecrementButton';

type Props = {
	cartItem: CartItem;
	createCart: (item: CartItem) => void;
};

const CartCounter: FC<Props> = ({ cartItem, createCart }) => {
	const increment = () => {
		createCart({
			count: cartItem.count + 1,
			name: cartItem.name,
		});
	};

	const decrement = () => {
		createCart({
			count: cartItem.count - 1,
			name: cartItem.name,
		});
	};

	return (
		<>
			<CartDecrementButton cartItem={cartItem} decrement={decrement} />
			{cartItem.count}
			<IncrementButton countUp={increment} iconName="plus" />
		</>
	);
};

export default CartCounter;
