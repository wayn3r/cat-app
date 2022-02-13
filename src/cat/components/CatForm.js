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
        <form className='cat-form' onSubmit={handleSubmit}>
            <label className='cat-form__group cat-form__group--name'>
                Name
                <input type='text' value={name} name='name' onChange={handleInputChange} />
                <span>{error.name}</span>
            </label>
            <BreedAutoCompleteField
                className='cat-form__group cat-form__group--breed'
                value={breedId}
                name='breedId'
                onChange={handleInputChange}
                errorMessage={error.breedId}
            />
            <label className='cat-form__group cat-form__group--description'>
                Description
                <textarea
                    wrap='physical'
                    value={description}
                    name='description'
                    onChange={handleInputChange}
                />
                <span>{error.description}</span>
            </label>
            <label className='cat-form__group cat-form__group--latitude'>
                Latitude
                <input type='text' value={latitude} name='latitude' onChange={handleInputChange} />
                <span>{error.latitude}</span>
            </label>
            <label className='cat-form__group cat-form__group--longitude'>
                Longitude
                <input
                    type='text'
                    value={longitude}
                    name='longitude'
                    onChange={handleInputChange}
                />
                <span>{error.longitude}</span>
            </label>
            
            <button className='button cat-form__submit' type='submit'>
                Save
            </button>
        </form>
    )
}
