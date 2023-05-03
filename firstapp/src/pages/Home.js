import React from 'react'
import {Link} from "react-router-dom";
import HomeBase from '../tempale/HomeBase';


function Home() {
  return (
    <div><h2>Home</h2>
    <HomeBase/>
      <ul>
        <li><Link to="/fav">Fav</Link> </li>
        <li><Link to="/work">work</Link> </li>
        <li><Link to="/dash">Dash</Link> </li>
      </ul>
    
    </div>

    
  )
}

export default Home