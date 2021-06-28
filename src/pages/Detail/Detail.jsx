import React, {useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";

const Detail = () => {
    const history = useHistory();
    const [bookId, setBookId] = useState(null)


    const getBookId = (location) => {
        setBookId(location.split('/')[2])
    }

    useEffect(() => {
        getBookId(history.location.pathname)
    }, [])




    return (
        <div>
            {bookId}
            <div className="fixed-action-btn">
                <NavLink to={'/'} className="btn-floating btn-large blue darken-3">
                    <i className="large material-icons">arrow_back</i>
                </NavLink>
            </div>
        </div>
    )
}

export default Detail
