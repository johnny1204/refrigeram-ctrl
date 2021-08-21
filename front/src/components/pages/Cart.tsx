import { FC } from 'react';
import { cart } from '../../data/data';
import CartItems from '../../containers/templates/CartItems';

const Cart: FC = () => {
	const items = Object.values(cart).map((v) => v);

	return <CartItems items={items} />;
};

export default Cart;
