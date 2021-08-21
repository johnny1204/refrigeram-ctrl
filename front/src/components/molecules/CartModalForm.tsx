/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';
import { Form } from 'semantic-ui-react';
import Counter from '../../containers/molecules/Counter';
import FoodSelect from '../atoms/FoodSelect';
import FoodInput from '../atoms/FoodInput';

type Props = {
	options: {
		key: string;
		text: string;
		value: string;
	}[];
};

const CartModalForm: FC<Props> = ({ options }) => (
	<Form>
		<FoodSelect options={options} />
		<FoodInput label="食品名（登録なし）" />
		<Form.Field>
			<label>個数</label>
			<Counter count={0} />
		</Form.Field>
	</Form>
);

export default CartModalForm;
