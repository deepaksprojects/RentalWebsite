import React from 'react'
export default function Footer(props) {

  return (
    <>
    <footer>
        <div className="footer-description">
          <p>Logo</p>
          <p>© 2021 Company Name <br/> All rights reserved</p>
        </div>
        <div className="footer-button">
        <button onClick={() =>  props.scrollExplore() }>Explore</button>
        <button onClick={() =>  props.scrollAbout() } >About Us</button>
        <button>Cities </button>
        <button>Call</button>
        </div>
      </footer>
    </>
  )
}
