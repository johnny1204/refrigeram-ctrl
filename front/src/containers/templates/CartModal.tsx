import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import CartModalForm from '../molecules/CartModalForm';
import {
	CartItem,
	FoodStuffApiResponse,
	foodsOption,
	UpdateCartApiResponse,
} from '../../data/data';
import CartSubmitButton from '../../components/atoms/CartSubmitButton';

const CartModal: FC = () => {
	const [open, setOpen] = useState(false);
	const [disabled, setDisableSubmit] = useState(true);

	const [food, setFood] = useState<CartItem>();
	const [foods, setFoods] = useState<foodsOption[]>();
	useEffect(() => {
		// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
		async function getFoods() {
			const resp = await axios.get<FoodStuffApiResponse>(
				'http://192.168.11.9:8080/api/food_stuff'
			);

			return resp;
		}

		void getFoods()
			.then((resp) => resp.data)
			.then((data) =>
				data.data.map((f) => ({
					key: f.name,
					text: f.name,
					value: f.name,
				}))
			)
			.then((foodStuffs) => setFoods(foodStuffs));
	}, []);

	const submitAction = async () => {
		await axios
			.put<UpdateCartApiResponse>(
				'http://192.168.11.9:8080/api/cart/update',
				{
					food_name: food?.name,
					count: food?.count,
				}
			)
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			.then((resp) => resp.data)
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			.then(() => setOpen(false));
	};

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
						setItem={(item) => setFood(item)}
					/>
				</Modal.Content>
			) : (
				<Modal.Content />
			)}
			<Modal.Actions>
				<CartSubmitButton
					submit={() => submitAction()}
					disabled={disabled}
				/>
			</Modal.Actions>
		</Modal>
	);
};

export default CartModal;
