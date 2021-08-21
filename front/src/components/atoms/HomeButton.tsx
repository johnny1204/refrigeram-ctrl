import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

type Props = {
	style: {
		marginRight: number;
	};
};

const HomeButton: FC<Props> = ({ style }) => (
	<Button icon="home" as={Link} to="/stuffs" style={style} />
);

export default HomeButton;
