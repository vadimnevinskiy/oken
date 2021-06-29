import './App.css';
import 'materialize-css'


import {useDispatch} from "react-redux";
import React, {Suspense, useEffect} from "react";
import {booksApi} from "./redux/api";
import {setBooks} from "./redux/books-reducer";
import Preloader from "./common/Preloader/Preloader";
import {Route} from "react-router-dom";


const BooksList = React.lazy(() => import ("./pages/BooksList/BooksList"));
const Detail = React.lazy(() => import ("./pages/Detail/Detail"));
const AddBook = React.lazy(() => import ("./pages/AddBook/AddBook"));


type PropsType = {

}
const App: React.FC<PropsType> = () => {
    const dispatch = useDispatch()


    //Get all items from server
    useEffect(() => {
        booksApi.getBooks()
            .then((response: any) => {
                dispatch(setBooks(response.data))
            })
    }, [])



    return (
        <>
            <div className={'header blue darken-3 z-depth-4'}></div>
            <Suspense fallback={<Preloader />}>
                <div>
                    <Route path={'/'} exact render={() => <BooksList />} />
                    <Route path={'/detail/:id'} render={() => <Detail />} />
                    <Route path={'/add'} render={() => <AddBook />} />
                </div>
            </Suspense>
        </>
    );
}

export default App;
