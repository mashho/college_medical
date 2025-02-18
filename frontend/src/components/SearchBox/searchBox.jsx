import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = (props) => {
    return (
        <div className='stock-page-searchBox'>
            <input type='text' value={props.value} onChange={(event)=>{props.onChangeHandle(event.target.value)}} className='input-box' placeholder={props.placeholder} />
            <div className='search-btn'><SearchIcon /></div>
        </div>
    )
}

export default SearchBox