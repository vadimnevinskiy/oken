import './App.css';
import 'materialize-css'

import {useDispatch, useSelector} from "react-redux";
import React, {Suspense, useEffect} from "react";
import {booksApi} from "./redux/api";
import {setBooks} from "./redux/books-reducer";
import Preloader from "./common/Preloader/Preloader";
import {Route} from "react-router-dom";


const BooksList = React.lazy(() => import ("./pages/BooksList/BooksList"));
const Detail = React.lazy(() => import ("./pages/Detail/Detail"));
const AddBook = React.lazy(() => import ("./pages/AddBook/AddBook"));

function App() {
    const dispatch = useDispatch()
    const books = useSelector(({booksPage}) => booksPage.books);

    useEffect(() => {
        booksApi.getBooks()
            .then(responce => {
                console.log(responce)
                dispatch(setBooks(responce.data))
            })
    }, [])



    return (
        <>
            <div className={'header blue darken-3 z-depth-4'}></div>
            <Suspense fallback={<Preloader />}>
                <div>
                    <Route path={'/'} exact render={() => <BooksList books={books} />} />
                    <Route path={'/detail/:id'} render={() => <Detail />} />
                    <Route path={'/add'} render={() => <AddBook />} />
                </div>
            </Suspense>
        </>
    );
}

export default App;
