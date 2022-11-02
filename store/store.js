import configureStore from './configureStore'
import initialState from './configureStoreInitialState'

export const store = configureStore(initialState)

export default store
