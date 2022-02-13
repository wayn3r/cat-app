import { useCats } from 'cat/hooks/useCats'
import { Link } from 'react-router-dom'
import { CatCard } from './CatCard'

export const CatPage = () => {
    const { cats } = useCats({ request: true })
    const noCats = !Boolean(cats.length)
    return (
        <div className='cat-page'>
            <h1 className='cat-page__title'>Cats</h1>
            <Link className='link cat-page__add-cat' to='/add'>
                Add Cat
            </Link>
            <hr />
            {noCats && <span className='cat-page__not-found-message'>There are no cats</span>}
            {cats.map(({ id, name, description }) => (
                <CatCard key={id} id={id} name={name} description={description} />
            ))}
        </div>
    )
}
