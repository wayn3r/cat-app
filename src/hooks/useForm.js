import { useCallback, useState } from 'react'
/**
 *
 * @param {Object} initialState
 * @returns {[{Object}, function(), function()]}
 */
export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)
    const reset = useCallback(() => setValues(initialState), [initialState])
    const handleInputChange = useCallback(({ target }) => {
        const { name, value } = target
        setValues(state => ({ ...state, [name]: value }))
    }, [])

    return [values, handleInputChange, reset]
}
