import React from "react";
import {NavLink} from "react-router-dom";
import FloatingButton from "../../common/FloatingButton/FloatingButton";

const AddBook = () => {
    return (
        <div>
            AddBook
            <FloatingButton pathLink={'/'} icon={'arrow_back'} color={'blue darken-3'} />
        </div>
    )
}

export default AddBook
