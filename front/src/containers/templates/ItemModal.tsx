/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import FoodModalForm from '../../components/molecules/FoodModalForm';
import { FoodType } from '../../data/data';

type Props = {
	types: FoodType[];
};

const ItemModal: FC<Props> = ({ types }) => {
	const [open, setOpen] = useState(false);

	const dropDownOptions = Object.values(types)
		.filter((value) => value.type !== '')
		.map((type) => ({
			key: type.type,
			text: type.name,
			value: type.name,
		}));

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
			<Modal.Content>
				<FoodModalForm options={dropDownOptions} />
			</Modal.Content>
			<Modal.Actions>
				<Button color="green" onClick={() => setOpen(false)}>
					<Icon name="checkmark" /> 登録
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default ItemModal;
