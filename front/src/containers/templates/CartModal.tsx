/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import CartModalForm from '../../components/molecules/CartModalForm';
import { foodStuffs } from '../../data/data';

const CartModal: FC = () => {
	const [open, setOpen] = useState(false);

	const dropDownOptions = foodStuffs.map((type) => ({
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
					カート追加
				</Button>
			}
		>
			<Modal.Header>カート追加</Modal.Header>
			<Modal.Content>
				<CartModalForm options={dropDownOptions} />
			</Modal.Content>
			<Modal.Actions>
				<Button color="green" onClick={() => setOpen(false)}>
					<Icon name="checkmark" /> 登録
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

export default CartModal;
