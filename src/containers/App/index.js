
import React from 'react';
import Header from '../../components/Header';
import NotFoundPage from '../NotFoundPage';
import HomePage from '../HomePage';
import ConfigurationPage from '../ConfigurationPage';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appLayout: {
    display: 'flex',
    height: '100vh'
}
});

const RouteWithHeader = ({ component: Component, ...rest})=>(
<Route {...rest} render={(props) =>  <React.Fragment><Header/><Component {...props} /></React.Fragment> } />
  )

function App({classes}) {
    return (
        <div className={classes.appLayout} >
        <CssBaseline />
        <Switch>
          <RouteWithHeader exact path="/" component={HomePage} />
          <RouteWithHeader path="/edit/:id" component={ConfigurationPage} />
          <Route path="" component={NotFoundPage} />
          <Route path="/invalid-route" component={NotFoundPage} />
        </Switch>
       
        </div>
    );
  }

  export default withStyles(styles)(App);