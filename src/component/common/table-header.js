import React, { useState } from 'react';
import './table-header.css';

export default function Tableheader({ headers, onSorting }) {


    const [sortingField, setSortingField] = useState("");
    const [sortingOrder, setSortingOrder] = useState("asc")

    const onSortingChange = field => {
        const order = field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);

        console.log(field, sortingOrder);
    }
    return (
        <thead>
            <tr>
                {
                    headers.map(({name, field, sortable})=> 
                        <th 
                            key={name} 
                            title={name}
                            onClick={()=> sortable ? onSortingChange(field): null}>
                                {name}
                                {sortingField && sortingField === field && (<span className={sortingOrder === "asc" ? "desc-aero" : "asc-aero"}>gsdgsd</span>)}
                            </th>
                    )
                }
            </tr>
        </thead>
    )
}
