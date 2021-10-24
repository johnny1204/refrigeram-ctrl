/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useEffect, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';

type Props = {
	disabled: boolean;
	submit: () => void;
};

const CartSubmitButton: FC<Props> = ({
	disabled,
	submit = () => undefined,
}) => {
	const [disabledSelect, setDisabledSelect] = useState(disabled);

	useEffect(() => setDisabledSelect(disabled), [disabled]);

	return (
		<Button
			color="green"
			onClick={() => {
				setDisabledSelect(true);
				submit();
			}}
			disabled={disabledSelect}
		>
			<Icon name="checkmark" /> 登録
		</Button>
	);
};

export default CartSubmitButton;
