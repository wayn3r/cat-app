import { useBreeds } from 'breed/hooks/useBreeds'
export const BreedCard = ({ id, name, onClick }) => {
    const handleSelectClick = () => onClick?.(id)
    const { remove } = useBreeds()
    /** @param {Event} e */
    const handleDeleteClick = e => {
        e.stopPropagation()
        remove(id)
    }
    return (
        <div className='breed-card'>
            <button type='button' onClick={handleSelectClick}>
                {name}
            </button>
            <button type='button' onClick={handleDeleteClick}>
                &times;
            </button>
        </div>
    )
}
