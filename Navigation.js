import React from 'react'
import './Navigation.css'

function Navigation() {
  // const myStyle ={
  //   backgroundImage: "image(back1.jpg)"
  // };
  return (
    <div className='mainpart'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">FOOTWEAR</a>
          <button className="navbar-toggler" type="button" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/collection">Collection </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Available for
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Men</a></li>
                  <li><a className="dropdown-item" href="#">Women</a></li>

                  <li><a className="dropdown-item" href="#">Kids</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/Signup'>Sign Up</a>
              </li>
            </ul>
            <form className="d-flex m-4" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Navigation
