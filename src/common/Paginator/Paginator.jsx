import React, {useEffect, useState} from 'react'
import classes from './Paginator.module.css'

const Paginator = ({items, currentPage, portionSize, selectPage}) => {
    const [pages, setPages] = useState([]); //Array of page numbers


    // Set Array of numbers to display pages
    useEffect(() => {
        const pagesCount = Math.ceil(items.length / portionSize);
        const pagesArr = [];// Array for pages
        for (let i = 1; i <= pagesCount; i++) {
            pagesArr.push(i)
        }
        setPages(pagesArr)
    }, [items]);



    return (
        <div className={classes.paginator}>
            {
                pages.map(page => {
                    return (

                        page === currentPage
                            ? <span className={classes.active} key={page}>{page}</span>
                            : <span onClick={() => selectPage(page)} key={page}>{page}</span>

                    )
                })
            }
        </div>
    )
}

export default Paginator
