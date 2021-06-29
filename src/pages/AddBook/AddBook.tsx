import React from 'react'
import FloatingButton from '../../common/FloatingButton/FloatingButton'


type PropsType = {

}
const AddBook: React.FC<PropsType> = () => {
    return (
        <div>
            AddBook
            <FloatingButton pathLink={'/'} icon={'arrow_back'} color={'blue darken-3'} />
        </div>
    )
}

export default AddBook
