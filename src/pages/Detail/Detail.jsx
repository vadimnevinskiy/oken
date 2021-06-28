import React, {useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {booksApi} from "../../redux/api";
import classes from './Detail.module.css'

const Detail = () => {
    const history = useHistory();
    const [book, setBook] = useState(null)


    const getDetail = (booksList, bookId) => {
        const result = booksList.filter(item => item.id === bookId)
        setBook(result[0])
    }

    useEffect(async () => {
        await booksApi.getBooks()
            .then(response => {
                const bookId = Number(history.location.pathname.split('/')[2])
                getDetail(response.data, bookId)
            })
    }, [])


    return (
        <>
            {
                book &&
                <div className="row">
                    <div className="col s1 m3">
                        <img className={classes.photo} src={book.photoUrl} alt=""/>
                    </div>
                    <div className="col s1 m9">
                        <h4 className={classes.title}>{book.title}</h4>
                        <div className={classes.author}>{book.author} - {book.year} г.</div>
                        <div>
                            {book.description}
                        </div>
                    </div>
                </div>
            }
            <div className="fixed-action-btn">
                <NavLink to={'/'} className="btn-floating btn-large blue darken-3">
                    <i className="large material-icons">arrow_back</i>
                </NavLink>
            </div>
        </>


    )
}

export default Detail
