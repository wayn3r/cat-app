import { Link } from 'react-router-dom'
export const CatNotFound = ({ id }) => {
    return (
        <div className='cat-not-found'>
            Cat with id {id} not found
            <Link to='/'>&larr; Go Home</Link>
        </div>
    )
}
