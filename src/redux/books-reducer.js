const SET_BOOKS = 'SET_BOOKS'
const DELETE_BOOK = 'DELETE_BOOK'

let initialState = {
    books: []
}


const booksReducer = (state = initialState, action) => {
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



export const setBooks = (books) => {
    return {
        type: SET_BOOKS,
        books: books
    }
}
export const deleteBook = (bookId) => {
    return {
        type: DELETE_BOOK,
        bookId: bookId
    }
}


export default booksReducer
