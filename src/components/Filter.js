import React from 'react'



function Filter() {
    return (


        <select className="select select-primary w-xs max-w-xs">
            <option disabled selected> Filters</option>
            <option>Title</option>
            <option>Description</option>
            <option>Author</option>
        </select>
    )
}

export default Filter;