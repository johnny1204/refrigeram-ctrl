/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { Button, Icon } from 'semantic-ui-react';

type Props = {
	disabled: boolean;
	submit: () => void;
};

const CartSubmitButton: FC<Props> = ({
	disabled,
	submit = () => undefined,
}) => (
	<Button color="green" onClick={() => submit()} disabled={disabled}>
		<Icon name="checkmark" /> 登録
	</Button>
);

export default CartSubmitButton;
