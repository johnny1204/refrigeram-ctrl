import { FC } from 'react';
import { Button } from 'semantic-ui-react';
import { CartItem } from '../../data/data';

type Props = {
	cartItem: CartItem;
	decrement: (item: CartItem) => void;
};
const CartDecrementButton: FC<Props> = ({ cartItem, decrement }) => (
	<Button icon="minus" onClick={() => decrement(cartItem)} />
);

export default CartDecrementButton;
