import React from 'react'

export const Search = ({searchTerm,setSearchTerm}) => {
    return (
        <div className="search">
           <div>
            <img src="./search.svg" alt='search'/>
            <input
            type='text'
            placeholder='Search through thousands fo movies'
            value={searchTerm}
            onChange={(event)=>setSearchTerm(event.target.value)}
            />
           </div>
        </div>
    )
}
