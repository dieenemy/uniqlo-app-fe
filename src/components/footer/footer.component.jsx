import React from 'react';
import './footer.styles.scss';

const Footer = () => (
  <footer className='footer-container'>
    <div className='container main-footer'>
      <aside className='footer-sidebar'>
        <div className='footer-column'>
          <div className='footer-widget'>
            <div className='textwidget'>
              <p className='logo-footer'>
                <img
                  src={process.env.PUBLIC_URL + '/images/logo/logo-white.png'}
                  alt='footer logo'
                />
              </p>
            </div>
          </div>
        </div>
        <div className='footer-content'>
          <div className='footer-column ourstore'>
            <div className='footer-widget'>
              <h5 className='widget-title'>Our stores</h5>
              <div className='textwidget'>
                <ul className='menu'>
                  <li>
                    <span>New York</span>
                  </li>
                  <li>
                    <span>London SF</span>
                  </li>
                  <li>
                    <span>Cockfosters BP</span>
                  </li>
                  <li>
                    <span>Los Angeles</span>
                  </li>
                  <li>
                    <span>Chicago</span>
                  </li>
                  <li>
                    <span>Las Vegas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer-column info'>
            <div className='footer-widget'>
              <h5 className='widget-title'>Information</h5>
              <div className='textwidget'>
                <ul className='menu'>
                  <li>
                    <span>About Store</span>
                  </li>
                  <li>
                    <span>New Collection</span>
                  </li>
                  <li>
                    <span>Watch</span>
                  </li>
                  <li>
                    <span>Contact Us</span>
                  </li>
                  <li>
                    <span>Latest News</span>
                  </li>
                  <li>
                    <span>Our Sitemap</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer-column useful'>
            <div className='footer-widget'>
              <h5 className='widget-title'>Usefull links</h5>
              <div className='textwidget'>
                <ul className='menu'>
                  <li>
                    <span>Privacy Policy</span>
                  </li>
                  <li>
                    <span>Returns</span>
                  </li>
                  <li>
                    <span>Terms & Conditions</span>
                  </li>
                  <li>
                    <span>Contact Us</span>
                  </li>
                  <li>
                    <span>Latest News</span>
                  </li>
                  <li>
                    <span>Our Sitemap</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer-column ftmenu'>
            <div className='footer-widget'>
              <h5 className='widget-title'>Footer menu</h5>
              <div className='textwidget'>
                <ul className='menu'>
                  <li>
                    <span>Instagram profile</span>
                  </li>
                  <li>
                    <span>New Collection</span>
                  </li>
                  <li>
                    <span>Watch</span>
                  </li>
                  <li>
                    <span>Contact Us</span>
                  </li>
                  <li>
                    <span>Latest News</span>
                  </li>
                  <li>
                    <span>Our Sitemap</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer-column about'>
            <div className='footer-widget'>
              <h5 className='widget-title'>About the store</h5>
              <div className='textwidget'>
                <p>
                  STORE - worldwide fashion store since 1978. We sell over 1000+
                  branded products on our web-site.
                </p>
                <div className='contact-info'>
                  <span className='ti-location-pin'></span> 451 Wall Street,
                  USA, New York
                  <br />
                  <span className='ti-mobile'></span> Phone: (064) 332-1233
                  <br />
                </div>
                <br />
                <p>
                  <img src='https://i.ibb.co/1ZGhyvr/payments.png' alt='' />
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
    <div className='copyrights-wrapp'>
      <div className='container'>
        <div className='min-footer'>
          <div className='copyright-content'>
            <span>©</span> 2020 Created by
            <span className='team'>Tran Tung</span>. Premium e-commerce
            solutions.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
