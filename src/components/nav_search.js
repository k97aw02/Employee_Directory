import React from 'react';
import './Nav_search.css';


function Nav_search (props) {
    return (
        <nav class="navbar navbar-dark bg-primary form-inline">
            <a class="navbar-brand" href="#">Employee Directory</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            

                <ul class="nav">
                    <li class="nav-item">
                        
                    </li>
                        <li class="nav-item">
                            <a class="navbar-nav" href="#">Filter</a>
                        </li>
                        <li class="input-group mb-3">
                            <input onChange={props.handleInput} type="text" placeholder="   Search Name"/>
                        </li>
                 </ul>
                    
           
        </nav>
    
    )}


// Export Component as Header
export default Nav_search;