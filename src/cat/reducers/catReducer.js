const initial = {
    loading: false,
    error: false,
    cats: [],
    cat: undefined,
    removed: null,
}
export const catReducer = (state = initial, action) => {
    const { type, payload } = action

    switch (type) {
        case types.GET_ALL: {
            const {
                loading = initial.loading,
                error = initial.error,
                cats = initial.cats,
            } = payload
            return {
                ...state,
                loading,
                error,
                cats,
            }
        }
        case types.GET_CAT: {
            const { loading = initial.loading, error = initial.error, cat = initial.cat } = payload
            return {
                ...state,
                loading,
                error,
                cat,
            }
        }
        case types.SAVE_CAT: {
            const { cat, error } = payload
            if (error) {
                return { ...state, error }
            }
            return {
                ...state,
                cats: [cat, ...state.cats.filter(c => c.id !== cat.id)],
                cat,
            }
        }
        case types.REMOVE_CAT: {
            const { id, error } = payload
            if (error) {
                return { ...state, error }
            }
            return {
                ...state,
                cats: state.cats.filter(c => c.id !== id),
                cat: state.cat.id === id ? initial.cat : state.cat,
                removed: id,
            }
        }
        case types.REMOVE_SELECTED_CAT: {
            return {
                ...state,
                cat: initial.cat,
            }
        }
        case types.LOADING_CATS: {
            return {
                ...state,
                loading: Boolean(payload),
            }
        }
        default: {
            return state
        }
    }
}

export const types = {
    GET_ALL: 'GET ALL CATS',
    GET_CAT: 'GET A CAT',
    SAVE_CAT: 'SAVE A CAT',
    REMOVE_CAT: 'REMOVE A CAT',
    REMOVE_SELECTED_CAT: 'REMOVE SELECTED CAT',
    LOADING_CATS: 'START / STOP LOADING CATS FROM API',
}
