import { useBreeds } from 'breed/hooks/useBreeds'
import { BreedCard } from './BreedCard'

export const BreedAutoCompleteField = ({ value, name, onChange }) => {
    const isId = typeof value === 'number'
    const { breeds, loading, error, add } = useBreeds(isId ? '' : value)
    const breed = breeds.find(b => isId && b.id === value)
    const breedName = breed ? breed.name : value
    const canAdd = !breed && !loading && breedName !== ''

    const handleAddNewBreed = () => add(value) && handleCardClick('')
    const handleInputChange = e => {
        const name = e.target.value
        console.log({ name, breeds })
        const breed = breeds.find(b => b.name === name)
        const id = breed ? breed.id : e.target.value
        handleCardClick(id)
    }
    const handleCardClick = id => {
        onChange?.({ target: { name, value: id } })
    }
    return (
        <label>
            Breed
            <input type='text' value={breedName} name={name} onChange={handleInputChange} />
            {canAdd && (
                <button type='button' onClick={handleAddNewBreed}>
                    Add
                </button>
            )}
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
