const initial = {
    loading: false,
    error: false,
    cats: [],
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
    default: {
        return state
    }
    }
}

export const types = {
    GET_ALL: 'GET ALL CATS',
}
