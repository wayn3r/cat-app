import { deleteBreed } from 'breed/services/deleteBreed'
import { types } from 'breed/reducers/breedReducer'
import { fetchBreedByName } from 'breed/services/fetchBreedByName'
import { saveBreed } from 'breed/services/saveBreed'
export const getBreedByName = (breeds, error = false) => ({
    type: types.GET_BREED_BY_NAME,
    payload: { breeds, error, loading: false },
})
export const loadingBreeds = (loading = true) => ({
    type: types.LOADING,
    payload: loading,
})
export const addBreed = (breed, error) => ({
    type: types.ADD_BREED,
    payload: { breed, error },
})
export const removeBreed = (id, error = false) => ({
    type: types.REMOVE_BREED,
    payload: { id, error },
})
export const startAddBreed = name => {
    return async dispatch => {
        dispatch(loadingBreeds())
        const { ok, data } = await saveBreed(name)
        if (!ok) {
            return dispatch(addBreed(null, data.errors || data.message))
        }
        return dispatch(addBreed(data))
    }
}
export const startRemoveBreed = id => {
    return async dispatch => {
        dispatch(loadingBreeds())
        const { ok, data } = await deleteBreed(id)
        if (!ok) {
            return dispatch(removeBreed(null, data.errors || data.message))
        }
        return dispatch(removeBreed(id))
    }
}
export const startGetBreedByName = (name = '') => {
    return async (dispatch, getState) => {
        const { loading, breeds } = getState().breeds
        const cannotRequest = loading || (name === '' && breeds.length > 0)
        if (cannotRequest) return
        dispatch(loadingBreeds())
        const { ok, data } = await fetchBreedByName(name)
        if (!ok) {
            return dispatch(getBreedByName([], data.message))
        }
        dispatch(getBreedByName(data))
    }
}
