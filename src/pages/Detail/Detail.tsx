import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import classes from './Detail.module.css'
import { useSelector } from 'react-redux'
import Preloader from '../../common/Preloader/Preloader'
import FloatingButton from '../../common/FloatingButton/FloatingButton'
import { AppStateType } from '../../redux/store'
import { BookType } from '../../types/types'

const Detail = () => {
    const history = useHistory()
    const [book, setBook] = useState<BookType | null>(null)
    const books: BookType[] = useSelector(({ booksPage }: AppStateType) => booksPage.books)

    //Get bookId and get detail of book by id
    useEffect(() => {
        const bookId = Number(history.location.pathname.split('/')[2])
        getDetail(books, bookId)
    }, [])

    //Get detail of book by ID
    const getDetail = (booksList: BookType[], bookId: number) => {
        const result = booksList.filter((item) => item.id === bookId)
        setBook(result[0])
    }

    return (
        <>
            {book ? (
                <div className="row">
                    <div className="col s1 m3">
                        <img className={classes.photo} src={book.photoUrl} alt="" />
                    </div>
                    <div className="col s1 m9">
                        <h4 className={classes.title}>{book.title}</h4>
                        <div className={classes.author}>
                            {book.author} - {book.year} г.
                        </div>
                        <div>
                            <div
                                className="content"
                                dangerouslySetInnerHTML={{ __html: book.description }}
                            ></div>
                        </div>
                    </div>
                </div>
            ) : (
                <Preloader />
            )}
            <FloatingButton pathLink={'/'} icon={'arrow_back'} color={'blue darken-3'} />
        </>
    )
}

export default Detail
