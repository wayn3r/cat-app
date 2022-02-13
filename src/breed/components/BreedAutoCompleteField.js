import { useBreeds } from 'breed/hooks/useBreeds'
import { BreedCard } from './BreedCard'

export const BreedAutoCompleteField = ({ value, name, onChange }) => {
    const isId = typeof value === 'number'
    const { breeds, loading, error, add } = useBreeds(isId ? '' : value)
    const canAdd = breeds.length < 1 && !loading && !error
    const handleAddNewBreed = () => add(value)
    const { name: breedName } = breeds.find(b => b.id === parseInt(value)) || { name: value }
    const handleInputChange = e => {
        const name = e.target.value
        const breed = breeds.find(b => b.name === name)
        e.target.value ??= breed.id
        onChange?.(e)
    }
    const handleCardClick = id => {
        onChange?.({ target: { name, value: id } })
    }
    return (
        <label>
            Breed
            <input type='text' value={breedName} name={name} onChange={handleInputChange} />
            {canAdd && <button onClick={handleAddNewBreed}>Add</button>}
            {error && <span>{error}</span>}
            {loading && <span>Loading...</span>}
            <section>
                {breeds.map(({ id, name }) => (
                    <BreedCard key={id} id={id} name={name} onClick={handleCardClick} />
                ))}
            </section>
        </label>
    )
}
