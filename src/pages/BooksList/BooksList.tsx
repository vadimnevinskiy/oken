import React, {useCallback, useEffect, useState} from "react";
import classes from './BooksList.module.css'
import Paginator from '../../common/Paginator/Paginator'
import {deleteBook, setBooks, setSearchBook} from '../../redux/books-reducer'
import {useDispatch, useSelector} from 'react-redux'
import FloatingButton from '../../common/FloatingButton/FloatingButton'
import BookItem from './BookItem'
import {BookType} from '../../types/types'
import {AppStateType} from '../../redux/store'
import {Field, Form} from "react-final-form";
import {booksApi} from "../../redux/api";


type PropsType = {}

const BooksList: React.FC<PropsType> = () => {
    const dispatch = useDispatch()
    const portionSize: number = 3 // Number of records displayed
    const books: BookType[] = useSelector(({booksPage}: AppStateType) => booksPage.books) //Get all books from store
    const [currentPage, setCurrentPage] = useState<number>(1); //Current page
    const [cropList, setCropList] = useState<BookType[]>([]) // Crop list of books for display at one page


    const getAllBooksFromServer = () => {
        return booksApi.getBooks()
            .then((response: any) => {
                dispatch(setBooks(response.data))
            })
    }


    const searchBook = async (values: SearchType) => {
        await getAllBooksFromServer()
        dispatch(setSearchBook(values.searchText))
        setCurrentPage(1)
    }


    //Get all items from server
    useEffect( () => {
        getAllBooksFromServer().then()
    }, [])

    //Get all items from server
    useEffect(() => {
    }, [books])


    //Trim the books array based on the current page
    useEffect(() => {
        const croppedArray = books.slice((currentPage - 1) * portionSize, currentPage * portionSize)
        setCropList(croppedArray)
    }, [currentPage, books])


    //Set current page
    const selectPage = useCallback(currentPage => {
        setCurrentPage(currentPage)
    }, [])

    // Delete Book item by ID
    const deleteItem = useCallback(bookId => {
        dispatch(deleteBook(bookId))
    }, [])


    type SearchType = {
        searchText: string
    }


    const resetSearch = (reset: () => void) => {
        getAllBooksFromServer().then()
        reset()
    }

    return (
        <>
            <div className={classes.header + ' blue darken-3 z-depth-4'}>
                <Form
                    onSubmit={searchBook}
                    render={({handleSubmit, form, submitting, pristine, values}: any) => (
                        <form onSubmit={handleSubmit}>
                            <div className={classes.form}>
                                <div className="row">
                                    <div className="col s5 m7 l8 xl9">
                                        <div className="input-field">
                                            <Field id="searchText" type="text" name="searchText" component="input"/>
                                            <label htmlFor="searchText">Search</label>
                                        </div>
                                    </div>
                                    <div className="col s7 m5 l4 xl3">
                                        <div className={classes.buttonBox + " right"}>
                                            <button type="submit"
                                                    className={classes.button + " btn-large waves-effect waves-light"}>
                                                Search
                                            </button>
                                            <button
                                                className={classes.button + " btn-large waves-effect waves-light"}
                                                type="button"
                                                onClick={() => resetSearch(form.reset)}
                                                disabled={submitting || pristine}
                                            >Clear
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                />
            </div>
            <Paginator
                itemsLength={books.length}
                currentPage={currentPage}
                portionSize={portionSize}
                selectPage={selectPage}
            />
            {
                cropList &&
                <div className={classes.booksList + " row"}>
                    {
                        cropList.map((book, index) => {
                            return (
                                <BookItem key={`${book.id}_${index}`} book={book} deleteItem={deleteItem}/>
                            )
                        })
                    }
                </div>
            }
            <FloatingButton
                pathLink={'/add'}
                icon={'add'}
                color={'red'}
            />
        </>
    )
}

export default BooksList
