import {BookType} from '../types/types'

const SET_BOOKS = 'SET_BOOKS'
const DELETE_BOOK = 'DELETE_BOOK'


type InitialStateType = {
    books: BookType[]
}
type BooksActionType = {
    type: typeof SET_BOOKS
    books: BookType[]
}
type DeleteBookType = {
    type: typeof DELETE_BOOK
    bookId: number
}
type ActionsType = BooksActionType | DeleteBookType



let initialState: InitialStateType = {
    books: []
}


const booksReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_BOOKS:
            return {
                ...state,
                books: [...action.books]
            }
        case DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(item => item.id !== action.bookId)
            }
        default:
            return state
    }
}




export const setBooks = (books: BookType[]): BooksActionType => {
    return {
        type: SET_BOOKS,
        books: books
    }
}
export const deleteBook = (bookId: number): DeleteBookType => {
    return {
        type: DELETE_BOOK,
        bookId: bookId
    }
}


export default booksReducer
