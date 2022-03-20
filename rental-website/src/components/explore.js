import React from 'react'
export default function Explore(props) {
  
  return (
    <>
    <div className="Explore" ref={props.explore}>
        <h1>Explore</h1>
        <p>
          From one-guest rooms to <br />
          penthouses with pools and gardens
        </p>

        <div className="Card">
          <div>
            <img src="\images\Card-explore.png" alt="" />
            <div className="card-nav">
              <div>
                <p>Room with one king-size bed</p>
                <button>35$</button>
                <button>28м²</button>
              </div>
              <button>Book!</button>
            </div>
          </div>
          <div>
            <img src="\images\Card-explore-2.png" alt="" />
            <div className="card-nav">
              <div>
                <p>Room with one king-size bed</p>
                <button>2039$</button>
                <button>438м²</button>
              </div>
              <button>Book!</button>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  )
}
