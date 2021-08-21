/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';

type Props = {
	options: {
		key: string;
		text: string;
		value: string;
	}[];
};

const FoodSelect: FC<Props> = ({ options }) => (
	<Form.Field>
		<label>食品名</label>
		<Dropdown
			placeholder="鶏胸肉"
			fluid
			search
			selection
			options={options}
		/>
	</Form.Field>
);

export default FoodSelect;
