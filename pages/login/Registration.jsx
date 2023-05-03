import React from 'react'
import Styles from '../../styles/registration.module.css'

export default function Registration() {
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
                    <h4 className="text-center"> Registration </h4>
                    <form method="POST">
                      <div className="row my-3">
                        <div className="col-md-12">
                          <input type="text" className="form-control " placeholder="Full Name" name="name" required defaultValue />
                        </div>
                        <div className="col-md-12">
                          <input type="text" className="form-control " placeholder="Email" name="email" required defaultValue />
                        </div>
                        <div className=" col-md-12 ">
                          <input type="password" name="password" className="form-control" id="password" placeholder="Password" defaultValue />
                        </div>
                        <div className=" col-md-12 ">
                          <input type="password" name="password" className="form-control" id="password" placeholder="Confirm Password" defaultValue />
                        </div>
                        <div className="col-md-12 mt-2">
                          <button type="submit" className="btn btn-main">Register</button>
                        </div>
                      </div>
                    </form>
                   <hr className="hr-class"  />
                    <h6 className="text-center">OR</h6>
                   <hr className="hr-class"  />
                    <button className="btn btn-google btn-block mb-4 form-control mt-2" type="submit"><i className="fa-brands fa-google" /> Continue With Google</button>
                    <div className="row my-3">
                      <div className="col-md-12">
                        <p> Already have an account?
                          <a className="text-info" href="#">Sign In</a>
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
    );
    </>
  )
}
