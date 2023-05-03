import React from 'react'
import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
<header id="header" className="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><a href="index.html">Presento<span>.</span></a></h1>
    
      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active">  <Link to="/">Home</Link> </a></li>
          <li><a class="nav-link scrollto" >        <Link to="/login">Login</Link>    </a></li>
          <li><a class="nav-link scrollto" >        <Link to="/signup">SignUp</Link>    </a></li>
          <li><a class="nav-link scrollto" >        <Link to="/dash">Dash</Link> </a></li>
          <li><a class="nav-link scrollto ">        <Link to="/work">work</Link></a></li>
          <li><a class="nav-link scrollto" >        <Link to="/showdata">ShowData</Link>   </a></li>
          <li><a href="blog.html">Blog</a></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    {/*   <!-- .navbar --> */}

      <a href="#about" class="get-started-btn scrollto">Get Started</a>
    </div>
  </header>


    </div>
  )
}

export default Header