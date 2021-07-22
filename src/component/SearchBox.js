import React, { useState } from 'react';


const SearchBox = ({searchText}) => {

   const [searchValue,setSearchValue] =useState('');

   const handleChange = (e) =>{
       e.preventDefault();

       searchText(searchValue);
       setSearchValue('');
   }

    return(
        <div className="max-w-sm rounded my-10 mx-auto overflow-hidden">
            <form onSubmit={handleChange} className="w-full max-w-sm">
                <div className='flex items-center border-b border-teal-500 py-2'>
                    <input type="text" value={searchValue} onChange={e =>setSearchValue(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="search item term..."/>
                    <button className="flex-shrink-0 bg-green-500 hover:bg-green-700  text-sm border-1 text-white py-2 px-3 rounded" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}
export default SearchBox;