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
        <div>
            Add a new cat
            <hr />
            <CatForm />
            <Link to='/'>&larr; Go back</Link>
        </div>
    )
}
