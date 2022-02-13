import { useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addBreed, startGetBreedByName, startRemoveBreed } from 'breed/actions/breedActions'
import { saveBreed } from 'breed/services/saveBreed'

export const useBreeds = (breedName = '') => {
    const dispatch = useDispatch()
    const { loading, error, breeds } = useSelector(state => state.breeds)
    useEffect(() => {
        dispatch(startGetBreedByName(breedName))
    }, [breedName])
    const add = useCallback(async name => {
        const breed = await saveBreed(name)
        dispatch(addBreed(breed))
    }, [])
    const remove = useCallback(async id => {
        dispatch(startRemoveBreed(id))
    }, [])
    return {
        loading,
        error,
        breeds,
        add,
        remove,
    }
}
