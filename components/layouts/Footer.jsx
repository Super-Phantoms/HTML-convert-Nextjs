import React from 'react'

export default function Footer() {
  return (
    <>
        <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer_logo">
                <img src="/images/footer-logo.png" alt="" />
              </div>
              <div className="footer_text">
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout,
                </p>
              </div>
              {/* social icon */}
              <div className="social_icon">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_title">
                <h3 className="text-white">Quick Links</h3>
              </div>
              <div className="footer_menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="footer_title">
                <h3 className="text-white">Address</h3>
              </div>
              {/* address */}
              <div className="address">
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    <p className="address_text">1234 Some St, New York, NY 12345</p>
                  </li>
                  <li>
                    <i className="fas fa-phone-alt" />
                    <p className="address_text">+1 234 567 890</p>
                  </li>
                  <li>
                    <i className="fas fa-envelope" />
                    <p className="address_text">
                      <a href="mailto:islamyearul@gmail.com" className>islamyearul@gmail.com </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* copyright */}
          <div className="row">
            {/* devider */}
            <div className="row devider">
              <div className="col-md-12 text-center">
                <div className="devider text-center">
                  <div className="devider_line" />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="copy_right">
                <p className="text-center">
                  © 2021 All Rights Reserved. Designed by <a href="https://www.facebook.com/islamyearul">Islam Yearul</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
