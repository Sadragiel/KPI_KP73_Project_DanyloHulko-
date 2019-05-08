import React from 'react';
import {Link} from 'react-router-dom'


let bgImage ={
    backgroundImage: `url(/static/images/HeaderImage.jpg)`
}

let Header = () => {
  return (
    <div className="wrapper-background_filing wrapper-blackout" style={bgImage}> 
    <header className="header clear"> 
      
      <div className="logo">
        <h1><Link to="#">fate / grand order</Link></h1>
      </div>
      
      <nav  className="header__navigation">
        <ul className="navigation__item-list">
          <li className="navigation__item"><Link className="navigation__link" to="#">Home</Link></li>
          <li className="navigation__item navigation__item_with-dropdown"><Link  className="navigation__link"  to="">Pages</Link>
            <ul className="navagation__sub-item-list">
              <li className="navagation__sub-item"><Link className="navigation__link" to="/Gallery">Gallery</Link></li>
              <li className="navagation__sub-item"><Link className="navigation__link" to="#">Full Width</Link></li>
              <li className="navagation__sub-item"><Link className="navigation__link" to="#">Sidebar Left</Link></li>
              <li className="navagation__sub-item"><Link className="navigation__link" to="#">Sidebar Right</Link></li>
              <li className="navagation__sub-item"><Link className="navigation__link" to="#">Basic Grid</Link></li>
            </ul>
          </li>
          <li className="navigation__item navigation__item_with-dropdown"><Link className="navigation__link" to="#">Dropdown</Link>
            <ul className="navagation__sub-item-list">
              <li className="navagation__sub-item"><Link className="navigation__link" to="">Level 2</Link></li>
              <li className="navagation__sub-item"><Link className="navigation__link" to="#">Level 2 + Drop</Link>
                <ul className="navagation__sub-item-list sub-list">
                  <li  className="navagation__sub-item sub">
                    <Link className="navigation__link" to="#">Level 2 + Drop</Link>
                  </li>
                  <li  className="navagation__sub-item sub">
                    <Link className="navigation__link" to="#">Level 2 + Drop</Link>
                  </li>
                  <li  className="navagation__sub-item sub">
                    <Link className="navigation__link" to="#">Level 2 + Drop</Link>
                  </li>
                </ul>
              </li>
              <li className="navagation__sub-item"><Link className="navigation__link" to="#">Level 2</Link></li>
            </ul>
          </li>
          <li className="navigation__item"><Link className="navigation__link" to="#">Link Text</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to="#">Link Text</Link></li>
        </ul>
      </nav>
      
    </header>
</div>
  );
}

export default Header;
