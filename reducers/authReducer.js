import * as TYPES from '../store/types'

const initialState = null

export const authReducer = (state, action) => {
    state = state || initialState

    switch (action.type) {
        case TYPES.UPDATE_AUTH:
            return action.payload
        default:
            return state
    }
}

export default authReducer
