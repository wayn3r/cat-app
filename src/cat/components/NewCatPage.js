import { useCats } from 'cat/hooks/useCats'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CatForm } from './CatForm'

export const NewCatPage = () => {
    const navigate = useNavigate()
    const { cat } = useCats()
    useEffect(() => {
        if (cat?.id) navigate('/cat/' + cat.id)
    }, [cat])
    return (
        <div className='new-cat-page'>
            <h1 className='new-cat-page__title'>Add a new cat</h1>
            <hr />
            <CatForm />
            <Link className='link new-cat-page__goback-link' to='/'>
                &larr; Go back
            </Link>
        </div>
    )
}
