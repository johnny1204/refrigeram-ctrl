/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import Counter from './Counter';
import FoodSelect from '../../components/atoms/FoodSelect';
import FoodInput from '../../components/atoms/FoodInput';

type Props = {
	options: {
		key: string;
		text: string;
		value: string;
	}[];
	disabledSubmit: (disabled: boolean) => void;
};

const CartModalForm: FC<Props> = ({ options, disabledSubmit }) => {
	const [foodName, setFoodName] = useState('');
	const [selectFoodName, setSelectFoodName] = useState('');
	const [count, setCount] = useState(0);
	const [disabledSelect, setDisabledSelect] = useState(false);

	useEffect(() => disabledSubmit(!(count > 0 && foodName.length > 0)), [
		disabledSubmit,
		foodName,
		count,
	]);

	return (
		<Form>
			<FoodSelect
				options={options}
				isDisabled={() => disabledSelect}
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				onChange={(val: any) => {
					setFoodName(val);
					setSelectFoodName(val);
					// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
					setDisabledSelect(val.length < 0);
				}}
			/>
			<FoodInput
				label="食品名（登録なし）"
				setValue={(val: string) => {
					if (val.length <= 0) {
						setFoodName(selectFoodName);
					} else {
						setFoodName(val);
					}
					setDisabledSelect(val.length > 0);
				}}
			/>
			<Form.Field>
				<label>個数</label>
				<Counter count={0} currentCount={(c) => setCount(c)} />
			</Form.Field>
		</Form>
	);
};

export default CartModalForm;
