import React from 'react'
import './footer.css'
import playstore from '..//..//..//images//playstore.png'
import appstore from '..//..//..//images//Appstore.png'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playstore} alt="playstore" />
        <img src={appstore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Ecom.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Ayan</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com">Instagram</a>
        <a href="http://youtube.com">Youtube</a>
        <a href="http://instagram.com">Facebook</a>
      </div>
    </footer>
  )
}

export default Footer