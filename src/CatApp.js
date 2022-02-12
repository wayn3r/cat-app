import { Provider } from 'react-redux'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { CatPage } from 'cat/CatPage'
import { store } from './store'
import { CatDetail } from 'cat/CatDetail'

export const CatApp = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/' element={<CatPage />} />
                    <Route path='/cat/:id' element={<CatDetail />} />
                    <Route path='/*' element={<Navigate to='/' />} />
                </Routes>
            </Router>
        </Provider>
    )
}
