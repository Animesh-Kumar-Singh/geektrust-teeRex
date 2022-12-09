import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "./search.css"
import { useState } from 'react';
const Search =({handleToggle, handleSearch}) => {

    const [text,setText]=useState('')
    console.log("text",text)

    return (
        <div className='header-filter'>
            <diV>
                <TextField type="search" onChange={(e)=>setText(e.target.value)} variant="standard" placeholder='Search for products' />
                <button><SearchIcon /></button>
            </diV>
            
            <button onClick={handleToggle} ><FilterAltIcon /></button>
        </div>
    )
}

export default Search