import './App.css'
import 'materialize-css'

import React, { Suspense, useEffect } from 'react'
import Preloader from './common/Preloader/Preloader'
import { Route } from 'react-router-dom'
import { booksApi } from './redux/api'
import { setBooks } from './redux/books-reducer'
import { useDispatch } from 'react-redux'

const BooksList = React.lazy(() => import('./pages/BooksList/BooksList'))
const Detail = React.lazy(() => import('./pages/Detail/Detail'))
const AddBook = React.lazy(() => import('./pages/AddBook/AddBook'))

type PropsType = {}
const App: React.FC<PropsType> = () => {
    const dispatch = useDispatch()

    // Get all books from the server
    const getAllBooksFromServer = () => {
        return booksApi.getBooks().then((response: any) => {
            dispatch(setBooks(response.data))
        })
    }

    //Get all items from server
    useEffect(() => {
        getAllBooksFromServer().then()
    }, [])

    return (
        <>
            <Suspense fallback={<Preloader />}>
                <div>
                    <Route
                        path={'/'}
                        exact
                        render={() => <BooksList getAllBooksFromServer={getAllBooksFromServer} />}
                    />
                    <Route path={'/detail/:id'} render={() => <Detail />} />
                    <Route
                        path={'/add'}
                        render={() => <AddBook getAllBooksFromServer={getAllBooksFromServer} />}
                    />
                </div>
            </Suspense>
        </>
    )
}

export default App
