import { createSelector } from 'reselect';

import { initialState } from './constants';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const selectActiveLayouts = appState => appState.activeLayouts.map( i => ({...appState.layouts[i], id: i}));


const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

  const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

  
  const makeSelectActiveLayouts = () =>
  createSelector(
    selectGlobal,
    selectActiveLayouts,
  );

  const makeSelectLayoutByUrlId = id =>
  createSelector(
    selectGlobal,
    global => global.layouts[id]
  );

  
  const makeSelectDragableList = () =>
  createSelector(
    selectGlobal,
    global => global.draggableList
  );

  export {
    selectGlobal,
    makeSelectLoading,
    makeSelectError,
    makeSelectLocation,
    makeSelectActiveLayouts,
    makeSelectLayoutByUrlId,
    makeSelectDragableList
  };