import compose from './compose'

export default function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error(
        `Dispatching while constructing your middleware is not allowed. ` +
          `Other middleware would not be applied to this dispatch.`
      )
    }

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)

    // ({dispatch, getState}) => next => action => {
    //   console.log(`noticeEnhancer2`);
    //   return next(action)
    // }

    // next => action => {
    //   console.log(`noticeEnhancer2`);
    //   return next(action)
    // }

    // ((...arg) => n1(n2(n3(...arg))))(dispatch)

    // dispatch => d => {
    //   return action => {
    //     console.log(`noticeEnhancer2`);
    //     return (action => {
    //       console.log(`noticeEnhancer2`);
    //       return (action => {
    //         console.log(`noticeEnhancer2`);
    //         return d(action)
    //       })(action)
    //     })(action)
    //   }
    // }

    return {
      ...store,
      dispatch
    }
  }
}
