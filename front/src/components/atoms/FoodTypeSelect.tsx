/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';

type Props = {
	options: {
		key: string;
		text: string;
		value: string;
	}[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onChange: (value: any) => void;
};

const FoodTypeSelect: FC<Props> = ({ options, onChange }) => (
	<Form.Field>
		<label>分類</label>
		<Dropdown
			placeholder="分類"
			fluid
			search
			selection
			options={options}
			onChange={(e, { value }) => onChange(value)}
		/>
	</Form.Field>
);

export default FoodTypeSelect;
