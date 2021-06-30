import './App.css';
import 'materialize-css'

import React, {Suspense, useEffect} from "react";
import Preloader from "./common/Preloader/Preloader";
import {Route} from "react-router-dom";


const BooksList = React.lazy(() => import ("./pages/BooksList/BooksList"));
const Detail = React.lazy(() => import ("./pages/Detail/Detail"));
const AddBook = React.lazy(() => import ("./pages/AddBook/AddBook"));


type PropsType = {

}
const App: React.FC<PropsType> = () => {
    return (
        <>
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
