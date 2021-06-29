import React, {useCallback, useEffect, useState} from "react";
import classes from './BooksList.module.css'
import Paginator from '../../common/Paginator/Paginator'
import {deleteBook} from '../../redux/books-reducer'
import {useDispatch, useSelector} from 'react-redux'
import FloatingButton from '../../common/FloatingButton/FloatingButton'
import BookItem from './BookItem'
import {BookType} from '../../types/types'
import {AppStateType} from '../../redux/store'


type PropsType = {

}

const BooksList: React.FC<PropsType> = () => {
    const dispatch = useDispatch()
    const portionSize: number = 3 // Number of records displayed
    const books: BookType[] = useSelector(({booksPage}: AppStateType) => booksPage.books) //Get all books from store
    const [currentPage, setCurrentPage] = useState<number>(1); //Current page
    const [cropList, setCropList] = useState<BookType[]>([]) // Crop list of books for display at one page


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
                                <BookItem key={`${book.id}_${index}`} book={book} deleteItem={deleteItem} />
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
