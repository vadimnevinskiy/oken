import React from 'react'
import FloatingButton from '../../common/FloatingButton/FloatingButton'
import {Form, Field} from 'react-final-form'
import classes from './AddBook.module.css'
import {BookType} from "../../types/types";
import {useDispatch} from "react-redux";
import {addBook} from "../../redux/books-reducer";
import {useHistory} from "react-router-dom";


type PropsType = {}

const AddBook: React.FC<PropsType> = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    const generateId = () => {
        return Math.floor(Math.random() * 10) * 10
    }

    const onSubmit = (values: BookType) => {
        const newBook: BookType = {
            id: generateId(),
            title: values.title,
            author: values.author,
            description: values.description,
            photoUrl: values.photoUrl,
            year: values.year

        }
        dispatch(addBook(newBook))
        history.push('/')
    }

    return (
            <div className={classes.addBook}>
                <h1>Add Book</h1>
                <div className="card">
                    <div className="card-content">
                        <Form
                            onSubmit={onSubmit}
                            render={({handleSubmit}: any) => (
                                <form onSubmit={handleSubmit}>
                                    <div className={classes.form}>
                                        <div className="input-field">
                                            <Field id="title" type="text" name="title" component="input" />
                                            <label htmlFor="title">Title</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">account_circle</i>
                                            <Field id="author" type="text" name="author" component="input" className="validate" />
                                            <label htmlFor="author">Author</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">mode_edit</i>
                                            <Field id="description" name="description" component="textarea" className="materialize-textarea"/>
                                            <label htmlFor="description">Description</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">date_range</i>
                                            <Field id="year" type="text" name="year" component="input"/>
                                            <label htmlFor="year">Year</label>
                                        </div>
                                        <div className="input-field">
                                            <i className="material-icons prefix">image</i>
                                            <Field id="photoUrl" type="text" name="photoUrl" component="input"/>
                                            <label htmlFor="photoUrl">Photo url</label>
                                        </div>
                                        <div className={classes.buttonBox}>
                                            <button className={classes.button + " btn waves-effect waves-light"}>
                                                Add book
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        />
                    </div>
                </div>


            <FloatingButton pathLink={'/'} icon={'arrow_back'} color={'blue darken-3'}/>
        </div>
    )
}

export default AddBook
