import { useCallback, useState } from 'react'

/**
 *
 * @param {Boolean} initialState
 * @returns {[Boolean, (state:Boolean) => void]}
 */
export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState)
    const toggleState = useCallback(forcedState => {
        const newState = typeof forcedState === 'boolean' ? forcedState : false
        setState(state => newState || !state)
    }, [])
    return [state, toggleState]
}
