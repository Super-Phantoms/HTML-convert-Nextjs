import React from 'react'
import Banner from '../components/banner/Banner'

export default function output() {
  return (
    <>
        <Banner 
        title="Overseas Mediclaim" 
        description="Business & Holiday Overseas Mediclaim Insurance"
        />
    <section className="output_section">
        <div className="container">
          <div className="row my-2">
            <h3 className="text-center output-heading"> General Information </h3>
            <table className="table table-bordered border-primary">
              <tbody><tr>
                  <td width="50%">Application ID</td>
                  <td>PH-04-2023-45786541</td>
                </tr>
                <tr>
                  <td width="50%">Application Date</td>
                  <td>04/05/2023 </td>
                </tr>
                <tr>
                  <td width="50%">Request Sourse</td>
                  <td>Web</td>
                </tr>
                <tr>
                  <td width="50%">Insurance Type</td>
                  <td>Overseas Mediclaim Insurance </td>
                </tr>
                <tr>
                  <td width="50%">Application Type</td>
                  <td>New </td>
                </tr>
                <tr>
                  <td width="50%">Application Status</td>
                  <td>Pending</td>
                </tr>
              </tbody></table>
          </div>
          <div className="row my-2">
            <h3 className="text-center output-heading"> Policy Information </h3>
            <table className="table table-bordered border-primary">
              <tbody><tr>
                  <td width="50%">Overseas Medicliam Type</td>
                  <td>Business/Holiday</td>
                </tr>
                <tr>
                  <td width="50%">Country Type</td>
                  <td>Non Schengen Country </td>
                </tr>
                <tr>
                  <td width="50%">Plan Type</td>
                  <td>Excluding USA &amp; Canada</td>
                </tr>
                <tr>
                  <td width="50%">Travel Duration</td>
                  <td>05 Days</td>
                </tr>
                <tr>
                  <td width="50%">Date of Birth</td>
                  <td>02/02/1999</td>
                </tr>
                <tr>
                  <td width="50%">Age</td>
                  <td>24 Years</td>
                </tr>
                <tr>
                  <td width="50%">Policy Start Date</td>
                  <td>05/03/2023</td>
                </tr>
                <tr>
                  <td width="50%">Policy End Date</td>
                  <td>10/05/2023</td>
                </tr>
              </tbody></table>
          </div>
          <div className="row my-2">
            <h3 className="text-center output-heading"> Personal Information </h3>
            <table className="table table-bordered border-primary">
              <tbody><tr>
                  <td width="50%">Insured Full Name</td>
                  <td> Yearul Islam</td>
                </tr>
                <tr>
                  <td width="50%">NID Number</td>
                  <td> 43463246 </td>
                </tr>
                <tr>
                  <td width="50%">Mailing Address</td>
                  <td> Mudga, Dhaka </td>
                </tr>
                <tr>
                  <td width="50%">Permanent Address</td>
                  <td> Mudga, Dhaka </td>
                </tr>
                <tr>
                  <td width="50%">Occupation</td>
                  <td> Student </td>
                </tr>
                <tr>
                  <td width="50%">Mobile Number</td>
                  <td> 01700000000 </td>
                </tr>
                <tr>
                  <td width="50%">Email Address</td>
                  <td> abc@abc.com
                  </td></tr>
                <tr>
                  <td width="50%">Passport Number</td>
                  <td> 43463246 </td>
                </tr>
              </tbody></table>
          </div>
          <div className="row my-2">
            <h3 className="text-center output-heading"> Premium Calculation </h3>
            <table className="table table-bordered border-primary">
              <tbody><tr>
                  <td width="50%">Total Premium</td>
                  <td> BDT 12,000</td>
                </tr>
                <tr>
                  <td width="50%">VAT (15%)</td>
                  <td>BDT 12,000 </td>
                </tr>
                <tr>
                  <td width="50%">NET Premium</td>
                  <td>BDT 12,000 </td>
                </tr>
              </tbody></table>
          </div>
          <div className="row my-2">
            <h3 className="text-center output-heading"> Uploaded Document ListUploaded Document List </h3>
            <table className="table table-bordered border-primary">
              <tbody><tr>
                  <td width="50%">Passport</td>
                  <td> Yes</td>
                </tr>
                <tr>
                  <td width="50%">NID</td>
                  <td>No </td>
                </tr>
              </tbody></table>
          </div>
          <div className="row my-2">
            <div className="col-md-6">
              <button className="btn btn-secondary  btn-full">close</button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary btn-full">Pay Now</button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
