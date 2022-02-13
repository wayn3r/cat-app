import { deleteBreed } from 'breed/services/deleteBreed'
import { types } from 'breed/reducers/breedReducer'
import { toast } from 'helpers/toast'
import { fetchBreedByName } from 'breed/services/fetchBreedByName'
export const getBreedByName = (breeds, error = false) => ({
    type: types.GET_BREED_BY_NAME,
    payload: { breeds, error, loading: false },
})
export const loadingBreeds = (loading = true) => ({
    type: types.LOADING_BREEDS,
    payload: loading,
})
export const addBreed = breed => ({
    type: types.ADD_BREED,
    payload: { breed },
})
export const removeBreed = id => ({
    type: types.REMOVE_BREED,
    payload: { id },
})
export const startRemoveBreed = id => {
    return async dispatch => {
        const { ok, data } = await deleteBreed(id)
        if (!ok) {
            toast({ title: data.message, icon: 'error' })
            return
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
