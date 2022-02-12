import { useCats } from 'hooks/useCats'
import { CatCard } from './CatCard'

export const CatPage = () => {
    const { cats } = useCats()
    const noCats = !Boolean(cats.length)
    return (
        <div>
            <h1>Cats</h1>
            <hr />
            {noCats && <span>There are no cats yet</span>}
            {cats.map(({ id, name, description }) => (
                <CatCard key={id} id={id} name={name} description={description} />
            ))}
        </div>
    )
}
