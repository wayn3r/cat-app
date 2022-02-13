import { useCats } from 'cat/hooks/useCats'
import { BreedAutoCompleteField } from 'breed/components/BreedAutoCompleteField'
import { useForm } from 'hooks/useForm'
const initial = {
    name: '',
    breedId: '',
    description: '',
    latitude: '',
    longitude: '',
}
export const CatForm = ({ defaultCat = initial, onSubmit }) => {
    const [form, handleInputChange] = useForm(defaultCat)
    const { save, error } = useCats()
    const { name, breedId, description, latitude, longitude, id } = form
    /** @param {SubmitEvent} e*/
    const handleSubmit = e => {
        e.stopPropagation()
        e.preventDefault()
        save({ id, name, breedId, description, latitude, longitude })
        onSubmit?.(e)
    }
    return (
        <form onSubmit={handleSubmit}>
            {error.name && <span>{error.name}</span>}
            <label>
                Name
                <input type='text' value={name} name='name' onChange={handleInputChange} />
            </label>
            {error.breedId && <span>{error.breedId}</span>}
            <BreedAutoCompleteField value={breedId} name='breedId' onChange={handleInputChange} />
            {error.description && <span>{error.description}</span>}
            <label>
                Description
                <textarea value={description} name='description' onChange={handleInputChange} />
            </label>
            <div>
                {error.latitude && <span>{error.latitude}</span>}
                <label>
                    Latitude
                    <input
                        type='text'
                        value={latitude}
                        name='latitude'
                        onChange={handleInputChange}
                    />
                </label>
                {error.longitude && <span>{error.longitude}</span>}
                <label>
                    Longitude
                    <input
                        type='text'
                        value={longitude}
                        name='longitude'
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <button type='submit'>Save</button>
        </form>
    )
}
