import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const CartLinkButton: FC = () => <Button icon="cart" as={Link} to="/cart" />;

export default CartLinkButton;
