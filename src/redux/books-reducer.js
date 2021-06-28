const SET_BOOKS = 'SET_BOOKS'

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


export default booksReducer
