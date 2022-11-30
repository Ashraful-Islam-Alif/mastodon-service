import React, { useEffect, useRef, useState } from 'react';

const SearchBox = () => {
    const [data, setData] = useState([]);
    const [filterVal, setFilterval] = useState('');
    const [searchApiData, setSearchApiData] = useState([])
    useEffect(() => {
        const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    setData(json)
                    setSearchApiData(json)
                })
        }
        fetchData();
    }, [])
    const form = useRef();
    const handleFilter = (e) => {
        e.preventDefault();
        if (e.input.value == '') {
            setData(searchApiData)
        }
        else {
            const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.username.toLowerCase().includes(e.target.value.toLowerCase()))
            setData(filterResult)
        }
        setFilterval(e.input.value)

    }
    return (
        <div className=''>

            {/* <form class="flex items-center">
                <label for="voice-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="search" id="voice-search" value={filterVal} onInput=()=> handleFilter(e) class="bg-gray-100 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5    " placeholder="Search by Part No, Name, Brand" required="" />
                    <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
                        <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-500 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
                    </button>
                    <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-[#1cbf1f90]  hover:bg-[#94ca21cf] rounded-lg border ">
                        <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
                    </button>
                </div>

            </form>  */}
            <form ref={form} className='grid grid-col-2 gap-2' value={filterVal} onSubmit={(e) => handleFilter(e)}>
                <input placeholder='Search' className='form-control input input-bordered' type="text" name="search" />
                <input className='border cursor-pointer bg-[#1cbf1f90]  hover:bg-[#94ca21cf] font-bold rounded-xl text-xl px-5 py-2.5 text-center text-white' type="submit" value="Confirm Order" />
            </form>
            <table>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                {
                    data.length > 0 && (
                        data.map(item => {
                            return (
                                <tr>
                                    <td>{item.name} </td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })
                    )
                }
            </table>
        </div>
    );
};

export default SearchBox;