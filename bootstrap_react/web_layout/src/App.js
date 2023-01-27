
// import logo from './logo.svg';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




function App() {
  return (
    <>
      {/* --------------------------------section1 start----- */}
      <section className='bg_img img-fluid img_bg'>
        <div className="layer">


          <header>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div>
                    <a href="#" className='logo_1'>Be<span>idea</span>.</a>
                  </div>
                </div>
                
                <div className="col-auto d-none d-xl-block d-lg-block d-md-block">
                  <ul className='main_menu'>
                    <li><a href="#">home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">service</a></li>
                    <li><a href="#">protfolio</a></li>
                    <li><a href="#">clients</a></li>
                    <li><a href="#">price</a></li>
                    <li><a href="#">blog</a></li>
                    <li><a href="#">contact</a></li>
                  </ul>
                </div>
              

                <div className="col d-md-none" >
                  <h5 className='mt-3 text-success'>toggle</h5>
                </div>
              </div>
            </div>

          </header>


          <div className="row">
            <div className="col">
              <div className='v-middle content_first text-center'>
                <h3>We Love To Design</h3>
                <h2>We Design Creative Websites</h2>
                <button className='btn1 mt-4'>view work</button>
                <button className='btn2 ms-2'>learn more</button>
              </div>
              <div className="box_round">
                <span></span>
              </div>
            </div>
          </div>


        </div>
      </section>
      {/* --------------------------------section1 End----- */}

      {/* --------------------------------section2 start----- */}

      <section className='section_y'>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className='text-center'>
                <h6 className='bg_text'>who we are</h6>
                <h4 className='bg_text_h4'>We Are Creative Company</h4>
                <p className='bg_text_p'>Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, in quodsiUbique his dico <br></br> vituperata ut. in quodsiUbique maluisset te, his dico vituperata ut.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className='d-flex justify-content-center'>
                <img src="https://d33wubrfki0l68.cloudfront.net/575327f385c068071f653c9eb1bc936c0ed47fbd/7fd7d/img/02.png" alt="" srcset="" className='img-fluid mt-5 ' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------section2 End----- */}

      {/*--------------------------------section3 start----- */}

      <section className='section_y section3'>
        <div className="container">
          <div className="row row-cols-sm-1 g-5 row-cols-md-3 row-cols-lg">
            <div className="col">
              <div className='section3_box1'>
                <div className='box_logo'><i class="fa-solid fa-pen-ruler"></i></div>
                <h6 className='box1_h6'>web Design</h6>
                <p className='box1_p'>Lorem ipsum dolor sit amet, in quodsi <br></br>vulputate maluisset.</p>
              </div>
            </div>
            <div className="col">
              <div className='section3_box1'>
                <div className="box_logo">
                <i class="fa-solid fa-window-restore"></i>
                </div>
                <h6 className='box1_h6'>Development</h6>
                <p className='box1_p'>Lorem ipsum dolor sit amet, in quodsi <br></br>vulputate maluisset.</p>
              </div>
            </div>
            <div className="col">
              <div className='section3_box1'>
                <div className="box_logo">
                <i class="fa-solid fa-tv"></i>
                </div>
                <h6 className='box1_h6'>Markting</h6>
                <p className='box1_p'>Lorem ipsum dolor sit amet, in quodsi <br></br>vulputate maluisset.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------section3 End----- */}

      {/* --------------------------------section4 start----- */}


      <section className='section_y'>
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <h6 className='bg_text'>our team</h6>
                <h4 className='bg_text_h4'>Our Creative Mindes</h4>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-4">
              <div className='team-item'>
                <img src={require('./img/asset 1.jpeg')} alt="" className='img-fluid' />
                <div className="info">
                  <div className="v-middle text-center">
                    <h6 className=''>john Doe</h6>
                    <h5>web Designer</h5>
                    <div className="social-icon mt-4">
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-facebook-f"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-twitter"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-linkedin-in"></i>
                        </span>
                      </a>
                      <a href="#"><span><i class="fa-brands fa-pinterest-p"></i></span></a>
                      <a href="#"><span><i class="fa-brands fa-instagram"></i></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className='team-item'>
                <img src={require('./img/asset 2.jpeg')} alt="" className='img-fluid' />
                <div className="info">
                  <div className="v-middle text-center">
                    <h6>john Doe</h6>
                    <h5>Manager</h5>
                    <div className="social-icon">
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-facebook-f"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-twitter"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-linkedin-in"></i>
                        </span>
                      </a>
                      <a href="#"><span><i class="fa-brands fa-pinterest-p"></i></span></a>
                      <a href="#"><span><i class="fa-brands fa-instagram"></i></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className='team-item'>
                <img src={require('./img/asset 3.jpeg')} alt="" className='img-fluid' />
                <div className="info">
                  <div className="v-middle text-center">
                    <h6>john Doe</h6>
                    <h5>Seo</h5>
                    <div className="social-icon">
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-facebook-f"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-twitter"></i>
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i class="fa-brands fa-linkedin-in"></i>
                        </span>
                      </a>
                      <a href="#"><span><i class="fa-brands fa-pinterest-p"></i></span></a>
                      <a href="#"><span><i class="fa-brands fa-instagram"></i></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col col-6">
              <div>
                <h4>Why Choose Us ?</h4>
                <p className='mt-4'>Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, in quodsiUbique his dico vituperata ut. in quodsiUbique maluisset te,quodsiUbique his dico vituperata ut.</p>

                <a href="#"><button className='btn3 mt-5'>purchase Now</button></a>

              </div>
            </div>
            <div className="col col-6">
              <div>
                <span className='ps-5'>WEB DESIGN</span>
                <div className="line">
                  <span className='circle_line ps-2'>90%</span>
                </div>
                <span className='ps-5'>BRANDING</span>
                <div className="line2">
                  <span className='circle_line2 ps-2'>80%</span>
                </div>
                <span className='ps-5'>DEVELOPMENT</span>
                <div className="line3">
                  <span className='circle_line3 ps-2'>85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------section4 End----- */}

      {/* --------------------------------section5 start----- */}


      <section className='section_y number'>
        <Container>
          <Row className='text-center ' sm={1} md={2} lg={2} xl={4}>
            <div className='col-md-3 col-sm-6'>
              <div className='thum-item'>
                <span>
                  <i class="fa-regular fa-face-smile"></i>
                </span>
                <h3>234</h3>
                <h6>happy clients</h6>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='thum-item'>
                <span>
                  <i class="fa-solid fa-layer-group"></i>
                </span>
                <h3>1484</h3>
                <h6>Complete Project</h6>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className="thum-item">
                <span>
                  <i class="fa-solid fa-pen"></i>
                </span>
                <h3>7396</h3>
                <h6>Hours of Work</h6>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className="thum-item">
                <span>
                  <i class="fa-solid fa-trophy"></i>
                </span>
                <h3>7</h3>
                <h6>Awards</h6>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      {/* --------------------------------section5 End----- */}

      {/* --------------------------------section6 start----- */}


      <section className='section_y'>
        <Container>
          <Row>
            <Col>
              <div>
                <h6 className='bg_text'>OUR SERVICES</h6>
                <h4 className='bg_text_h4'>What Can We Do ?</h4>
              </div>
              <div className='service-icon text-center'>
                <ul className='list-unstyled'>
                  <li className='active tab1'>
                    <span>
                      <i class="fa-solid fa-tablet"></i>
                    </span>
                    <h6>WEB DESIGN</h6>
                  </li>
                  <li className='tab2'>
                    <span>
                      <i class="fa-solid fa-pen-ruler"></i>
                    </span>
                    <h6>GRAPHIC DESIGN</h6>
                  </li>
                  <li className='tab3'>
                    <span>
                      <i class="fa-solid fa-chess-knight"></i>
                    </span>
                    <h6>BRANDING</h6>
                  </li>
                  <li>
                    <span>
                      <i class="fa-solid fa-puzzle-piece"></i>
                    </span>
                    <h6>DEVELOPMENT</h6>
                  </li>
                </ul>
              </div>

            </Col>
          </Row>

        </Container>
      </section>
      {/* --------------------------------section6 End----- */}

      {/* --------------------------------section7 start----- */}


      <section className='section_y section3'>
        <div className="container">
          <div className="row">
            <div className="col">
              <h5 className='section7_h5'>Creative Web Design Fully Responsive</h5>
              <p className='pt-3 section7_p'>Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, his dico vituperata ut.ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, his dico vituperata ut. in quodsiUbique maluisset vel te, in quodsiUbique maluisset vel te, his dico vituperata ut</p>
              <p className='section7_p'>
                Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, his dico vituperata ut. in quodsiUbique maluisset vel te, his dico vituperata ut in quodsiUbique his dico vituperata.
              </p>
            </div>
            <div className="col">
              <img src={require('./img/asset 4.png')} alt="" srcset="" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>
      <section className='section_y'>
        <Container>
          <Row>
            <Col>
              <div>
                <h6 className='bg_text'>OUR WORK</h6>
                <h4 className='bg_text_h4'>Some Of Work</h4>
              </div>
              <div className='text-center'>
                <ul className='main_menu_section8'>
                  <li><a href="#">all</a></li>
                  <li><a href="#">brand</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">photo</a></li>
                  <li><a href="#">video</a></li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="col-4">
              <div className="team-item2">
                <img src={require('./img/asset 5.jpeg')} alt="" srcset="" className='img-fluid' />
                <div className="info2">
                  <div className="v-middle text-center">
                    <h6>Web Design</h6>
                    <div className=''>
                      <div className="soc_icon mt-4" >
                        <span>
                          <a href="#"><i class="fa-solid fa-link"></i></a>
                        </span>
                      </div>
                      <div className="soc_icon mt-4" >
                        <span>
                          <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="team-item2">
                <img src={require('./img/asset 6.jpeg')} alt="" srcset="" className='img-fluid' />
                <div className="info2">
                  <div className="v-middle text-center">
                    <h6>Web Design</h6>
                    <div className=''>
                      <div className="soc_icon mt-4" >
                        <span>
                          <a href="#"><i class="fa-solid fa-link"></i></a>
                        </span>
                      </div>
                      <div className="soc_icon mt-4" >
                        <span>
                          <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="team-item2">
                <img src={require('./img/asset 7.jpeg')} alt="" srcset="" className='img-fluid' />
                <div className="info2">
                  <div className="v-middle text-center">
                    <h6>Web Design</h6>
                    <div className=''>
                      <div className="soc_icon mt-4" >
                        <span>
                          <a href="#"><i class="fa-solid fa-link"></i></a>
                        </span>
                      </div>
                      <div className="soc_icon mt-4" >
                        <span>
                          <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="team-item2">
                <img src={require('./img/asset 8.jpeg')} alt="" srcset="" className='img-fluid' />
                <div className="info2">
                  <div className="v-middle text-center">
                    <h6>Web Design</h6>
                    <div className=''>
                      <div className="soc_icon mt-4" >
                        <span>
                          <a href="#"><i class="fa-solid fa-link"></i></a>
                        </span>
                      </div>
                      <div className="soc_icon mt-4" >
                        <span>
                          <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="team-item2">
                <img src={require('./img/asset 9.jpeg')} alt="" srcset="" className='img-fluid' />
                <div className="info2">
                  <div className="v-middle text-center">
                    <h6>Web Design</h6>
                    <div className=''>
                      <div className="soc_icon mt-4" >
                        <span>
                          <a href="#"><i class="fa-solid fa-link"></i></a>
                        </span>
                      </div>
                      <div className="soc_icon mt-4" >
                        <span>
                          <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="team-item2">
                <img src={require('./img/asset 10.jpeg')} alt="" srcset="" className='img-fluid' />
                <div className="info2">
                  <div className="v-middle text-center">
                    <h6>Web Design</h6>
                    <div className=''>
                      <div className="soc_icon mt-4" >
                        <span>
                          <a href="#"><i class="fa-solid fa-link"></i></a>
                        </span>
                      </div>
                      <div className="soc_icon mt-4" >
                        <span>
                          <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      {/* --------------------------------section7 End----- */}

      {/* --------------------------------section8 start--- */}
      <section className='section_y pallrex'>
        <Container>
          <Row className='text-center '>
            <Col>
              <div className='client-say text-center'>
                <span className='icon-quote'><a href="#"><i class="fa-solid fa-quote-right"></i></a></span>
                <h4>happy student</h4>
              </div>
              <OwlCarousel className='owl-theme' items={1} loop margin={10} nav={false} dots={false} autoplay autoplayTimeout={3000}>
                <div class='item client-item text-center'>
                  <p>Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!</p>
                  <h6>John Doe</h6>
                  <h5>_ Google Inc _</h5>
                </div>
                <div class='item item client-item text-center'>
                  <p>Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!</p>
                  <h6>John Doe</h6>
                  <h5>_ Google Inc _</h5>
                </div>
                <div class='item item client-item text-center'>
                  <p>Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!</p>
                  <h6>John Doe</h6>
                  <h5>_ Google Inc _</h5>
                </div>
              </OwlCarousel>


            </Col>
          </Row>
        </Container>
      </section>
      {/* --------------------------------section8 End--- */}
      {/* --------------------------------section9 start--- */}

      <section className='section_y'>
        <Container>

          <div>
            <h6 className='bg_text'>PRICE TABLE</h6>
            <h4 className='bg_text_h4'>Our Pricing</h4>
          </div>

          <div className="row mt-5">
            <div className="col">
              <div className="prc-item">
                <div className="type">
                  <h5>Free</h5>
                </div>
                <div className="main-price">
                  <h1>0
                    <span>$</span>
                  </h1>
                  <span className='per'>month</span>
                </div>
                <div className="features">
                  <p>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    Any Ware Access
                  </p>
                </div>
                <div className="features">
                  <p>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    10GB hosting
                  </p>
                </div>
                <div className="features">
                  <p>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    2 Unique Users
                  </p>
                </div>
                <div className="features">
                  <p>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    Support 24 / h
                  </p>
                </div>
                <a href="#" className='btn btn4_box d-block'>purchase</a>

              </div>
            </div>
            <div className="col">
              <div className="prc-item bg_box_color">
                <div className="type">
                  <h5>Free</h5>
                </div>
                <div className="main-price">
                  <h1>20
                    <span>$</span>
                  </h1>
                  <span className='per'>month</span>
                </div>
                <div className="features">
                  <p className='p_features'>
                    <span>
                      <i class="fa-solid fa-check our_price_icon"></i>
                    </span>
                    Any Ware Access
                  </p>
                </div>
                <div className="features">
                  <p className='p_features'>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    50 GB Hosting
                  </p>
                </div>
                <div className="features">
                  <p className='p_features'>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    5 Unique Users
                  </p>
                </div>
                <div className="features">
                  <p className='p_features'>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    Support 24 / h
                  </p>
                </div>
                <a href="#" className='btn btn4_box2 d-block'>purchase</a>


              </div>
            </div>
            <div className="col">
              <div className="prc-item">
                <div className="type">
                  <h5>Free</h5>
                </div>
                <div className="main-price">
                  <h1>50
                    <span>$</span>
                  </h1>
                  <span className='per'>month</span>
                </div>
                <div className="features">
                  <p>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    Any Ware Access
                  </p>
                </div>
                <div className="features">
                  <p>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    100 GB Hosting
                  </p>
                </div>
                <div className="features">
                  <p>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    20 Unique Users
                  </p>
                </div>
                <div className="features">
                  <p>
                    <span>
                      <i class="fa-solid fa-check"></i>
                    </span>
                    Support 24 / h
                  </p>

                </div>
                <a href="#" className='btn btn4_box d-block'>purchase</a>


              </div>
            </div>
          </div>

        </Container>

      </section>


      {/* --------------------------------section9 End--- */}

      {/* --------------------------------section10 Start- */}
      <section className='section_y section3'>
        <Container>
          <div>
            <h6 className='bg_text'>OUR BLOG</h6>
            <h4 className='bg_text_h4'>Latest News</h4>
          </div>

          <div className="row mt_5">
            <div className="col-md-4">
              <div className="post">
                <div className="post-img">
                  <a href="#"><img src={require('./img/asset 11.jpeg')} alt="" srcset="" className='img-fluid' /></a>
                </div>
                <div className="post-content">
                  <a href="#"><h6>Style In Braind and Logo</h6></a>
                  <p>Lorem ipsum dolor sit amet, consec tetur elit. In maximus ligula semper.</p>
                  <a href="#"><span>Read more..</span></a>
                  <div className="inform">
                    <ul>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span><i class="fa-solid fa-user"></i></span>
                          admin
                        </a>
                      </li>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span><i class="fa-regular fa-clock"></i></span>
                          6 august
                        </a>
                      </li>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span>
                            <i class="fa-solid fa-tag"></i>
                          </span>
                          web
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post">
                <div className="post-img">
                  <a href="#"><img src={require('./img/asset 12.jpeg')} alt="" srcset="" className='img-fluid' /></a>
                </div>
                <div className="post-content">
                  <a href="#"><h6>Style In Braind and Logo</h6></a>
                  <p>Lorem ipsum dolor sit amet, consec tetur elit. In maximus ligula semper.</p>
                  <a href="#"><span>Read more..</span></a>
                  <div className="inform">
                    <ul>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span><i class="fa-solid fa-user"></i></span>
                          admin
                        </a>
                      </li>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span><i class="fa-regular fa-clock"></i></span>
                          6 august
                        </a>
                      </li>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span>
                            <i class="fa-solid fa-tag"></i>
                          </span>
                          web
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post">
                <div className="post-img">
                  <a href="#"><img src={require('./img/asset 13.jpeg')} alt="" srcset="" className='img-fluid' /></a>
                </div>
                <div className="post-content">
                  <a href="#"><h6>Style In Braind and Logo</h6></a>
                  <p>Lorem ipsum dolor sit amet, consec tetur elit. In maximus ligula semper.</p>
                  <a href="#"><span>Read more..</span></a>
                  <div className="inform">
                    <ul>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span><i class="fa-solid fa-user"></i></span>
                          admin
                        </a>
                      </li>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span><i class="fa-regular fa-clock"></i></span>
                          6 august
                        </a>
                      </li>
                      <li className='list-unstyled'>
                        <a href="#">
                          <span>
                            <i class="fa-solid fa-tag"></i>
                          </span>
                          web
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* --------------------------------section10 End- */}

      {/* --------------------------------section11 start-- */}

      <section className='section_y'>
        <Container>
          <div>
            <h6 className='bg_text'>Contact us</h6>
            <h4 className='bg_text_h4'>get in thoch</h4>
          </div>
          <div className="col-md-12 text-center">
            <p className='col-md-offset-2 col-md-8 text_p mt-4'>Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ubique maluisset vel te, in quodsiUbique his dico vituperata ut. in quodsiUbique maluisset te, his dico vituperata ut.</p>
          </div>
          
          <div className="row text-center mt-5">
            <div className="col">
              <div className='social-icon1'>
              <i class="fa-solid fa-mobile iconphone "></i>
              <h6 className='pt-3'>phone</h6>
              <p>+20 01025178918</p>
              </div>
            </div>
            <div className="col">
              <div className='social-icon1'>
              <i class="fa-regular fa-envelope iconphone"></i>
              <h6 className='pt-3'>MAIL</h6>
              <p>Hisham beidea@gmail.com</p>
              </div>
            </div>
            <div className="col">
              <div className='social-icon1'>
              <i class="fa-solid fa-location-dot iconphone"></i>
              <h6 className='pt-3'>ADDRESS</h6>
              <p>21 Jumpe Street</p>
              </div>
            </div>
          </div>

          <div className="main-form">
              <div className="offset-md-2 col-md-8 offset-sm-1 col-sm-10">
                <form>
                <Row>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input placeholder='name*'></input>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className="form-group">
                      <input placeholder='email*'></input>
                  </div>
                  </div>
                </Row>
                <Row>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" placeholder='Subject*'/>
                    </div>
                  </div>
                </Row>
                <Row>
                <div className="col-md-12">
                    <div className="form-group">
                      <textarea name="message" placeholder='message*' cols="30" rows="4"></textarea>
                    </div>
                </div>
                <div className="col-sm-4">
                  <input type="submit" value="Send Message" />
                </div>
                </Row>
                </form>
              </div>
            </div>
        </Container>
      </section>
      {/* --------------------------------section11 End-- */}

      {/* --------------------------------section12 Start */}

          {/* <section className='sectino3'> 
                  <div className="row text-center">
                    <div className="container">
                      
                    </div>
                  </div>
          </section> */}

      {/* --------------------------------section12 End */}
      
      {/* ------------------------------- section13 Start- */}
            <footer className='section13 section13_y'>
              <Container>
              <div className="main-footer text-center">
                  <h4 className='footer_logo'><span>Be</span>idea.</h4>
              </div>
              <div className="footer-icon text-center mt-4">
                  <a href="#"><span><i class="fa-brands fa-facebook-f"></i></span></a>
                  <a href="#"><span><i class="fa-brands fa-twitter"></i></span></a>
                  <a href="#"><span><i class="fa-brands fa-linkedin-in"></i></span></a>
                  <a href="#"><span><i class="fa-brands fa-pinterest-p"></i></span></a>
                  <a href="#"><span><i class="fa-brands fa-instagram"></i></span></a>
              </div> 
              <div>
                <div className="row">
                  <div className="col">
                    <div className="sub-footer">
                        <p>Copy Right © By HishamM 2017 | All Rights Reserved.</p>

                    </div>
                  </div>
                </div>
              </div>
              </Container>
            </footer>
      {/* ------------------------------- section13 End- */}







    </>
  );
}

export default App;
