import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Link from './link';
import LinkDetail from './link-detail';
import LinkUpdate from './link-update';
import LinkDeleteDialog from './link-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={LinkDeleteDialog} />
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={LinkUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={LinkUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={LinkDetail} />
      <ErrorBoundaryRoute path={match.url} component={Link} />
    </Switch>
  </>
);

export default Routes;
