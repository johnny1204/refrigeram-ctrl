import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import {
	CartApiResponse,
	CartItem,
	UpdateCartApiResponse,
} from '../../data/data';
import CartCounter from '../molecules/CartCounter';
import CartModal from './CartModal';

const CartItems: FC = () => {
	const [itemList, setItems] = useState<CartItem[]>();
	useEffect(() => {
		// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
		async function getCart() {
			const resp = await axios.get<CartApiResponse>(
				'http://192.168.11.7:8080/api/cart'
			);

			return resp;
		}

		void getCart()
			.then((resp) => resp.data)
			.then((data) => setItems(data.data));
	}, []);

	const createCart = (item: CartItem) => {
		if (!itemList) {
			return;
		}

		if (item.count < 1) {
			const filterItems = itemList.filter((i) => i.name !== item.name);

			setItems(() => filterItems);
		} else {
			const newItems = itemList.map((i) => {
				if (i.name === item.name) {
					return { count: item.count, name: item.name };
				}

				return { count: i.count, name: i.name };
			});
			setItems(() => newItems);
		}
	};

	const updateCart = async (item: CartItem) => {
		await axios
			.put<UpdateCartApiResponse>(
				'http://192.168.11.7:8080/api/cart/update',
				{
					food_name: item.name,
					count: item.count,
				}
			)
			.then((resp) => resp.data)
			.then((data) => createCart(data.data));
	};

	if (itemList) {
		return (
			<Grid style={{ margin: 20 }}>
				<div style={{ margin: 20 }}>
					<CartModal />
				</div>
				{itemList.map((item, i) => (
					// eslint-disable-next-line react/no-array-index-key
					<Grid.Row key={i}>
						<Grid.Column width={8}>
							<Grid columns={2}>
								<Grid.Column>{item.name}</Grid.Column>
								<Grid.Column>
									<CartCounter
										cartItem={item}
										createCart={(it) => updateCart(it)}
									/>
								</Grid.Column>
							</Grid>
						</Grid.Column>
					</Grid.Row>
				))}
			</Grid>
		);
	}

	return <Loader active size="large" />;
};

export default CartItems;
