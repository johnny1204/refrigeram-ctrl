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

const FoodTypeSelect: FC<Props> = ({ options }) => (
	<Form.Field>
		<label>分類</label>
		<Dropdown placeholder="分類" fluid search selection options={options} />
	</Form.Field>
);

export default FoodTypeSelect;
