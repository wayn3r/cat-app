import { types } from 'reducers/catReducer'

export const getCats = (cats, error = false) => ({
    type: types.GET_ALL,
    payload: {
        cats,
        error,
        loading: false,
    },
})

export const startGetCats = () => {
    return async dispatch => {
        const request = await fetch('/api/cat', {
            method: 'GET',
        })
        if (!request.ok) {
            const { message } = await request.json()
            return dispatch(getCats([], message))
        }
        const cats = await request.json()
        dispatch(getCats(cats))
    }
}
