import { useCats } from 'cat/hooks/useCats'
import { Link } from 'react-router-dom'
import { CatCard } from './CatCard'

export const CatPage = () => {
    const { cats } = useCats({ request: true })
    const noCats = !Boolean(cats.length)
    return (
        <div>
            <h1>Cats</h1>
            <Link to='/add'>Add Cat</Link>
            <hr />
            {noCats && <span>There are no cats yet</span>}
            {cats.map(({ id, name, description }) => (
                <CatCard key={id} id={id} name={name} description={description} />
            ))}
        </div>
    )
}
