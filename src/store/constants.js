/*
 * AppConstants
* export const ACTION_CONSTANT = 'Container/ACTION_CONSTANT';
*/

export const UPDATE_LAYOUT_ITEMS_POS = 'Configuration/UPDATE_LAYOUT_ITEMS_POS';
export const UPDATE_LAYOUT_ITEMS_DATA = 'Configuration/UPDATE_LAYOUT_ITEMS_DATA';


// The initial state of the App
export const initialState = {
    draggableList: [{id: 'A', title: 'item A'},
      {id: 'B', title: 'item B'},
      {id: 'C', title: 'item C'},
      {id: 'D', title: 'item D'},
      {id: 'E', title: 'item E'}
    ],
    activeLayouts: [1,2,3, 4],
    layouts: {
      1: {
        type: 'Layout1',
        title: 'Layout Number 1',
        items: [{
          id: 'a',
          title: 'item header',
          data: null,
          layout:  {i: 'a', x: 0, y: 0, w: 10, h: 4, static: true, isResizable: false, minH: 3, minW: 3},
        },
        {
          id: 'b',
          title: 'item 1',
          data: null,
          layout:  {i: 'b', x: 0, y: 2, w: 5, h: 8, minW: 3, maxW: 12, minH: 3},
        },
        {
          id: 'c',
          title: 'item 2',
          data: {title: 'item A'},
          layout:  {i: 'c', x: 5, y: 2, w: 5, h: 8, minW: 3, maxW: 12, minH: 3},
        },
        {
          id: 'd',
          title: 'item 3',
          data: null,
          layout:  {i: 'd', x: 0, y: 6, w: 10, h: 8, static: false, minH: 3, minW: 3},
        },
        {
          id: 'e',
          title: 'item footer',
          data: null,
          layout:  {i: 'e', x: 0, y: 10, w: 10, h: 4, static: false, isResizable: false, minH: 3, minW: 3},
        }
      ]
      },
      2: {
        type: 'Layout2',
        title: 'Layout Number 2',
        items: [
        {
          id: 'b',
          title: 'item 1',
          data: null,
          layout:  {i: 'b', x: 0, y: 2, w: 5, h: 8, minW: 3, maxW: 12, minH: 3},
        },
        {
          id: 'c',
          title: 'item 2',
          data: {title: 'item A'},
          layout:  {i: 'c', x: 5, y: 2, w: 5, h: 8, minW: 3, maxW: 12, minH: 3},
        },
        
      ]
      },
      3: {
        type: 'Layout3',
        title: 'Layout Number 3',
        items: [
        {
          id: 'b',
          title: 'item 1',
          data: null,
          layout:  {i: 'b', x: 0, y: 0, w: 12, h: 4, minW: 3, maxW: 12, minH: 3},
        },
        {
          id: 'c',
          title: 'item 2',
          data: {title: 'item A'},
          layout:  {i: 'c', x: 0, y: 4, w: 12, h: 4, minW: 3, maxW: 12, minH: 3},
        },
        {
            id: 'd',
            title: 'item 3',
            data: null,
            layout:  {i: 'd', x: 0, y: 8, w: 12, h: 4, minW: 3, maxW: 12, minH: 3},
          },
      ]
      }
      ,
      4: {
        type: 'Layout4',
        title: 'Layout Number 4',
        items: [
        {
          id: 'b',
          title: 'item 1',
          data: null,
          layout:  {i: 'b', x: 0, y: 0, w: 12, h: 4, minW: 3, maxW: 12, minH: 3},
        },
        {
          id: 'c',
          title: 'item 2',
          data: {title: 'item A'},
          layout:  {i: 'c', x: 0, y: 4, w: 12, h: 4, minW: 3, maxW: 12, minH: 3},
        },
        {
            id: 'd',
            title: 'item 3',
            data: null,
            layout:  {i: 'd', x: 0, y: 8, w: 12, h: 4, minW: 3, maxW: 12, minH: 3},
          },
          {
            id: 'e',
            title: 'item 5',
            data: null,
            layout:  {i: 'e', x: 0, y: 20, w: 5, h: 8, minW: 3, maxW: 12, minH: 3},
          },
          {
            id: 'f',
            title: 'item 5',
            data: {title: 'item E'},
            layout:  {i: 'f', x: 5, y: 20, w: 5, h: 8, minW: 3, maxW: 12, minH: 3},
          },
      ]
      }
    }
  };