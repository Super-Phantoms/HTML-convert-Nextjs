import React from 'react'

export default function Banner(props) {
  return (
    <>
         <section className="banner_section">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="banner_content">
                  <h1 className>{props.title}</h1>
                  <p className>{props.description}</p>
                  {/* <nav aria-label="breadcrumb" className="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item">Overseas Mediclaim</li>
                      <li className="breadcrumb-item active" aria-current="page">Business &amp; Holiday</li>
                    </ol>
                  </nav> */}
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <img src="images/travel-concept-with-baggage-2 1.png" alt="" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  )
}
