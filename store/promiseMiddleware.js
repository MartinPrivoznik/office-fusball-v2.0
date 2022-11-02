function createMiddle(extraArgument) {
    return ({ dispatch, getState }) =>
        (next) =>
        (action) => {
            if (typeof action === 'function') {
                return action(dispatch, getState, extraArgument)
            }

            return next(action)
        }
}

const promiseMiddleware = createMiddle()
promiseMiddleware.withExtraArgument = createMiddle

export default promiseMiddleware
