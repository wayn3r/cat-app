import { useCats } from './useCats'
export const useCat = id => {
    const { cats } = useCats()

    return cats.find(cat => cat.id === parseInt(id))
}
