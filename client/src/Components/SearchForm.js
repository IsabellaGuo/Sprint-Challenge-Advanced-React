import React, { useState } from 'react';

const SearchForm = props =>{
    const [search,setSearch] = useState("");

    const handleChanges = e =>{
        setSearch(e.target.value);
    };

    const searchPlayer = e =>{props.data.filter(player => player.name.toLowerCase().includes(search));};

    return(
        <section>
            <form className="searchForm">
            <input
            type="text"
            playceholder="Search for Player"
            value={search}
            onChange={handleChanges}
            />
            <button onClick={searchPlayer}>Search</button>
            </form>
        </section>
    );
};

export default SearchForm;