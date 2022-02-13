import { Link } from 'react-router-dom'

export const CatCard = ({ id, name, description }) => {
    return (
        <div className='cat-card'>
            <span className='cat-card__name'>{name}</span>
            <span className='cat-card__description'>{description}</span>
            <Link className='link cat-card__action' to={`cat/${id}`}>
                Details
            </Link>
        </div>
    )
}
