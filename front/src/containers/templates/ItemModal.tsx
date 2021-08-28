/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import FoodModalForm from '../molecules/FoodModalForm';
import { FoodType } from '../../data/data';

type Props = {
	types: FoodType[] | undefined;
};

const ItemModal: FC<Props> = ({ types }) => {
	const [open, setOpen] = useState(false);
	const [disabled, setDisableSubmit] = useState(true);

	let dropDownOptions;
	if (types) {
		dropDownOptions = Object.values(types)
			.filter((value) => value.type !== '')
			.map((type) => ({
				key: type.type,
				text: type.name,
				value: type.name,
			}));
	}

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
			{dropDownOptions ? (
				<Modal.Content>
					<FoodModalForm
						options={dropDownOptions}
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
