import {UPDATE_LAYOUT_ITEMS_POS, UPDATE_LAYOUT_ITEMS_DATA} from './constants';

export function updateLayoutItemsPos(layoutId, items) {
    return {
        type: UPDATE_LAYOUT_ITEMS_POS,
        layoutId,
        items
    }
}


export function updateLayoutItemsData(data, itemId, layoutId) {
    return {
        type: UPDATE_LAYOUT_ITEMS_DATA,
        data, 
        itemId, 
        layoutId
    }
}