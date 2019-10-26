const store = {
  dispatch: (action) => console.log("It's original dispatch", action)
}

const log = store => next => action => {
  console.log('im loggin');
  return next(action);
}

const other = store => next => action => {
  console.log('im others');
  return next(action);
}

function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice()
  middlewares.reverse()
  let dispatch = store.dispatch
  middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)))
  // console.log("dispatch: ", dispatch);
  return Object.assign({}, store, { dispatch })
}

const store2 = applyMiddleware(store, [log, other]);

// console.log("store2: ", store2.dispatch);
store2.dispatch({ type: 'test', payload: 'test'})
