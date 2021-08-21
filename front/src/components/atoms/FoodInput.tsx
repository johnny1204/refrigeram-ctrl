/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { Form } from 'semantic-ui-react';

type Props = {
	label: string;
};

const FoodInput: FC<Props> = ({ label }) => (
	<Form.Field>
		<label>{label}</label>
		<input placeholder="鶏胸肉" />
	</Form.Field>
);

export default FoodInput;
