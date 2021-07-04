import React, { useEffect, useState } from 'react';
import classes from './Paginator.module.css';

type PropsType = {
  itemsLength: number;
  currentPage: number;
  portionSize: number;
  selectPage: (page: number) => void;
};

const Paginator: React.FC<PropsType> = ({ itemsLength, currentPage, portionSize, selectPage }) => {
  const [pages, setPages] = useState<number[]>([]); //Array of page numbers

  // Set Array of numbers to display pages
  useEffect(() => {
    const pagesCount: number = Math.ceil(itemsLength / portionSize);
    const pagesArr: number[] = []; // Array for pages
    for (let i = 1; i <= pagesCount; i++) {
      pagesArr.push(i);
    }
    setPages(pagesArr);
  }, [itemsLength]);

  return (
    <div className={classes.paginator}>
      {itemsLength > portionSize &&
        pages.map((page) => {
          return page === currentPage ? (
            <span className={classes.active} key={page}>
              {page}
            </span>
          ) : (
            <span onClick={() => selectPage(page)} key={page}>
              {page}
            </span>
          );
        })}
    </div>
  );
};

export default Paginator;
