/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import FoodModalForm from '../molecules/FoodModalForm';
import { FoodTypeApiResponse } from '../../data/data';

type OptionType = {
	key: string;
	text: string;
	value: string;
};

const ItemModal: FC = () => {
	const [open, setOpen] = useState(false);
	const [disabled, setDisableSubmit] = useState(true);
	const [types, setTypes] = useState<OptionType[]>();

	useEffect(() => {
		async function getTypes() {
			const resp = await axios.get<FoodTypeApiResponse>(
				'http://192.168.11.9:8080/api/food_type'
			);

			return resp;
		}

		void getTypes()
			.then((resp) => resp.data)
			.then((data) =>
				Object.values(data.data)
					.filter((value) => value.type !== '')
					.map((type) => ({
						key: type.type,
						text: type.name,
						value: type.name,
					}))
			)
			.then((filterType) => setTypes(filterType));
	}, []);

	// let dropDownOptions;
	// if (types) {
	// 	dropDownOptions = Object.values(types)
	// 		.filter((value) => value.type !== '')
	// 		.map((type) => ({
	// 			key: type.type,
	// 			text: type.name,
	// 			value: type.name,
	// 		}));
	// }

	return (
		<Modal
			closeIcon
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={
				<Button basic color="orange">
					<Icon name="plus" />
					在庫追加
				</Button>
			}
		>
			<Modal.Header>在庫追加</Modal.Header>
			{types ? (
				<Modal.Content>
					<FoodModalForm
						options={types}
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

export default ItemModal;
