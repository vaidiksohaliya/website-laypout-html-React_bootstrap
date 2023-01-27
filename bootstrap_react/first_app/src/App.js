import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './first_app.css'

import { Container, Row, Col } from 'react-bootstrap'


function App() {
  return (
    <>

      {/* ---------------------------start header---------------------------- */}
      
      <header>
        <div className='bg-info'>
          <div className="container">
            <div className='row d-flex justify-content-between'>
              <div className='col-auto d-none d-md-block'>
                <ul className='m-0 p-0 list-unstyled d-flex main_menu1 '>
                  <li ><a href="#">abc@email.com</a></li>
                  <li className='ms-3 d-none d-lg-block'><a href="#">location</a></li>
                </ul>
              </div>
              <div className="col-auto">icon</div>
            </div>
          </div>
        </div>
      </header>
  
      {/* --------------------------------End header------------------------ */}

      {/* -----------------------------start navigation----------------- */}
      
      
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-auto">
                <a href="#" className='text-success'>
                  logo
                </a>
              </div>
              <div className="col-auto main_menu d-lg-block  d-xl-block d-md-none d-sm-none d-xs-none">
                <ul className='list-unstyled d-flex'>
                  <li> <a href="#">home</a></li>
                  <li> <a href="#">product</a></li>
                  <li> <a href="#">service</a></li>
                  <li> <a href="#">about</a></li>
                  <li> <a href="#">contact</a></li>

                </ul>
              </div>
              <div className='col-auto d-lg-none'>
                toogle
              </div>
            </div>
          </div>

      {/* -----------------------------End navigation----------------- */}



      <Container>
        <div className="display-5 text-center">shopping</div>
        <Row className='mt-3 g-3 justify-content-center' sm={1} md={2} lg={3} xl={4} xs={1}>
          <Col  >
            <div className="box1">
              <img src='https://images.hindustantimes.com/img/2022/07/13/1600x900/Collage_Maker-13-Jul-2022-01.32-PM_1657699354199_1657699399196_1657699399196.jpg' className='img-fluid rounded-3'></img>
              <h5 className='p-2 text-center'>moblie</h5>

            </div>
          </Col>
          <Col >
            <div className="box1">
              <img src='https://www.cnet.com/a/img/resize/cdf928eebef9c1858767b32466f6135238c7c749/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=675&width=1200' className='img-fluid rounded-3'></img>
              <h5 className='p-2 text-center'>laptop</h5>

            </div>
          </Col>
          <Col >
            <div className="box1">
              <img src='https://www.financialexpress.com/wp-content/uploads/2022/07/sony-main.jpg' className='img-fluid rounded-3'></img>
              <h5 className='p-2 text-center'>televison</h5>

            </div>
          </Col>
          <Col >
            <div className="box1">
              <img src='https://www.xda-developers.com/files/2021/10/2021-10-18_18-14-42.439-1024x576.jpeg' className='img-fluid rounded-3'></img>
              <h5 className='p-2 text-center'>airpode</h5>

            </div>
          </Col>
          
       {/* </Row> */}
       {/* <Row className='mt-4 g-3 justify-content-center' xs={1} sm={1} md={2} lg={3} xl={4}> */}
        <Col>
          <div className="box1">
            <img src="https://uncrate.com/p/2021/03/satan-nikes.jpg"  className='img-fluid' alt="" />
            <h5 className='p-2'>shoes</h5>
            
          </div>
        </Col>
        <Col>
          <div className="box1">
            <img src="https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682" className='img-fluid' alt="" srcset="" />
            <h5 className='p-2'>sport shoes</h5>
          </div>
        </Col>
        <Col>
          <div className="box1">
            <img src="https://starwarsblog.starwars.com/wp-content/uploads/2022/07/dc-shoes-boba-fett-collection-3.jpg" className='img-fluid' alt="" srcset="" />
            <h5 className='p-2'>best shoes</h5>
          </div>
        </Col>
        <Col>
          <div className="box1">
            <img src="https://www.pinkvilla.com/files/sneakers_for_men_7.jpg" className='img-fluid' alt="" srcset="" />
            <h5 className='p-2'>best shoes</h5>
          </div>
        </Col> 
        
        </Row>
        <Row className='mt-5 g-3' sm={1} md={2} lg={2} xl={2}>
          <Col>
              <div>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/2fb1fe124151509.60fe7e3f9ba1d.gif" className='img-fluid rounded-5' alt="" srcset="" />
              </div>
          </Col>
          <Col>
                <div>
                    <h1>shopping</h1>
                    <p className='fw-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, voluptatum assumenda ab qui molestiae quis enim mollitia quos deserunt doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt temporibus, blanditiis delectus ipsa ratione aperiam hic inventore excepturi amet et vel laborum ex quia, quae culpa fugiat, dicta placeat perferendis?</p>
                </div>
          </Col>
        </Row>
       

      </Container>

      <Container>
        <Row className='mt-5 g-5 p-0' >
          <Col>
                <div className='box2'>
                      <img src="https://media.gq-magazine.co.uk/photos/5ecce82b657c42308f35b557/master/w_1600%2Cc_limit/CMS_GQxAsket4.jpg" className='img-fluid' alt="" srcset="" />
                </div>
          </Col>
          <Col>
                <div className='box2'>
                      <img src="https://images.herzindagi.info/image/2020/Apr/Electronics.jpg" className='img-fluid' alt="" srcset="" />
                </div>
          </Col>
          <Col>
                <div className='box2'>
                    <img src="https://img.freepik.com/premium-vector/3d-books-icon-web-design-isolated-education-online-class-concept-eps-10-vector_112554-795.jpg?w=2000" alt="" srcset="" className='img-fluid' />
                </div>
          </Col>
          <Col>
                <div className='box2'>
                <img src="https://www.allcookwarefind.com/images/specialty/stackable-cookware/greenpan-levels-480.jpg" alt="" srcset="" className='img-fluid' />

                </div>
          </Col>
          <Col>
                <div className='box2'>
                <img src="https://pyxis.nymag.com/v1/imgs/d58/e5c/a6082cb53c65c22183fd05daeb40b420a9.2x.rsquare.w600.jpg" alt="" srcset="" className='img-fluid' />

                </div>
          </Col>
          <Col>
                <div className='box2'>
                <img src="https://assets.teenvogue.com/photos/62cd79de1592cc9e9b94b1f6/master/pass/GettyImages-487770577.jpg" alt="" srcset="" className='img-fluid' />

                </div>
          </Col>
          <Col>
                <div className='box2'>
                <img src="https://assets.architecturaldigest.in/photos/600839aae6e1f64740188fce/16:9/w_2560%2Cc_limit/Bungalow-in-jaipur_1-1366x768.jpg" alt="" srcset="" className='img-fluid' />

                </div>
          </Col>
          <Col>
                <div className='box2'>
                <img src="https://m.media-amazon.com/images/I/81xkbcTfyaL._SL1500_.jpg" alt="" srcset="" className='img-fluid' />

                </div>
          </Col>
        </Row>
      </Container>

      
    </>
  );
}

export default App;
