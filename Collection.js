import React from 'react'
import './Collection.css'

function Collection() {
  return (
    <div className='mainpart'>
      <div className="container  ">
        <div className="row">
          <div className="col">
            <div className="card1">
              <img src="1.avif" className="card-img-top" alt="..." />
              <div className="card1">
                <h3 className="card-title">Sneakers</h3>
                <p className="cardSneaker">Sneakers, invented in the 1800s, were the first rubber-soled shoes. They were created as a solution for athletes who needed footwear that’s flexible and durable.</p>
                <a href="/Sneaker" className="btn btn-primary">View More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card2">
              <img src="2.webp" className="card-img-top" alt="..." />
              <div className="card2">
                <h3 className="card-title">Sports</h3>
                <p className="cardSneaker">Number one is just to gain a passion for running. To love the morning, to love the trail, to love the pace on the track. And if some kid gets really good at it, that’s cool too.</p>
                <a href="/Sport" className="btn btn-primary">View More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card3">
              <img src="3.webp" className="card-img-top" alt="..." />
              <div className="card3">
                <h3 className="card-title">Casual</h3>
                <p className="cardSneaker">It’s all about finding the right balance between being yourself and being intentional about what you wear, say, and think Casual is the new formal.Don’t be afraid to go casual</p>
                <a href="/Casusal" className="btn btn-primary">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
