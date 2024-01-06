import React from 'react'
import filterEmoji from '../filterEmoji'

const SearchBar = (props) => {

    const handleInput = (e) => {
        props.setFilteredEmoji(filterEmoji(e.target.value))
    }

    return (
        <div className='searchBar'>
            <input type="text" placeholder='Search your emoji' onInput={handleInput}/>
        </div>
    )
}

export default SearchBar
