import React from 'react';
import {Link} from 'react-router-dom'


let Footer = () => {
  return (
    <div className="transition-container" > 
        <footer className="footer">
            <div className="footer-block">
              <h6 className="footer-block__header">Contacts</h6>
              <ul className="footer-block__body">
                <li className="footer-block__element">
                  <img
                    src="/static/images/address.png"
                  />
                  <address>
                    Street Name + Number, Town, Postcode/Zip
                  </address>
                </li>
                <li className="footer-block__element">
                  <img 
                    src="/static/images/phone.png"
                  />
                  <address>
                    +00 (123) 456 7890
                  </address>
                </li>
                <li className="footer-block__element">
                  <img 
                    src="/static/images/mail.png"
                  />
                  <address>
                    info@domain.com
                  </address>
                </li>
              </ul>
            </div>
            <div className="footer-block footer-block_central">
                <img 
                  src="/static/images/fgo.png"
                />
              
              <h6  className="footer-block__header">Fate / Grang Order</h6>
            </div>
            <div className="footer-block">
              <h6 className="footer-block__header">Contacts</h6>
              <ul className="footer-block__body">
                <li className="footer-block__element">
                  <img
                    src="/static/images/icon-facebook.svg"
                    alt="Facebook link" 
                  />
                  <address>
                    Facebook link
                  </address>
                </li>
                <li className="footer-block__element">
                  <img 
                    src="/static/images/icon-instagram.svg"
                    alt="Instagram link" 
                  />
                  <address>
                     Instagram link
                  </address>
                </li>
                <li className="footer-block__element">
                  <img 
                    src="/static/images/icon-linkedIn.svg"
                    alt="LinkedIn link" 
                  />
                  <address>
                    LinkedIn link
                  </address>
                </li>
              </ul>
            </div>
        </footer>
      </div>
        
  );
}


export default Footer;
