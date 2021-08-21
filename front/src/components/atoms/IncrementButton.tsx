import { FC } from 'react';
import { Button } from 'semantic-ui-react';

type Props = {
	countUp?: () => void;
	iconName?: string;
};

const IncrementButton: FC<Props> = ({
	countUp = () => undefined,
	iconName,
}) => <Button icon={iconName} onClick={countUp} style={{ marginLeft: 3 }} />;

export default IncrementButton;
