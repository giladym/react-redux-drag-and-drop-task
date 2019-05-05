
import {initialState, UPDATE_LAYOUT_ITEMS_POS, UPDATE_LAYOUT_ITEMS_DATA} from './constants';


const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_LAYOUT_ITEMS_POS:

    const layouts = {...state.layouts};
    // Save new items layout posistion
    layouts[action.layoutId].items = layouts[action.layoutId].items
      .map( item => ({...item, layout: action.items.find( i => i.i === item.layout.i)}));
    // Update state  
    return {...state,
      layouts
    };    

    case UPDATE_LAYOUT_ITEMS_DATA:

    const _layouts = JSON.parse(JSON.stringify(state.layouts));

    // Save new items layout posistion
    _layouts[action.layoutId].items = _layouts[action.layoutId].items
      .map( item => {
        if (!!item.data) { // If item already exists
          return {...item};
        }
        const title = item.id === action.itemId ? action.data : null
        if (!title) {  // If not adding item to this container
          return {...item};
        }
        return ({...item, data: {title}  });
      });
    // Update state  
    return {...state,
      layouts: _layouts
    };    

    
    default:
        return state;

}};


export default appReducer;