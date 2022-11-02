import { applyMiddleware, compose, createStore } from 'redux'

import promiseMiddleware from './promiseMiddleware'
import rootReducer from './rootReducer'

export const configureStore = (initialState) => {
    const middleware = [promiseMiddleware]
    const enhancers = []

    const composer = compose(applyMiddleware(...middleware), ...enhancers)

    return createStore(rootReducer, initialState, composer)
}

export default configureStore
