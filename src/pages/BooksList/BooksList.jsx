import React from "react";
import classes from './BooksList.module.css'
import {NavLink} from "react-router-dom";


const BooksList = ({books}) => {
    return (
        <div className={classes.booksList + " row"}>
            {
                books.map((book, index) => {
                    return (
                        <div key={`${book.id}_${index}`} className="col s12 m6 l4">
                            <h5 className={classes.title}>{book.title} {book.year} г.</h5>
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img className={classes.photo} src={book.photoUrl} />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <div className={classes.author}>{book.author}</div>
                                        <p>{book.description.slice(0, 80)}...</p>
                                    </div>
                                    <div className="card-action">
                                        <NavLink to={`/detail/${book.id}`}>Detail</NavLink>
                                        <a href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }



            <div className="fixed-action-btn">
                <NavLink to={'/add'} className="btn-floating btn-large red">
                    <i className="large material-icons">add</i>
                </NavLink>
            </div>
        </div>
    )
}

export default BooksList
