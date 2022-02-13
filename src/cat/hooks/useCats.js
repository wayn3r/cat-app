import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    startGetCatById,
    startGetCats,
    startSaveCat,
    removeSelectedCat,
    startRemoveCat,
} from 'cat/actions/catActions'
const initial = { id: '', request: false }
export const useCats = ({ id, request } = initial) => {
    const dispatch = useDispatch()
    const { cats, error, loading, cat, removed } = useSelector(state => state.cats)
    useEffect(() => {
        if (!id && request) {
            dispatch(startGetCats(request))
        }
        if (id) {
            dispatch(startGetCatById(id))
        }
    }, [dispatch, request])
    const save = useCallback(cat => dispatch(startSaveCat(cat)), [])
    const clearSelectedCat = useCallback(() => dispatch(removeSelectedCat()), [])
    const remove = useCallback(id => dispatch(startRemoveCat(id)), [])
    return {
        cats,
        cat,
        error,
        loading,
        removed,
        clearSelectedCat,
        remove,
        save,
    }
}
