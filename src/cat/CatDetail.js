import { Link, useParams } from 'react-router-dom'
import { useCat } from 'hooks/useCat'
import { CatNotFound } from './CatNotFound'

export const CatDetail = () => {
    const { id } = useParams()
    const cat = useCat(id)
    if (!cat) return <CatNotFound id={id} />
    const { name, description } = cat
    return (
        <div className='cat-detail'>
            CatDetail: {id}
            <ul>
                <li>Cat name: {name}</li>
            </ul>
            <p>{description}</p>
            <Link to={-1}> &larr; Go back</Link>
        </div>
    )
}
