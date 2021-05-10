import React, { useEffect, useMemo, useState } from 'react';
import './pagination.css';


const Pagination = ({total=0, itemsperpage=10, currentpage=1, onPageChange }) => {

    const [totalPages, settotalPages] = useState(0);
    const pageNumberLimit = 5;
    const [maxPageLimit, setmaxPageLimit] = useState(5);
    const [minPageLimit, setminPageLimit] = useState(0);
    useEffect(()=>{
        if(total > 0 && itemsperpage > 0) {
            settotalPages(Math.abs(total / itemsperpage));
        }
    },[total, itemsperpage]);

    const paginationItem = useMemo(()=>{
        const pages = [];
        for (let i =1; i <= totalPages; i++) {
            if (i < maxPageLimit+1 && i>minPageLimit) {
            pages.push(
                <li key={i} className= {currentpage === i ? "waves-effect active" : "waves-effect"}>
                    <a href="#!" 
                        onClick={()=> onPageChange(i)}>{i}</a>
                </li>
            )
           // console.log(i)
            } else {
                pages.push([]);
            }
        }
        return pages;
    },[totalPages, currentpage, onPageChange, maxPageLimit, minPageLimit]);

    if(totalPages === 0) return null;

    const handlePrev = (page) => {
        onPageChange(currentpage-page);

        if((currentpage-page)%pageNumberLimit===0) {
            setmaxPageLimit(maxPageLimit-pageNumberLimit);
            setminPageLimit(minPageLimit-pageNumberLimit);

           
        }

        console.log(pageNumberLimit, currentpage, maxPageLimit, page, (currentpage-page)%pageNumberLimit)
    }

    const handleNext = (page) => {
        onPageChange(currentpage+page);

        if(currentpage+page > maxPageLimit) {
            setmaxPageLimit(maxPageLimit+pageNumberLimit);
            setminPageLimit(minPageLimit+pageNumberLimit);
        }
    }

    const handleFirst = ()=> {
        onPageChange(1);

        if((totalPages)%pageNumberLimit===0) {
            setmaxPageLimit(5);
            setminPageLimit(0);
        }
    }

    const handleLast = ()=> {
        onPageChange(totalPages);

        if(totalPages > maxPageLimit) {
            setmaxPageLimit(totalPages);
            setminPageLimit(totalPages-5);
        }
    }

    let pageIncreament = null;

    if(maxPageLimit > 5 && minPageLimit < 44) {
      pageIncreament = <li><a href="#!" onClick={() => handleNext(1) }> &hellip;</a> </li>
    }

    let pageDecreament = null;

    if(minPageLimit > 4 && minPageLimit < 46) {
      pageDecreament = <li> <a href="#!" onClick={() => handlePrev(1) }> &hellip;</a> </li>
    }

    //console.log(minPageLimit)

    return (
        <div>
            <ul className="pagination">
                <li className={currentpage === 1 ? "disabled" : "waves-effect"}>
                    <a href="#!" onClick={handleFirst}>first page</a>
                </li>
                <li className={currentpage === 1 ? "disabled" : "waves-effect"}>
                    <a href="#!" onClick={() => handlePrev(1) }><i className="material-icons">chevron_left</i></a>
                </li>
                {pageDecreament}
                
                {paginationItem}
                {pageIncreament}
                <li className={currentpage === totalPages ? "disabled" : "waves-effect"}>
                    <a href="#!" onClick={() => handleNext(1) }><i className="material-icons">chevron_right</i></a>
                </li>
                <li className={currentpage === totalPages ? "disabled" : "waves-effect"}>
                    <a href="#!" onClick={handleLast}>last page</a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination
