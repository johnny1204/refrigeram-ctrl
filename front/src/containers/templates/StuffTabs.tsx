import { FC } from 'react';
import { useParams } from 'react-router';
import Tabs from '../../components/templates/Tabs';
import { foodTypes } from '../../data/data';

const StuffTabs: FC = () => {
	const items = Object.values(foodTypes).map((v) => v);

	const { stuffTypeId } = useParams<{ stuffTypeId: string }>();

	return (
		<>
			<Tabs tabItems={items} currentIndex={+stuffTypeId - 1} />
		</>
	);
};

export default StuffTabs;
