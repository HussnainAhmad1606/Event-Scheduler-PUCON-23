import React, {useState} from 'react'



function Filter() {

    const [searchQuery, setSearchQuery] = useState(""); 
    const [searchBy, setSearchBy] = useState(""); 
  

    const changeFilterHandle = (e) => {
        if (e.target.name == "search") {
          setSearchQuery(e.target.value);
        }
      }
      const filterSearch = () => {
        const data = 
        {option: "Description",
      searchValue: "desc"}
      }
    

    
    return (
        <>


        <select className="select select-primary w-xs max-w-xs">
            <option disabled selected> Filters</option>
            <option>Title</option>
            <option>Description</option>
            <option>Author</option>
        </select>
        <input type="text" name='search' value={searchQuery} onChange={changeFilterHandle} placeholder="Search Here" className="input input-bordered input-primary w-full max-w-xs ml-2" />

<div className="card-actions ml-2 justify-end">
  <button onClick={filterSearch} className="btn btn-primary">Search</button>
</div>
        </>
    )
}

export default Filter;