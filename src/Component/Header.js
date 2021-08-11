import React from 'react'
import './Header.css'

const s = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md bg-light navbar-light  p-3  ">
  <a class="navbar-brand" href="home">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse navline " id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="aboutus">About Us </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/gallery">Gallery</a>
      </li>
         
    </ul>
  </div>  
</nav>
        </div>
    )
}

export default s
