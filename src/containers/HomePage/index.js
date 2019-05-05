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
    gridItem: {
    },
    smallLayout: {
     
    },
    gridContainer: {
      padding: '16px',
    }
});

export function HomePage({
    classes,
    activeLayouts,
}) {
    const layouts = activeLayouts.map ( layout => 
    <Grid  key={layout.id} item lg={4} md={6} sm={12} xs={12}  className={classes.gridItem}>
        <Link to={"/edit/" + layout.id}>
            <div className={classes.smallLayout}> <Layout   layout={layout} isEditMode={false}></Layout></div>
        </Link>
    </Grid>
    );
    return (
     
    <main className={classes.content}>
    <div className={classes.appBarSpacer} />
        <Grid  container spacing={0}  >
            <h1>Layouts:</h1>
            <Grid container direction="row" spacing={32} className={classes.gridContainer} >
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