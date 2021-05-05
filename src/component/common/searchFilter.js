import React, {useState} from 'react';
import './search-filter.css';

const SearchFilter = ({onSearch}) => {
    const [search, setSearch] = useState('');

    const onInputChnage = (value) => {
        setSearch(value);
        onSearch(value);
    }
    return (
        <div className="input-field">
            <input type="text" id="search_data" name="searchfilter" value={search} onChange={
                (e) => onInputChnage(e.target.value)
            } />
            <label htmlFor="search_data">Search here</label>
        </div>
    )
}

export default SearchFilter
