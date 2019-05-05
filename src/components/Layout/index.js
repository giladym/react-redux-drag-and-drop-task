import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Paper } from "@material-ui/core";
import {allowDrop} from '../../utils/dragAndDrop.utils';
import DraggableListItem from '../DraggableListItem';
import { withStyles } from '@material-ui/core/styles';

const ReactGridLayout = WidthProvider(RGL);

const styles = theme => ({
    layoutGrid: {
        backgroundColor: '#e0aeae',
    },
    layoutWrapper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'column'
    },
  layoutItem: {
    flexGrow: '1',
},
});

function Layout({classes, layout, isEditMode = true, onLayoutChange, onDrop}) {
    const layouts = layout.items.map( i=> i.layout); 
    const items = layout.items.map( i => <Paper className={classes.layoutWrapper} key={i.id}>
            <Typography variant="h6" color="primary">{i.title}</Typography>
            <Divider />
           <div  onDragOver={allowDrop} onDrop={(ev) => onDrop(ev, i.id)} className={classes.layoutItem} >
           {i.data ? <DraggableListItem  item={i.data} isDraggable={false}></DraggableListItem> : null}</div>

        </Paper>);

    return (
        <div>
        <Typography variant="h6" color="inherit">{layout.title}</Typography>
        <ReactGridLayout className={classes.layoutGrid} 
        layout={layouts} cols={10} rowHeight={30} 
        isDraggable={isEditMode}
        isResizable={isEditMode}
        onLayoutChange={onLayoutChange}
        >
        {items}
      </ReactGridLayout>
      </div>
    );
  }
  
  export default withStyles(styles)(Layout);