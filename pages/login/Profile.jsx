import React from 'react'
import Styles from '../../styles/profile.module.css'

export default function Profile() {
  return (
    <>
            <section className="profile_section">
        <div className="container">
          {/* tab */}
          <div className="d-flex justify-items-between">
            <ul className="nav nav-pills">
              <li className="active">
                <a href="#1a" className="btn btn-light btn-sm active" data-toggle="tab">Profile</a>
              </li>
              <li>
                <a href="#2a" className="btn btn-light tab-btn btn-sm" data-toggle="tab">Dashboard</a>
              </li>
              <li>
                <a href="#3a" className="btn btn-light tab-btn btn-sm" data-toggle="tab">Settings</a>
              </li>
            </ul>
          </div> <hr />
          <div className="tab-content  clearfix my-4">
            <div className="tab-pane active" id="1a">
              <div className="row">
                <div className="profile-image-row">
                  <img src="/images/profile.png" alt="" className="profile-image" />
                </div>
                <div className="profile-info">
                  <h3>Yearul Islam</h3>
                </div>
                <form className=" row g-3 needs-validation" noValidate>
                  <div className="col-md-6">
                    <label htmlFor="departure_date" className="form-label">Your Full Name</label>
                    <input type="text" className="form-control" id defaultValue="Your Full Name" disabled />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                    <div className="invalid-feedback">
                      Please Enter Your Full Name
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="total_days" className="form-label">Mobile Number</label>
                    <input type="tel" className="form-control" id defaultValue="Mobile Number" disabled />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="total_days" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id defaultValue="Email Address" disabled />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="total_days" className="form-label">Mailing Address</label>
                    <input type="text" className="form-control" id defaultValue="Mailing Address" disabled />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="total_days" className="form-label">Permanent Address</label>
                    <input type="text" className="form-control" id defaultValue="Permanent Address" disabled />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="total_days" className="form-label">Occupation</label>
                    <input type="text" className="form-control" id defaultValue="Occupation" disabled />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="tab-pane " id="2a">
              <h6>Pending</h6>
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Mediclaim Type:</div>
                        <div className="col-md-6 padding-0 text-right"> Business &amp; Holiday </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Plan Type:</div>
                        <div className="col-md-6 padding-0 text-right"> Excluding USA &amp; Canada </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left">Travel Duration:</div>
                        <div className="col-md-6 padding-0 text-right"> 02 Days </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Net Premium:</div>
                        <div className="col-md-6 padding-0 text-right"> BDT 10,000 </div>
                      </div>
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Vat Add (15%)</div>
                        <div className="col-md-6 padding-0 text-right"> BDT 2,000 </div>
                      </div>
                      <div className="row item_row text_primary">
                        <div className="col-md-6 padding-0 text-left"> Total Premium:</div>
                        <div className="col-md-6 padding-0 text-right">BDT 12,000 </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-6 text-center">
                          <button className="btn btn-secondary" type="submit">Delete</button>
                        </div>
                        <div className="col-md-6 text-center">
                          <button className="btn btn-main" type="submit">Pay Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Mediclaim Type:</div>
                        <div className="col-md-6 padding-0 text-right"> Business &amp; Holiday </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Plan Type:</div>
                        <div className="col-md-6 padding-0 text-right"> Excluding USA &amp; Canada </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left">Travel Duration:</div>
                        <div className="col-md-6 padding-0 text-right"> 02 Days </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Net Premium:</div>
                        <div className="col-md-6 padding-0 text-right"> BDT 10,000 </div>
                      </div>
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Vat Add (15%)</div>
                        <div className="col-md-6 padding-0 text-right"> BDT 2,000 </div>
                      </div>
                      <div className="row item_row text_primary">
                        <div className="col-md-6 padding-0 text-left"> Total Premium:</div>
                        <div className="col-md-6 padding-0 text-right">BDT 12,000 </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-6 text-center">
                          <button className="btn btn-secondary" type="submit">Delete</button>
                        </div>
                        <div className="col-md-6 text-center">
                          <button className="btn btn-main" type="submit">Pay Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Mediclaim Type:</div>
                        <div className="col-md-6 padding-0 text-right"> Business &amp; Holiday </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Plan Type:</div>
                        <div className="col-md-6 padding-0 text-right"> Excluding USA &amp; Canada </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left">Travel Duration:</div>
                        <div className="col-md-6 padding-0 text-right"> 02 Days </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Net Premium:</div>
                        <div className="col-md-6 padding-0 text-right"> BDT 10,000 </div>
                      </div>
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Vat Add (15%)</div>
                        <div className="col-md-6 padding-0 text-right"> BDT 2,000 </div>
                      </div>
                      <div className="row item_row text_primary">
                        <div className="col-md-6 padding-0 text-left"> Total Premium:</div>
                        <div className="col-md-6 padding-0 text-right">BDT 12,000 </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-6 text-center">
                          <button className="btn btn-secondary" type="submit">Delete</button>
                        </div>
                        <div className="col-md-6 text-center">
                          <button className="btn btn-main" type="submit">Pay Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h6>Outgoing</h6>
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Mediclaim Type:</div>
                        <div className="col-md-6 padding-0 text-right"> Business &amp; Holiday </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Plan Type:</div>
                        <div className="col-md-6 padding-0 text-right"> Excluding USA &amp; Canada </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left">Travel Duration:</div>
                        <div className="col-md-6 padding-0 text-right"> 02 Days </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Net Premium:</div>
                        <div className="col-md-6 padding-0 text-right"> BDT 10,000 </div>
                      </div>
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Vat Add (15%)</div>
                        <div className="col-md-6 padding-0 text-right"> BDT 2,000 </div>
                      </div>
                      <div className="row item_row text_primary">
                        <div className="col-md-6 padding-0 text-left"> Total Premium:</div>
                        <div className="col-md-6 padding-0 text-right">BDT 12,000 </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-6 text-center">
                          <button className="btn btn-secondary" type="submit">Delete</button>
                        </div>
                        <div className="col-md-6 text-center">
                          <button className="btn btn-main" type="submit">Pay Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Mediclaim Type:</div>
                        <div className="col-md-6 padding-0 text-right"> Business &amp; Holiday </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Plan Type:</div>
                        <div className="col-md-6 padding-0 text-right"> Excluding USA &amp; Canada </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left">Travel Duration:</div>
                        <div className="col-md-6 padding-0 text-right"> 02 Days </div>
                      </div><hr />
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Net Premium:</div>
                        <div className="col-md-6 padding-0 text-right"> BDT 10,000 </div>
                      </div>
                      <div className="row item_row">
                        <div className="col-md-6 padding-0 text-left"> Vat Add (15%)</div>
                        <div className="col-md-6 padding-0 text-right"> BDT 2,000 </div>
                      </div>
                      <div className="row item_row text_primary">
                        <div className="col-md-6 padding-0 text-left"> Total Premium:</div>
                        <div className="col-md-6 padding-0 text-right">BDT 12,000 </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-6 text-center">
                          <button className="btn btn-secondary" type="submit">Delete</button>
                        </div>
                        <div className="col-md-6 text-center">
                          <button className="btn btn-main" type="submit">Pay Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="3a">
              <div className="row">
                <div className="profile-image-row">
                  <img src="/images/profile.png" alt="" className="profile-image" />
                  {/* edit/change button */}
                  <button className="btn btn-edit">change <i className="fas fa-edit" /></button>
                </div>
                <div className="profile-info">
                  <h3>Yearul Islam</h3>
                </div>
                <form className=" row g-3 needs-validation" noValidate>
                  <div className="col-md-6">
                    <label htmlFor="departure_date" className="form-label">Your Full Name<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id placeholder="Your Full Name" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                    <div className="invalid-feedback">
                      Please Enter Your Full Name
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="total_days" className="form-label">Mobile Number<span className="text-danger">*</span></label>
                    <input type="tel" className="form-control" id placeholder="Mobile Number" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="total_days" className="form-label">Email Address<span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id placeholder="Email Address" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="total_days" className="form-label">Mailing Address<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id placeholder="Mailing Address" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="total_days" className="form-label">Permanent Address<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id placeholder="Permanent Address" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="total_days" className="form-label">Occupation<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id placeholder="Occupation" required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-secondary" type="submit">Discard</button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-primary" type="submit">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* end tab */}
        </div>
      </section>
    </>
  )
}
