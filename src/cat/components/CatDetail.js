import { Link, Navigate, useParams } from 'react-router-dom'
import { useCats } from 'cat/hooks/useCats'
import { CatNotFound } from './CatNotFound'
import { LocationMap } from 'components/LocationMap'
import { useToggle } from 'hooks/useToggle'
import { CatForm } from './CatForm'

export const CatDetail = () => {
    const { id } = useParams()
    const [showForm, toggleShowForm] = useToggle()
    const { cat, loading, removed, clearSelectedCat, remove } = useCats({ id })

    if (removed === parseInt(id)) return <Navigate to='/' />
    if (loading || cat === undefined) return 'Loading...'
    if (cat === null) return <CatNotFound id={id} />

    const { name, description, latitude, longitude, breed = '' } = cat
    const handleDelete = () => remove(id)

    return (
        <div className='cat-detail-page'>
            <h1 className='cat-detail-page__title'>
                ({id}) <span>{name}</span> details
            </h1>
            <hr className='cat-detail-page__divisor' />

            <div
                className={
                    'cat-detail-page__content' + (showForm ? ' cat-detail-page__content--edit' : '')
                }
            >
                <div className='cat-detail-page__info'>
                    <h3>Description</h3>
                    <span className='cat-detail-page__breed'>{breed}</span>
                    <p className='cat-detail-page__description'>{description}</p>
                    <ul className='cat-detail-page__location'>
                        <li>
                            lat: <span>{latitude}</span>
                        </li>
                        <li>
                            long: <span>{longitude}</span>
                        </li>
                    </ul>
                </div>
                <div className='cat-detail-page__edit-form'>
                    <CatForm defaultCat={cat} onSubmit={toggleShowForm}/>
                </div>
                <Link to='/' className='link cat-detail-page__goback-link' onClick={clearSelectedCat}>
                    &larr; Go back
                </Link>
                <button className='cat-detail-page__edit-button button' onClick={toggleShowForm}>
                    {showForm ? 'Cancel' : 'Edit'}
                </button>
                <button className='cat-detail-page__delete-button button' onClick={handleDelete}>
                    Delete
                </button>
            </div>

            <LocationMap
                className='cat-detail-page__map'
                latitude={latitude}
                longitude={longitude}
            />
        </div>
    )
}
