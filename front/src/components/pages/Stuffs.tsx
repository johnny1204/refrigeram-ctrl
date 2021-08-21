import { FC } from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router';
import AllStuffList from '../../containers/templates/AllStuffs';
import TypeStuffList from '../../containers/templates/TypeStuffs';
import StuffTabs from '../../containers/templates/StuffTabs';

const Stuffs: FC<RouteComponentProps> = ({ match }) => (
	<>
		<StuffTabs />
		<Switch>
			<Route path={`${match.path}/:stuffTypeId`}>
				<TypeStuffList />
			</Route>
			<Route path={`${match.path}/`}>
				<AllStuffList />
			</Route>
		</Switch>
	</>
);

export default Stuffs;
