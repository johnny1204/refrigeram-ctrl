import { FC, useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import FoodInput from '../../components/atoms/FoodInput';
import FoodTypeSelect from '../../components/atoms/FoodTypeSelect';

type Props = {
	options: {
		key: string;
		text: string;
		value: string;
	}[];
	disabledSubmit: (disabled: boolean) => void;
};

const FoodModalForm: FC<Props> = ({ options, disabledSubmit }) => {
	const [foodName, setFoodName] = useState('');
	const [foodType, setFoodType] = useState('');

	useEffect(
		() => disabledSubmit(!(foodType.length > 0 && foodName.length > 0)),
		[disabledSubmit, foodName, foodType]
	);

	return (
		<Form>
			<FoodInput label="食品名" setValue={(n) => setFoodName(n)} />
			<FoodTypeSelect
				options={options}
				onChange={(ft) => setFoodType(ft)}
			/>
		</Form>
	);
};

export default FoodModalForm;
