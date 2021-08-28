import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';
import CartItems from '../../containers/templates/CartItems';
import { CartApiResponse, CartItem } from '../../data/data';

const Cart: FC = () => {
	const [cart, setCart] = useState<CartItem[]>();
	useEffect(() => {
		// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
		async function getCart() {
			const resp = await axios.get<CartApiResponse>(
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
