import { Link, useParams } from 'react-router-dom'
import { useCat } from 'hooks/useCat'
import { CatNotFound } from './CatNotFound'
import { CatLocationMap } from './CatLocationMap'

export const CatDetail = () => {
    const { id } = useParams()
    const cat = useCat(id)
    if (!cat) return <CatNotFound id={id} />
    const { name, description, latitude, longitude } = cat
    return (
        <div className='cat-detail'>
            CatDetail: {id}
            <ul>
                <li>Cat name: {name}</li>
            </ul>
            <p>{description}</p>
            <Link to={-1}> &larr; Go back</Link>
            <CatLocationMap desc={`Here's ${name}`} latitude={latitude} longitude={longitude} />
        </div>
    )
}
