import { Provider } from 'react-redux'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { store } from './store'
import { CatPage } from 'cat/components/CatPage'
import { CatDetail } from 'cat/components/CatDetail'
import { NewCatPage } from 'cat/components/NewCatPage'

export const CatApp = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/' element={<CatPage />} />
                    <Route path='/cat/:id' element={<CatDetail />} />
                    <Route path='/add' element={<NewCatPage />} />
                    <Route path='/*' element={<Navigate to='/' />} />
                </Routes>
            </Router>
        </Provider>
    )
}
