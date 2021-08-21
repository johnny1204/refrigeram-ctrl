/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';

type Props = {
	options: {
		key: string;
		text: string;
		value: string;
	}[];
	isDisabled: () => boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange: (value: any) => void;
};

const FoodSelect: FC<Props> = ({ options, isDisabled, onChange }) => (
	<Form.Field>
		<label>食品名</label>
		<Dropdown
			placeholder="鶏胸肉"
			fluid
			search
			selection
			disabled={isDisabled()}
			options={options}
			onChange={(e, { value }) => onChange(value)}
		/>
	</Form.Field>
);

export default FoodSelect;
