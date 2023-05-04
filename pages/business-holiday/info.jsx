import React from 'react'
import Banner from '../../components/banner/Banner'

export default function info() {
  return (
    <>
    <Banner
    title="Business/Holiday Insurance"
    description=" lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."
    />

<section className="info_section">
        <div className="container">
          <div className="row my-2">
            <h3 className="text-center">
              Please, Fill Up This Form To Get Overseas Mediclaim Insurance
            </h3>
          </div>
        </div>
        <div className="container">
          <form action>
            <div className="info-content info-card">
              <h4 className="text-center">
                Insured Personal Information
              </h4>
              <div className="heading_bottom" />
              <div className="row input-element">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor className="label-class lavel-down">Name of the Insured Person <span className="text-danger">*</span></label>
                      <input type="text" className="form-control input-normal" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor className="label-class lavel-down">E-mail Address <span className="text-danger">*</span></label>
                      <input type="email" className="form-control input-normal" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor className="lavel-down label-class">Full Name<span className="text-danger">*</span></label>
                      <input type="text" className="form-control input-normal" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor className="lavel-down label-class">NID Number<span className="text-danger">*</span></label>
                      <input type="number" className="form-control input-normal" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor className="lavel-down label-class">Occupation</label>
                      <input type="text" className="form-control input-normal" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor className="lavel-down label-class">Passport Number<span className="text-danger">*</span></label>
                      <input type="text" className="form-control input-normal" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor className="lavel-down label-class">Permanent Address<span className="text-danger">*</span></label>
                      <input type="text" className="form-control input-normal" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor className="lavel-down label-class">Mailling Address<span className="text-danger">*</span></label>
                      <input type="text" className="form-control input-normal" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="checkbox" className />
                      <label htmlFor>Same as Permanent Address</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-content info-card">
              <h5 className="text-center">
                Upload Documents
              </h5>
              <div className="heading_bottom" />
              <div className=" input-element">
                <div className="row">
                  <div className="col-md-12">
                    <div className>
                      <label htmlFor className="form-label"> NID<span className="text-danger">*</span></label><br />
                      <input type="file" className="form-control input-normal" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className>
                      <label htmlFor className="form-label">Passport<span className="text-danger">*</span></label><br />
                      <input type="file" className="form-control input-normal" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="checkbox" className />
                      <label htmlFor>Accept All The <a href="#">Terms &amp; Conditions</a> Of Phoenix</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-danger btn-block">Back</button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-main btn-block text-white">Submit</button>
                  </div>
                </div>
              </div>
              <div className="row">
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
