import { FC, useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { CartItem } from '../../data/data';
import CartCounter from '../molecules/CartCounter';
import CartModal from './CartModal';

type Props = {
	items: CartItem[];
};

const CartItems: FC<Props> = ({ items }) => {
	const [itemList, setItems] = useState(items);

	const createCart = (item: CartItem) => {
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

	useEffect(() => {
		setItems(items);
	}, [items, itemList]);

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
									createCart={(it) => createCart(it)}
								/>
							</Grid.Column>
						</Grid>
					</Grid.Column>
				</Grid.Row>
			))}
		</Grid>
	);
};

export default CartItems;
