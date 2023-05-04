import React from 'react'
import Banner from '../../components/banner/Banner'

export default function index() {
  return (
    <>

        <Banner 
        title="Business/Holiday Insurance"
        description=" lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."
        />
    {/* Service Section */}
    <section className="service_section">
          <div className="container">
            <h3 className="text-center">Business/Holiday Insurance</h3>
            {/* <h4 class="text-center text-gray">Please Select The Purpose Of Your Travel Ang Go <a href="#"
                    class="text-gray">(Read Policy)</a> </h4> */}
            {/* devider */}
            <div className="row devider">
              <div className="col-md-3" />
              <div className="col-md-6 text-center">
                <div className="devider text-center">
                  <div className="devider_line" />
                  <div className="devider_line2" />
                </div>
              </div>
              <div className="col-md-3" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row g-3 needs-validation" noValidate>
                  <div className="col-md-12">
                    <label htmlFor="country" className="form-label">Select Country (You can select multiple countries)
                      <span className="text-danger">*</span></label>
                    <select className="form-select js-example-basic-multiple" name="states[]" multiple="multiple" aria-label="Default select example" id="country" required>
                      <option value>Select Country</option>
                      <option value={1}>Bangladesh</option>
                      <option value={2}>India</option>
                      <option value={3}>Pakistan</option>
                    </select>
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                    <div className="invalid-feedback">
                      Please choose a Country.
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="dob" className="form-label">Date of Birth <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="dob" placeholder="Day-Month-Year" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                    <div className="invalid-feedback">
                      Please choose a Valid Date.
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="departure_date" className="form-label">Departure Date <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="departure_date" placeholder="Day-Month-Year" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                    <div className="invalid-feedback">
                      Please choose a Valid Date.
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="return_date" className="form-label">Return Date <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="return_date" placeholder="Day-Month-Year" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                    <div className="invalid-feedback">
                      Please choose a Valid Date.
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="total_days" className="form-label">Total Days <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="total_days" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">Get Premium Calculation</button>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <img src="/images/Rectangle76.png" alt="" width="100%" />
              </div>
            </div>
          </div>
        </section>
        {/* End Service Section */}
        {/* Overview Section */}
        <section className="overview_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="overview_content">
                  <h3>Overview</h3>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a
                    page when
                    looking at its layout.
                  </p>
                  <p>
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as
                    opposed to using 'Content here, content here', making it look like readable English.
                  </p>
                  <p>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                    model
                    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                  </p>
                  <p>
                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </div>
                <div className="overview_content">
                  <h3>Terms &amp; Policy</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don't look
                    even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                    sure there isn't anything embarrassing hidden in the middle of text.
                  </p>
                  <p>
                  </p><ul>
                    <li>
                      <p>
                        But the majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable. If you are going to use
                        a passage embarrassing hidden in the middle of text.
                      </p>
                    </li>
                    <li>
                      <p>
                        But the majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable. If you are going to use
                        a passage embarrassing hidden in the middle of text.
                      </p>
                    </li>
                    <li>
                      <p>
                        But the majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable. If you are going to use
                        a passage embarrassing hidden in the middle of text.
                      </p>
                    </li>
                    <li>
                      <p>
                        But the majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable. If you are going to use
                        a passage embarrassing hidden in the middle of text.
                      </p>
                    </li>
                  </ul>
                  <p>
                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </div>
                <div className="overview_content">
                  <h3>Learn More</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don't look
                    even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                    sure there isn't anything embarrassing hidden in the middle of text.
                  </p>
                  <p>
                    <span className="color-primary">Contact With Our Support:</span> +9945-478-2145 or
                    +9954-855-5492
                  </p>
                  <p>
                  </p></div>
              </div>
            </div>
          </div>
        </section>
        {/* End Overview Section */}
    </>
  )
}
