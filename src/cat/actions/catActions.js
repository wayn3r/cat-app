import { types } from 'cat/reducers/catReducer'
import { deleteCat } from 'cat/services/deleteCat'
import { fetchAllCats } from 'cat/services/fetchAllCats'
import { fetchCatById } from 'cat/services/fetchCatById'
import { saveCat } from 'cat/services/saveCat'

export const getCats = (cats, error = false) => ({
    type: types.GET_ALL,
    payload: {
        cats,
        error,
        loading: false,
    },
})
export const getCat = (cat, error = false) => ({
    type: types.GET_CAT,
    payload: {
        cat,
        error,
        loading: false,
    },
})
export const loadingCats = (loading = true) => ({
    type: types.LOADING_CATS,
    payload: loading,
})
export const saveCatAction = (cat, error = false) => ({
    type: types.SAVE_CAT,
    payload: { cat, error },
})
export const removeCat = (id, error = false) => ({
    type: types.REMOVE_CAT,
    payload: { id, error },
})
export const removeSelectedCat = () => ({
    type:types.REMOVE_SELECTED_CAT
})
export const startSaveCat = cat => {
    return async dispatch => {
        const { ok, data } = await saveCat(cat)
        if (!ok) {
            return dispatch(saveCatAction(null, data.errors || data.message))
        }
        dispatch(saveCatAction(data))
    }
}
export const startRemoveCat = id => {
    return async dispatch => {
        const { ok, data } = await deleteCat(id)
        if (!ok) {
            return dispatch(removeCat(null, data.errors || data.message))
        }
        dispatch(removeCat(data.id))
    }
}

export const startGetCatById = id => {
    return async (dispatch, getState) => {
        const { cats } = getState().cats
        const cat = cats.find(cat => cat.id === id)
        if (cat) {
            return dispatch(getCat(cat))
        }
        dispatch(loadingCats())
        const { ok, data } = await fetchCatById(id)
        if (!ok) {
            return dispatch(getCat(null, data.message))
        }
        const [fromApiCat] = data
        dispatch(getCat(fromApiCat))
    }
}
export const startGetCats = (force = false) => {
    return async (dispatch, getState) => {
        const { loading, cats } = getState().cats
        const cannotRequest = loading || cats.length > 0
        if (cannotRequest && !force) return
        dispatch(loadingCats())
        const { ok, data } = await fetchAllCats()
        if (!ok) {
            return dispatch(getCats([], data.message))
        }
        dispatch(getCats(data))
    }
}
