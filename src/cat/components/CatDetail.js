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

    if(removed === parseInt(id)) return <Navigate to='/' />
    if (loading || cat === undefined) return 'Loading...'
    if (cat === null) return <CatNotFound id={id} />

    const { name, description, latitude, longitude } = cat
    const handleDelete = () => remove(id)

    return (
        <div className='cat-detail'>
            CatDetail: {id}
            <button onClick={toggleShowForm}>{showForm ? 'Cancel' : 'Edit'}</button>
            <button onClick={handleDelete}>Delete</button>
            {showForm && <CatForm defaultCat={cat} />}
            <ul>
                <li>Cat name: {name}</li>
            </ul>
            <p>{description}</p>
            <Link to='/' onClick={clearSelectedCat}>
                &larr; Go back
            </Link>
            <LocationMap latitude={latitude} longitude={longitude} />
        </div>
    )
}
