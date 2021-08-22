/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';
import CartItems from '../../containers/templates/CartItems';
import { CartItem } from '../../data/data';

interface Response {
	data: CartItem[];
}

const Cart: FC<Response> = () => {
	const [cart, setCart] = useState<CartItem[] | null>(null);
	useEffect(() => {
		async function getCart() {
			const resp = await axios.get<Response>(
				'http://localhost:8080/api/cart'
			);

			return resp;
		}

		void getCart()
			.then((resp) => resp.data)
			.then((data) => setCart(data.data));
	}, []);

	if (cart) {
		const items = Object.values(cart).map((v) => v);

		return <CartItems items={items} />;
	}

	return <Loader active size="large" />;
};

export default Cart;
