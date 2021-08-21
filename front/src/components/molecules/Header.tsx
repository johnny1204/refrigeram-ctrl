import { FC } from 'react';
import { Menu } from 'semantic-ui-react';
import HomeButton from '../atoms/HomeButton';
import CartButton from '../atoms/CartLinkButton';

const Header: FC = () => (
	<Menu text>
		<Menu.Item>
			<HomeButton style={{ marginRight: 3 }} />
			<CartButton />
		</Menu.Item>
	</Menu>
);

export default Header;
