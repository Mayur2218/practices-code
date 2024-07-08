import React from 'react'
import './Home.css'

function Home() {

  return (
    <div className="container-fluid1">
      <div className="cardbox">
        <div className="row g-0">
          <div className="col">
            <div className="card-body">
              <div>
                <span>Finding Your</span>
              </div>
              <div>
                <span>Perfect </span>
                <span className='stroke-text'>Shoes</span>
              </div>
            </div>
            <div className="card-text">
              <p>Shoes transform your body language and attitude. They lift you physically and emotionally.</p>
              <p>- Christian Louboutin</p>
            </div>
          </div>
          <div className="col">
            <img src="main image.png" className=" mainimage img-fluid " alt="..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
