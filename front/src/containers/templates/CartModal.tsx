import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import CartModalForm from '../molecules/CartModalForm';
import { FoodStuffApiResponse } from '../../data/data';

const CartModal: FC = () => {
	const [open, setOpen] = useState(false);
	const [disabled, setDisableSubmit] = useState(true);

	type foodsOption = {
		key: string;
		text: string;
		value: string;
	};
	const [foods, setFoods] = useState<foodsOption[]>();
	useEffect(() => {
		// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
		async function getFoods() {
			const resp = await axios.get<FoodStuffApiResponse>(
				'http://localhost:8080/api/food_stuff'
			);

			return resp;
		}

		void getFoods()
			.then((resp) => resp.data)
			.then((data) =>
				data.data.map((food) => ({
					key: food.name,
					text: food.name,
					value: food.name,
				}))
			)
			.then((foodStuffs) => setFoods(foodStuffs));
	}, []);

	return (
		<Modal
			closeIcon
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={
				<Button basic color="orange">
					<Icon name="plus" />
					カート追加
				</Button>
			}
		>
			<Modal.Header>カート追加</Modal.Header>
			{foods ? (
				<Modal.Content>
					<CartModalForm
						options={foods}
						disabledSubmit={(result) => setDisableSubmit(result)}
					/>
				</Modal.Content>
			) : (
				<Modal.Content />
			)}
			<Modal.Actions>
				<Button
					color="green"
					onClick={() => setOpen(false)}
					disabled={disabled}
				>
					<Icon name="checkmark" /> 登録
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default CartModal;
