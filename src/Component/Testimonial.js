import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div>
            <br/><br/>
             {/* testimonial secation start */}
        <h1 className="testText">Testimonial</h1>
        <hr className="testline"></hr>
        <section className="tester_new text-center">
          <h2 className="mt-5">What other say for us</h2>
          <hr />
          <h5 className="mb-5">Our team created best opportunities for your business.</h5>
          <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-lg-2" />
                    <div className="col-lg-8">
                      <p>"The teaching, in my opinion, is the best that anyone can hope for. Sekolah High School staff provide an environment in which students are able to reach their full potential. As well as this. I felt constantly challenged to push myself to exceed what is expected. I have no doubt that the persion I become is due to my time spent here and that the last six years have been the best of my life."</p>
                      <hr />
                      <h5>Cynthia Nelson</h5>
                      <p>Student of scince</p>
                    </div>
                    <div className="col-lg-2" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-2" />
                    <div className="col-lg-8">
                      <p>"The teaching, in my opinion, is the best that anyone can hope for. Sekolah High School staff provide an environment in which students are able to reach their full potential. As well as this. I felt constantly challenged to push myself to exceed what is expected. I have no doubt that the persion I become is due to my time spent here and that the last six years have been the best of my life."</p>
                      <hr />
                      <h5>Cynthia Nelson</h5>
                      <p>Student of scince</p>
                    </div>
                    <div className="col-lg-2" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-2" />
                    <div className="col-lg-8">
                      <p>"The teaching, in my opinion, is the best that anyone can hope for. Sekolah High School staff provide an environment in which students are able to reach their full potential. As well as this. I felt constantly challenged to push myself to exceed what is expected. I have no doubt that the persion I become is due to my time spent here and that the last six years have been the best of my life."</p>
                      <hr />
                      <h5>Cynthia Nelson</h5>
                      <p>Student of scince</p>
                    </div>
                    <div className="col-lg-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        </div>
    )
}

export default Testimonial
