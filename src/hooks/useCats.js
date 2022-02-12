import { startGetCats } from 'actions/catActions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export const useCats = () => {
    const dispatch = useDispatch()
    const { cats, error, loading } = useSelector(state => state.cats)
    useEffect(() => {
        dispatch(startGetCats())
    }, [dispatch])

    return {
        cats,
        error,
        loading,
    }
}
