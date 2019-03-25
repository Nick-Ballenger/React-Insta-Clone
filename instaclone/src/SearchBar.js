import React from 'react'
import './App.css'
const SearchBar = props => {
    
    return (
       
        <div className ="search-wrapper">
            <i className="fab fa-instagram"></i>
            <h1>Instagram</h1>
            <p>Search</p>
            <form className="search-bar">
                <input className="seach-input">
                </input>
            </form>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            
        </div>
    )
  
  
    
  }
  export default SearchBar