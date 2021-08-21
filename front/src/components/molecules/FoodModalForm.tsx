import { FC } from 'react';
import { Form } from 'semantic-ui-react';
import FoodInput from '../atoms/FoodInput';
import FoodTypeSelect from '../atoms/FoodTypeSelect';

type Props = {
	options: {
		key: string;
		text: string;
		value: string;
	}[];
};

const FoodModalForm: FC<Props> = ({ options }) => (
	<Form>
		<FoodInput label="食品名" />
		<FoodTypeSelect options={options} />
	</Form>
);

export default FoodModalForm;
