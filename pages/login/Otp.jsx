import React from 'react'
import Styles from '../../styles/otp.module.css'

export default function Otp() {
  return (
    <>
            <section className="login_section">
        <div className="container align-items-center justify-content-center">
          <div className>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="card card-default mb-0">
                  {/* <div class="card-header pb-0">
                                <div class="app-brand w-100 d-flex justify-content-center border-bottom-0">
                                    <a class="w-auto pl-0" href="/">
                                        <img src="images/Phoneix-logo1.png" alt="Informax">
                                    </a>
                                </div>
                            </div> */}
                  <div className="card-body px-5 pb-5 pt-0">
                    <h4 className="text-center">OTP Verify</h4>
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <p className="mb-2 otp-text">OTP has been send to 01304350205</p>
                        <div>
                          <input type="number" className="otp-code" />
                          <input type="number" className="otp-code" />
                          <input type="number" className="otp-code" />
                          <input type="number" className="otp-code" />
                        </div>
                        <button className="btn btn-main btn-full">Verify</button>
                        <h6 className="mt-2"> OR</h6>
                        <button className="btn btn-google btn-block mb-4 form-control" type="submit"><i className="fa-brands fa-google" /> Continue With Google</button>
                      </div>
                    </div>
                   <hr className="hr-class"  />
                    <h6 className="text-center">OR</h6>
                   <hr className="hr-class"  />
                    <form method="POST">
                      <div className="row my-3">
                        <div className="form-group col-md-12 mb-4">
                          <input type="text" className="form-control " id="login" placeholder="Email" name="login" required defaultValue />
                        </div>
                        <div className="form-group col-md-12 ">
                          <input type="password" name="password" className="form-control" id="password" placeholder="Password" defaultValue />
                        </div>
                        <div className="col-md-12">
                          <div className="d-flex justify-content-between mb-3">
                            {/* <div class="block mt-4">
                                                    <label for="remember_me" class="flex items-center">
                                                        <input id="remember_me" type="checkbox"
                                                            class="form-checkbox" name="remember">
                                                        <span class="ml-2 text-sm text-gray-600">Remember me</span>
                                                    </label>
                                                </div> */}
                            <a className="text-color underline text-sm pt-2" href="#"> Forgot your
                              password?</a>
                          </div>
                          <button type="submit" className="btn btn-main">Log In</button>
                        </div>
                      </div>
                    </form>
                    <div className="row my-3">
                      <div className="col-md-12">
                        <p>Don't have an account yet ?
                          <a className="text-info" href="#">Sign Up</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
