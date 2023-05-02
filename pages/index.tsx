// import Head from "next/head";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
   <>
    {/* banner */}
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/Rectangle2.png" className="bd-placeholder-img" width="100%" height="100%" alt="" />
              <div className="row">
                <div className="col-md-8">
                  <div className="container">
                    <div className="carousel-caption text-start">
                      <h1>Protecting your assets, protecting your future.</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable content
                        of a page when looking at its layout.</p>
                      <p><a className="btn btn-lg btn-primary" href="#">Know More</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" />
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/Rectangle2.png" className="bd-placeholder-img" width="100%" height="100%" alt="" />
              <div className="row">
                <div className="col-md-8">
                  <div className="container">
                    <div className="carousel-caption text-start">
                      <h1>Another example headline.</h1>
                      <p>Some representative placeholder content for the second slide of the carousel.</p>
                      <p><a className="btn btn-lg btn-primary" href="#">Know More</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" />
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/Rectangle2.png" className="bd-placeholder-img" width="100%" height="100%" alt="" />
              <div className="row">
                <div className="col-md-8">
                  <div className="container">
                    <div className="carousel-caption text-start">
                      <h1>One more for good measure.</h1>
                      <p>Some representative placeholder content for the third slide of this carousel.</p>
                      <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" />
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <section class="hero_section">
    <div class="container">
      <div class="row hero-slider">
        <div class="col-md-6">
          <div class="hero_content">
            <h1 class="hero_title">Protecting your assets, protecting your future.</h1>
            <p class="hero_text">It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout</p>
            <a href="#" class="btn btn-primary">Know More</a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="hero_img">
          </div>
        </div>
      </div>
    </div>
  </section> */}
        {/* end banner */}
        {/* Statistick Section */}
        <section className="statistick_section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 text-center">
                <div className="statistick">
                  <div className="statistick_icon">
                    <img src="/images/Group74.png" alt="" />
                  </div>
                  <div className="statistick_content">
                    <h3>1000+</h3>
                    <p className="card-title">Happy Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="statistick">
                  <div className="statistick_icon">
                    <img src="/images/Group64.png" alt="" />
                  </div>
                  <div className="statistick_content">
                    <h3>1000+</h3>
                    <p className="card-title">Beneficiary</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="statistick">
                  <div className="statistick_icon">
                    <img src="/images/Group63.png" alt="" />
                  </div>
                  <div className="statistick_content">
                    <h3>1000+</h3>
                    <p className="card-title">Branches</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="statistick">
                  <div className="statistick_icon">
                    <img src="/images/Group62.png" alt="" />
                  </div>
                  <div className="statistick_content">
                    <h3>1000+</h3>
                    <p className="card-title">Enrollments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end Statistick Section */}
        {/* Service Section */}
        <section className="service_section">
          <div className="container">
            <h3 className="text-center">Our Available Services</h3>
            {/* devider */}
            <div className="row devider">
              <div className="col-md-4" />
              <div className="col-md-4 text-center">
                <div className="devider text-center">
                  <div className="devider_line" />
                  <div className="devider_line2" />
                </div>
              </div>
              <div className="col-md-4" />
            </div>
            <div className="row py-4">
              <div className="col-md-1 col-sm-1" />
              <div className="col-md-5 col-sm-6 text-center">
                <div className="card">
                  <div className="text-center">
                    <img src="/images/abroad1.png" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h6 >Overseas Mediclaim Insurance</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-6 text-center">
                <div className="card ">
                  <div className="text-center">
                    <img src="/images/cow1.png" className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <h6 >Cattle Insurance</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-1 col-sm-1" />
            </div>
          </div>
        </section>
        {/* End Service Section */}
        <section className="why_online_ins">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Why Online Insurance?</h2>
                {/* devider */}
                <div className="row devider">
                  <div className="col-md-6 text-center">
                    <div className="devider text-center">
                      <div className="devider_line" />
                      <div className="devider_line2" />
                    </div>
                  </div>
                  <div className="col-md-6" />
                </div>
                {/* end Devider */}
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using
                </p>
                <ul>
                  <li><span className="list_text">Your Faithful Insurance Partner</span></li>
                  <li><span className="list_text" />We Are The Best in Bangladesh</li>
                  <li><span className="list_text" />Not Any Hidden Charge</li>
                </ul>
                <a className="btn btn-lg btn-primary" href="#">Know More</a>
              </div>
              <div className="col-md-6">
                <div className="why_online_img">
                  <img src="/images/Rectangle75.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* why ins section */}
        {/* Ins Step */}
        <section className="ins_step">
          <div className="container">
            <div className="row">
              <h2 className="text-center">03 Easy Steps To Go</h2>
              {/* devider */}
              <div className="row devider">
                <div className="col-md-4" />
                <div className="col-md-4 text-center">
                  <div className="devider text-center">
                    <div className="devider_line" />
                    <div className="devider_line2" />
                  </div>
                </div>
                <div className="col-md-4" />
              </div>
              {/* end Devider */}
              {/* step design */}
              <div className="row easy_step">
                <div >
                  <div className="row text-center">
                    {/* <div class="col-md-4"><span class="step1 step_circle_count">01</span></div>
            <div class="col-md-4"> <span class="step2 step_circle_count">02</span></div>
            <div class="col-md-4"> <span class="step3 step_circle_count">03</span></div> */}
                    <div className="col-md-4"> <img src="/images/step1.png" alt="" className="step_img" /> </div>
                    <div className="col-md-4"> <img src="/images/step2.png" alt="" className="step_img" /> </div>
                    <div className="col-md-4"> <img src="/images/step3.png" alt="" className="step_img" /> </div>
                  </div>
                </div>
              </div>
              <div className="row easy_step">
                <div className="step_design">
                  <div className="row text-center">
                    <div className="col-md-4"><span className=" step_circle" /></div>
                    <div className="col-md-4"> <span className=" step_circle" /></div>
                    <div className="col-md-4"> <span className=" step_circle" /></div>
                  </div>
                </div>
              </div>
              {/* step design */}
              <div className="col-md-4">
                <div className="card text-left">
                  {/* <img class="card-img-top" src="holder.js/100px180/" alt=""> */}
                  <div className="card-body">
                    <h4 className="card-title">Select Service</h4>
                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-left">
                  {/* <img class="card-img-top" src="holder.js/100px180/" alt=""> */}
                  <div className="card-body">
                    <h4 className="card-title">Provide Legal Info</h4>
                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-left">
                  {/* <img class="card-img-top" src="holder.js/100px180/" alt=""> */}
                  <div className="card-body">
                    <h4 className="card-title">Get The Insurance</h4>
                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Ins Step */}
        {/* review */}
        <section className="review_section">
          <div className="container">
            <div className="row">
              <h2 className="text-center">What People Says About Us</h2>
              {/* devider */}
              <div className="row devider">
                <div className="col-md-4" />
                <div className="col-md-4 text-center">
                  <div className="devider text-center">
                    <div className="devider_line" />
                    <div className="devider_line2" />
                  </div>
                </div>
                <div className="col-md-4" />
              </div>
              {/* end Devider */}
            </div>
            {/* multi step carosel */}
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                  <div className="row text-">
                    <div className="col-md-6">
                      <div className="card review_card text-left">
                        <div className="text-">
                          <img src="/images/user.jpg" className="card-img-review" alt="..." />
                          <div className="my-2">
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                          </div>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Islam Yearul</h4>
                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout, It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at its layout</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card review_card text-left">
                        <div className="text-">
                          <img src="/images/user.jpg" className="card-img-review" alt="..." />
                          <div className="my-2">
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                          </div>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Islam Yearul</h4>
                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout, It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at its layout</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <div className="row text-">
                    <div className="col-md-6">
                      <div className="card review_card text-left">
                        <div className="text-">
                          <img src="/images/user.jpg" className="card-img-review" alt="..." />
                          <div className="my-2">
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                          </div>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Islam Yearul</h4>
                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout, It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at its layout</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card review_card text-left">
                        <div className="text-">
                          <img src="/images/user.jpg" className="card-img-review" alt="..." />
                          <div className="my-2">
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                          </div>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Islam Yearul</h4>
                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout, It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at its layout</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row text-">
                    <div className="col-md-6">
                      <div className="card review_card text-left">
                        <div className="text-">
                          <img src="/images/user.jpg" className="card-img-review" alt="..." />
                          <div className="my-2">
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                          </div>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Islam Yearul</h4>
                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout, It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at its layout</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card review_card text-left">
                        <div className="text-">
                          <img src="/images/user.jpg" className="card-img-review" alt="..." />
                          <div className="my-2">
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                            <i className="fa-solid fa-star" style={{color: '#ffd43b'}} />
                          </div>
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">Islam Yearul</h4>
                          <p className="card-text">It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout, It is a long established fact that a reader will be
                            distracted by the readable content of a page when looking at its layout</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
        {/* End review */}
        {/* Faq Section */}
        <section className="faq_section">
          <div className="container">
            <div className="row">
              <h2 className="text-center">Frequently Asked Questions</h2>
              {/* devider */}
              <div className="row devider">
                <div className="col-md-4" />
                <div className="col-md-4 text-center">
                  <div className="devider text-center">
                    <div className="devider_line" />
                    <div className="devider_line2" />
                  </div>
                </div>
                <div className="col-md-4" />
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How to Apply For Insurance?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      It is a long established fact that a reader will be distracted by the readable content of a page when
                      looking at its layout, It is a long established fact that a reader will be distracted by the readable
                      content of a page when looking at its layout
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How to Fill-up The Information?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                      plugin adds the appropriate classes that we use to style each element. These classes control the overall
                      appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                      custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                      within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      What’s The Benefits Of Insurance?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                      plugin adds the appropriate classes that we use to style each element. These classes control the overall
                      appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                      custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                      within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Who Can Take The Facilities?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                      plugin adds the appropriate classes that we use to style each element. These classes control the overall
                      appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                      custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                      within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      What About Your Company Policy?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                      plugin adds the appropriate classes that we use to style each element. These classes control the overall
                      appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                      custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                      within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Faq Section */}
        {/* brand logo  */}
        <section className="brand_logo_section">
          <div className="container">
            <div className="brands">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="lc-block">
                      <div id="carouselLogos" className="carousel slide pb-4" data-bs-ride="carousel">
                        <div className="carousel-inner px-5">
                          <div className="carousel-item">
                            <div className="row">
                              <div className=" col-sm-6 col-lg-2 align-self-center">
                                <img className="d-block w-100 px-3 mb-3" src="https://cdn.livecanvas.com/media/logos/11.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/2.png" alt="" />
                              </div>
                              <div className="  col-sm-6 col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/3.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/12.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/5.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/6.png" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item active">
                            <div className="row">
                              <div className=" col-sm-6 col-lg-2 align-self-center">
                                <img className="d-block w-100 px-3 mb-3" src="https://cdn.livecanvas.com/media/logos/11.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/2.png" alt="" />
                              </div>
                              <div className="  col-sm-6 col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/3.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/12.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/5.png" alt="" />
                              </div>
                              <div className=" col-sm-6  col-lg-2  align-self-center">
                                <img className="d-block w-100 px-3  mb-3" src="https://cdn.livecanvas.com/media/logos/6.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*
                  <ol class="carousel-indicators position-relative mt-3">
                    <li data-bs-target="#carouselLogos" data-bs-slide-to="0" class="active bg-dark carousel-control-prev-icon"></li>
                    <li data-bs-target="#carouselLogos" data-bs-slide-to="1" class="bg-dark"></li>
                  </ol>
                  */}
                        <div className="w-100 px-3 text-center mt-4">
                          <a className="carousel-control-prev position-relative d-inline me-4" href="#carouselLogos" data-bs-slide="prev">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                              </path>
                            </svg>
                            <span className="visually-hidden">Previous</span>
                          </a>
                          <a className="carousel-control-next position-relative d-inline" href="#carouselLogos" data-bs-slide="next">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="text-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                              </path>
                            </svg>
                            <span className="visually-hidden">Next</span>
                          </a>
                        </div>
                      </div>
                    </div>{/* /lc-block */}
                  </div>{/* /col */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End brand logo  */}
   </>
  );
}
