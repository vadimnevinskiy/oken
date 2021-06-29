import React from 'react'


type PropsType = {

}
const Preloader: React.FC<PropsType> = () => {
    return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    )
}

export default Preloader
