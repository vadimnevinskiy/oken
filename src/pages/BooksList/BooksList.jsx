import React, {useCallback, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import classes from './BooksList.module.css'
import Paginator from "../../common/Paginator/Paginator";
import {deleteBook} from "../../redux/books-reducer";
import {useDispatch, useSelector} from "react-redux";
import FloatingButton from "../../common/FloatingButton/FloatingButton";


const BooksList = () => {
    const dispatch = useDispatch()
    const portionSize = 3 // Number of records displayed
    const books = useSelector(({booksPage}) => booksPage.books) //Get all books from store
    const [currentPage, setCurrentPage] = useState(1); //Current page
    const [cropList, setCropList] = useState([]) // Crop list of books for display at one page


    //Trim the books array based on the current page
    useEffect(() => {
        const croppedArray = books.slice((currentPage - 1) * portionSize, currentPage * portionSize)
        setCropList(croppedArray)
    }, [currentPage, books])


    //Set current page
    const selectPage = useCallback(currentPage => {
        setCurrentPage(currentPage)
    }, [])



    const deleteItem = useCallback(bookId => {
        dispatch(deleteBook(bookId))
    }, [])



    return (
        <>
            <Paginator currentPage={currentPage} items={books} portionSize={portionSize} selectPage={selectPage}/>
            <div className={classes.booksList + " row"}>
                {
                    cropList.length > 0 &&
                    cropList.map((book, index) => {
                        return (
                            <div key={`${book.id}_${index}`} className="col s12 m6 l4">
                                <h5 className={classes.title}>{book.title} {book.year} г.</h5>
                                <div className="card horizontal">
                                    <div className="card-image">
                                        <img className={classes.photo} src={book.photoUrl}/>
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">
                                            <div className={classes.author}>{book.author}</div>
                                            <div className="content"
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
                    })
                }
            </div>
            <FloatingButton pathLink={'/add'} icon={'add'} color={'red'} />
        </>
    )
}

export default BooksList
