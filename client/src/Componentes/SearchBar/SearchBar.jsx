import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {onSearch} from '../../Redux/actions'
import './SearchBar.css';

const SearchBar = () => {
    
    const dispatch = useDispatch()

    const [name, setName] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = () =>{
         dispatch(onSearch(name))
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter"){
        handleClick()}
    }
    return(
        <div className='sear-container'>
            <input onKeyPress={handleKeyPress} className='sear-input' type="search" placeholder='ENTER A COUNTRY' onChange={handleChange} value={name}/>

            {/* <button onClick={() =>{handleClick();setName(name)}}>Search / Get All</button> */}
        </div>
    )  
       
}

export default SearchBar;