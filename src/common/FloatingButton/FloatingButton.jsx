import React from "react";
import {NavLink} from "react-router-dom";

const FloatingButton = ({pathLink, icon, color}) => {
    return (
        <div className="fixed-action-btn">
            <NavLink to={pathLink} className={"btn-floating btn-large " + color}>
                <i className="large material-icons">{icon}</i>
            </NavLink>
        </div>
    )
}
export default FloatingButton
