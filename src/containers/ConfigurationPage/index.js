import React, { memo } from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {makeSelectLayoutByUrlId, makeSelectLocation, makeSelectDragableList} from '../../store/selectors';
import {setTransferData, getTransferData} from '../../utils/dragAndDrop.utils'; 
import {updateLayoutItemsData, updateLayoutItemsPos} from '../../store/actions';
import Layout from '../../components/Layout';
import DraggableList from '../../components/DragableList';
import { compose } from 'redux';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: '100vh',
      overflow: 'auto',
    },
    asideList: {
      paddingTop: theme.spacing.unit * 3,
      height: '100vh',
    },
    button: {
        position: 'absolute',
        right: theme.spacing.unit * 5,
        top: theme.spacing.unit * 10,

    }
});
export function ConfigurationPage({
    classes,
    layout,
    location,
    layoutId,
    draggableList,
    onLayoutChange,
    onDragStart,
    onDrop
}) {
    if (!layout) {
       return <Redirect to="/invalid-route"/>
    }
    return (
        <Grid container className="edit-layout-container" direction="row" spacing={24}>
        
        <Grid item md={2} sm={3} xs={4}>
        <main className={classes.asideList}>
            <div className={classes.appBarSpacer} />
            <DraggableList list={draggableList} onDragStart={onDragStart} />
            </main>
        </Grid>

        <Grid item md={10} sm={9} xs={8}>
           
             <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Button variant="outlined" className={classes.button}>
                <Link to="/">Go Back</Link>            
             </Button>
            <Layout key={layoutId} layout={layout} onLayoutChange={(ev) => onLayoutChange(layoutId, ev)} onDrop={(ev, itemId) => onDrop(ev, itemId, layoutId)}></Layout>
            </main>
        </Grid>
    </Grid>
    
    )
}

const mapStateToProps = (state, ownProps) => createStructuredSelector({
    layoutId: () => ownProps.match.params.id,
    location: makeSelectLocation(),
    layout: makeSelectLayoutByUrlId(ownProps.match.params.id),
    draggableList: makeSelectDragableList()
  });

const mapDispatchToProps = dispatch => {
    return {
        onLayoutChange: (layoutId, ev) => {
            dispatch(updateLayoutItemsPos(layoutId, ev));
      },
      onDragStart: (ev, item) => setTransferData(ev, item.title),
      onDrop: (ev, itemId, layoutId) => dispatch(updateLayoutItemsData(getTransferData(ev), itemId, layoutId)),
  }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

  
export default compose(
    withStyles(styles, { name: 'ConfigurationPage' }),
    withConnect,
    memo,
  )(ConfigurationPage);