const initial = {
    breeds: [],
    loading: false,
    error: false,
}
export const breedReducer = (state = initial, action) => {
    const { type, payload } = action

    switch (type) {
        case types.GET_BREED_BY_NAME: {
            const {
                breeds = initial.breeds,
                error = initial.error,
                loading = initial.loading,
            } = payload
            return {
                ...state,
                error,
                loading,
                breeds,
            }
        }
        case types.ADD_BREED: {
            const { breed, error } = payload
            if (error) return { ...state, error, loading: false }
            return {
                ...state,
                breeds: [breed, ...state.breeds],
                loading: false,
            }
        }
        case types.REMOVE_BREED: {
            const { id, error } = payload
            if (error) return { ...state, error, loading: false }
            return {
                ...state,
                breeds: state.breeds.filter(breed => breed.id !== id),
                loading: false,
            }
        }
        case types.LOADING: {
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
    GET_BREED_BY_NAME: 'GET BREED BY NAME',
    ADD_BREED: 'ADD BREED',
    REMOVE_BREED: 'REMOVE BREED',
    LOADING: '[START/STOP] LOADING BREED',
}
