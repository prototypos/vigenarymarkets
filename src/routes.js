import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import App from './components/App/index';
import ComingSoon from './components/ComingSoon/index';
import NotFound from './components/NotFound/index';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={App}>
  			<IndexRedirect to="comingSoon" />
			<Route path="comingSoon" component={ComingSoon} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
);

export default Routes;