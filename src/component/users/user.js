import React, { useEffect, useMemo, useState } from 'react';
import PageComponent from '../common/pageComponent';
import Pagination from '../common/pagination';
import SearchFilter from '../common/searchFilter';
import Tableheader from '../common/table-header';
import './user.css';




const User = () => {
    const [comments, setComments] = useState([]);
    const [totalItems, settotalItems] = useState(0);
    const [currentPage, setcurrentPage] = useState(1);
    const [search, setsearch] = useState('');
    const [sorting, setSorting] = useState({ field: "", order: ""})
    const ITEMS_PER_PAGE = 10;

    const headers = [
        { name: "No#", field: "id", sortable: false},
        { name: "Name", field: "name", sortable: true},
        { name: "Email", field: "email", sortable: false},
        { name: "Body", field: "body", sortable: false}
    ]
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

        let computedData = comments;

        // search filter code
        if(search) {
            computedData = computedData.filter (
                comment => 
                    comment.name.toLowerCase().includes(search.toLowerCase()) || comment.email.toLowerCase().includes(search.toLowerCase())
            )
        }

        // Soring code

        if(sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedData = computedData.sort(
                (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        settotalItems(computedData.length);

        return computedData.slice((currentPage - 1) * ITEMS_PER_PAGE, (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE);


    }, [comments, currentPage, search, sorting]);

    //console.log(commentsData)

    return ( 
        <PageComponent title = "Users">
            <div className="container">
            <div className="table-head row">
            <div className="col s7 left-align">
            <Pagination 
                total={totalItems}
                itemsperpage= {ITEMS_PER_PAGE}
                currentpage = {currentPage}
                onPageChange = {page=>setcurrentPage(page)}
            />
            </div>
            <div className="col s2"></div>
            <div className="col s3 right-align">

            <SearchFilter onSearch={ (value)=> {
                setsearch(value);
                setcurrentPage(1);
            } }/>
            </div>
            </div>
                <table>

                    <Tableheader headers={headers} onSorting={(field, order)=> setSorting({field, order})} />

                    <tbody>
                    {commentsData.map(comment => (
                        <tr key={comment.id}><td style={{width: "4%"}} >{comment.id}</td>
                        <td style={{width: "23%"}}>{comment.name}</td>
                        <td style={{width: "23%"}}>{comment.email}</td>
                        <td style={{width: "50%"}}>{comment.body}</td></tr>
                    ))}
                    </tbody>
                </table>
               
            </div>
        </PageComponent>
    )

}

export default User