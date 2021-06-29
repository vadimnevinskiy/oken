import {BookType} from '../types/types'

const SET_BOOKS = 'SET_BOOKS'
const DELETE_BOOK = 'DELETE_BOOK'
const ADD_BOOK = 'ADD_BOOK'


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
type AddBookType = {
    type: typeof ADD_BOOK
    book: BookType
}
type ActionsType = BooksActionType | DeleteBookType | AddBookType



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
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.book]
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
export const addBook = (book: BookType): AddBookType => {
    return {
        type: ADD_BOOK,
        book: book
    }
}

export default booksReducer
