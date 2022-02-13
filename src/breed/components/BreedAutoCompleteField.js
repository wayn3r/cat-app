import { useBreeds } from 'breed/hooks/useBreeds'
import { BreedCard } from './BreedCard'

export const BreedAutoCompleteField = ({ className, value, name, errorMessage, onChange }) => {
    const isId = typeof value === 'number'
    const { breeds, loading, error, add } = useBreeds(isId ? '' : value)

    const handleAddNewBreed = () => add(value) && handleCardClick('')
    const handleInputChange = e => {
        const name = e.target.value
        const breed = breeds.find(b => b.name === name)
        const id = breed ? breed.id : e.target.value
        handleCardClick(id)
    }
    const handleCardClick = id => {
        onChange?.({ target: { name, value: id } })
    }

    const breed = breeds.find(b => isId && b.id === value)
    const breedName = breed ? breed.name : value
    const canAdd = !breed && !loading && breedName !== ''
    const classes = 'breed-autocomplete' + (className ? ' ' + className : '')
    const noBreeds = breeds.length === 0
    return (
        <label className={classes} tabIndex={0}>
            Breed
            <input type='text' value={breedName} name={name} onChange={handleInputChange} />
            {canAdd && (
                <button
                    className='button breed-autocomplete__add'
                    type='button'
                    onClick={handleAddNewBreed}
                >
                    Add
                </button>
            )}
            <span>{errorMessage || error}</span>
            <small className='breed-autocomplete__loading'>{loading && 'Loading...'}</small>
            {noBreeds || (
                <section className='breed-autocomplete__cards'>
                    {breeds.map(({ id, name }) => (
                        <BreedCard key={id} id={id} name={name} onClick={handleCardClick} />
                    ))}
                </section>
            )}
        </label>
    )
}
