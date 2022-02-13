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
            const { breed } = payload
            if (!breed.id || !breed.name) return state
            return {
                ...state,
                breeds: [breed, ...state.breeds],
            }
        }
        case types.REMOVE_BREED: {
            const { id } = payload
            if (!id) return state
            return {
                ...state,
                breeds: state.breeds.filter(breed => breed.id !== id),
            }
        }
        case types.LOADING_BREEDS: {
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
    LOADING_BREEDS: '[START/STOP] LOADING BREEDS FROM API',
}
