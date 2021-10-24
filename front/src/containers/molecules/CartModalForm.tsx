/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import Counter from './Counter';
import FoodSelect from '../../components/atoms/FoodSelect';
import FoodInput from '../../components/atoms/FoodInput';
import { CartItem } from '../../data/data';

type Props = {
	options: {
		key: string;
		text: string;
		value: string;
	}[];
	disabledSubmit: (disabled: boolean) => void;
	setItem: (item: CartItem) => void;
};

const CartModalForm: FC<Props> = ({ options, disabledSubmit, setItem }) => {
	const [foodName, setFoodName] = useState<string>();
	const [selectFoodName, setSelectFoodName] = useState<string>();
	const [count, setCount] = useState(0);
	const [disabledSelect, setDisabledSelect] = useState(false);

	useEffect(() => {
		disabledSubmit(!(count > 0 && foodName && foodName.length > 0));
	}, [disabledSubmit, foodName, count]);

	useEffect(() => {
		if (count > 0 && foodName && foodName.length > 0) {
			setItem({
				name: foodName,
				count,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [count, foodName]);

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
