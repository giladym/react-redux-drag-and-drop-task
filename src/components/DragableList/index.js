import React from 'react';
import List from '@material-ui/core/List';
import DraggableListItem from '../DraggableListItem';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        minWidth: 275,
      },
      title: {
        fontSize: 14,
      },
});


function DragableList({classes, list, onDragStart}) {
    const items = list.map( item => <DraggableListItem key={item.id} onDragStart={onDragStart} item={item}></DraggableListItem>);

    return (
        <div>
        <Typography variant="h6" color="inherit">Dragable List</Typography>  
        <List dense={false}>{items}</List>
      </div>
    );
  }
  
  export default withStyles(styles)(DragableList);