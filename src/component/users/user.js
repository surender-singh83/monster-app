import React, { useEffect, useMemo, useState } from 'react';
import PageComponent from '../common/pageComponent';
import Pagination from '../common/pagination';




const User = () => {
    const [comments, setComments] = useState([]);
    const [totalItems, settotalItems] = useState(0);
    const [currentPage, setcurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 10;
    useEffect(() => {
        const getData = () => {
            fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => {
                setComments(json);
                
            })
        }
        getData();
    }, []);
    
    const commentsData = useMemo(()=> {

        const computedData = comments;

        settotalItems(computedData.length);

        return computedData.slice((currentPage - 1) * ITEMS_PER_PAGE, (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);


    }, [comments, currentPage]);

    //console.log(commentsData)

    return ( 
        <PageComponent title = "Users">
            <div className="container">
            <Pagination 
                total={totalItems}
                itemsperpage= {ITEMS_PER_PAGE}
                currentpage = {currentPage}
                onPageChange = {page=>setcurrentPage(page)}
            />
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Comment</th>
                    </tr>
                    </thead>

                    <tbody>
                    {commentsData.map(comment => (
                        <tr><td>{comment.id}</td>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td></tr>
                    ))}
                    </tbody>
                </table>
               
            </div>
        </PageComponent>
    )

}

export default User