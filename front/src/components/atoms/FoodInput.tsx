/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { Form } from 'semantic-ui-react';

type Props = {
	label: string;
	setValue: (val: string) => void;
};

const FoodInput: FC<Props> = ({ label, setValue = () => undefined }) => (
	<Form.Field>
		<label>{label}</label>
		<input
			placeholder="鶏胸肉"
			onChange={(e) => setValue(e.target.value)}
		/>
	</Form.Field>
);

export default FoodInput;
