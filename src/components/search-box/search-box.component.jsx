import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type="search"
        placeholder={placeholder}
        // onChange is the SyntheticEvent will fire the event //value will give us the string value that it holds 
        onChange={handleChange}
    />
);