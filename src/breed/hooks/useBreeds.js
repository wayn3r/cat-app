import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startAddBreed, startGetBreedByName, startRemoveBreed } from 'breed/actions/breedActions'

export const useBreeds = (breedName = '') => {
    const dispatch = useDispatch()
    const { loading, error, breeds } = useSelector(state => state.breeds)
    useEffect(() => {
        dispatch(startGetBreedByName(breedName))
    }, [breedName])
    const add = useCallback(name => dispatch(startAddBreed(name)), [])
    const remove = useCallback(id => dispatch(startRemoveBreed(id)), [])
    return {
        loading,
        error,
        breeds,
        add,
        remove,
    }
}
