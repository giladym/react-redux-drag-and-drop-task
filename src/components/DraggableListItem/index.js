import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});


function DraggableListItem({classes, item, isDraggable = true, onDragStart}) {
    return (
        <ListItem draggable={isDraggable} onDragStart={(ev) => onDragStart(ev,item)}>
                        <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                        primary={item.title}
                        
                        />
                  </ListItem>
    );
  }
  
  export default withStyles(styles)(DraggableListItem);