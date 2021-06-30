import React from 'react'
import classes from "./BooksList.module.css";
import {NavLink} from "react-router-dom";
import {BookType} from "../../types/types";


type PropsType = {
    book: BookType
    deleteItem: (bookId: number) => void
}
const BookItem: React.FC<PropsType> = ({book, deleteItem}) => {
    return (
        <div className="col s12 m12 l6 xl4">
            <h5 className={classes.title}>{book.title}</h5>
            <div className="card horizontal">
                <div className="card-image">
                    <img className={classes.photo} src={book.photoUrl}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <div className={classes.author}>{book.author}</div>
                        <h5 className={classes.title}>{book.year} г.</h5>
                        <div className={classes.content}
                             dangerouslySetInnerHTML={{__html: book.description.slice(0, 80)}}></div>
                    </div>
                    <div className="card-action">
                        <NavLink to={`/detail/${book.id}`}
                                 className="waves-effect waves-light btn-small">Detail</NavLink>
                        <a onClick={() => deleteItem(book.id)}
                           className="waves-effect waves-light btn-floating btn-small right"><i
                            className="material-icons right">delete_forever</i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookItem
