import React from 'react';
import './searchBox-styles.css';


export const SearchBox = ({placeholder, handleChange})=> {
  return(
    <div className="search-wrap">
      <input 
          className='search'
          type='search'
          placeholder={placeholder}
          onChange={handleChange} />
    </div>

  )

}