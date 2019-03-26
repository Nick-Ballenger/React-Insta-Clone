import React from 'react'
import './App.css'
const SearchBar = props => {
    
    return (
       
        <div className ="search-wrapper">
        <div className="header-left">
        <i className="fab fa-instagram"></i>
            <h1>Instagram</h1>
        </div>
           
            
            <form className="search-bar">
                <input className="seach-input" placeholder="Search">
                </input>
            </form>
            <div className="nav-icons">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>
          
            
        </div>
    )
  
  
    
  }
  export default SearchBar