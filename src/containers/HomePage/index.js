import React, { memo } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import {makeSelectActiveLayouts} from '../../store/selectors';
import { compose } from 'redux';
import Layout from '../../components/Layout';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: '100vh',
      overflow: 'auto',
    },
    smallLayout: {
      width: '30%'
    }
});

export function HomePage({
    classes,
    activeLayouts,
}) {
    const layouts = activeLayouts.map ( layout => 
    <Grid className={"/edit/" + layout.id} key={layout.id} item lg={4} md={6} sm={12} xs={12}>
        <Link to={"/edit/" + layout.id}>
            <Layout className="smallLayout"  layout={layout} isEditMode={false}></Layout>
        </Link>
    </Grid>
    );
    return (
     
    <main className={classes.content}>
    <div className={classes.appBarSpacer} />
        <Grid className="layouts-header" container spacing={24}>
            <h1>Layouts:</h1>
            <Grid container direction="row" spacing={24}>
                {layouts}
            </Grid>
        </Grid>
    </main>
    )
}

const mapStateToProps = createStructuredSelector({
    activeLayouts: makeSelectActiveLayouts()
  });

  const withConnect = connect(
    mapStateToProps
  );

  
export default compose(
    withStyles(styles, { name: 'HomePage' }),
    withConnect,
    memo,
  )(HomePage);