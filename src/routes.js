import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import App from './App';
import ComingSoon from './components/ComingSoon/ComingSoon';
import NotFound from './components/NotFound/NotFound';

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