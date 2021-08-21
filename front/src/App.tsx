import { FC, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router';
import { Container } from 'semantic-ui-react';
import Stuffs from './components/pages/Stuffs';
import Cart from './components/pages/Cart';
import Header from './components/molecules/Header';
import './App.css';

const App: FC = () => {
	const { hash, pathname } = useLocation();
	const { action } = useHistory();

	useEffect(() => {
		if (!hash || action !== 'POP') {
			window.scrollTo(0, 0);
		}
	}, [action, hash, pathname]);

	return (
		<Container style={{ margin: 20 }}>
			<Header />
			<Switch>
				<Route exact path="/">
					<Redirect to="/stuffs" />
				</Route>
				<Route path="/stuffs" component={Stuffs} />
				<Route path="/cart" component={Cart} />
			</Switch>
		</Container>
	);
};

export default App;
