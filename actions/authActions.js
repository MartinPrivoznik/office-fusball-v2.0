import * as TYPES from '../store/types'

export const updateAuth = (auth) => (dispatch) => {
    dispatch({
        type: TYPES.UPDATE_AUTH,
        payload: auth,
    })
}
