import React from "react";
import {NavLink} from "react-router-dom";

const AddBook = () => {
    return (
        <div>
            AddBook
            <div className="fixed-action-btn">
                <NavLink to={'/'} className="btn-floating btn-large blue darken-3">
                    <i className="large material-icons">arrow_back</i>
                </NavLink>
            </div>
        </div>
    )
}

export default AddBook
