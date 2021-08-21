import { FC } from 'react';
import { Tab } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { FoodType } from '../../data/data';

type Props = {
	tabItems: FoodType[];
	currentIndex: number;
};

const Tabs: FC<Props> = ({ tabItems, currentIndex }) => (
	<>
		<Tab
			renderActiveOnly={false}
			menu={{ secondary: true, pointing: true }}
			defaultActiveIndex={currentIndex}
			panes={tabItems.map((tabItem) => ({
				menuItem: {
					as: NavLink,
					content: tabItem.name,
					to: `/stuffs/${tabItem.type}`,
					exact: true,
					key: tabItem.name,
				},
			}))}
		/>
	</>
);

export default Tabs;
