import React from 'react'
import './searchbar.scss'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className='searchbox'>
    <div className="searchbox__main">
    <input 
    type="text"
    name="search"
    placeholder="Search"
    className="inputfield__searchbox"
    />
    <button className="searchbox__icon">
    <SearchIcon fontSize="large"/>
    </button>
    </div>  
    </div>
  )
}

export default SearchBar
