import React from 'react'

function CardsI() {
  return (

       <div className="row">
            {/*Start Controls*/}
            <div className="col-1 align-self-center">
              <a href="#multi-item-example2" role="button" data-bs-slide="prev">
                <i className="text-dark fas fa-chevron-left" />
                <span className="sr-only">Previous</span>
              </a>
            </div>
            {/*End Controls*/}
            {/*Start Carousel Wrapper*/}
            <div
              id="multi-item-example2"
              className="col-10 carousel slide carousel-multi-item"
              data-bs-ride="carousel"
            >
              {/*Start Slides*/}
              <div className="carousel-inner product-links-wap" role="listbox">
                {/*First slide*/}
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-4">
                      <a href="#/">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_01.jpg"
                          alt="Product  1"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#/">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_02.jpg"
                          alt="Product  2"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#/">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_03.jpg"
                          alt="Product  3"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/*/.First slide*/}
                {/*Second slide*/}
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-4">
                      <a href="#/">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_04.jpg"
                          alt="Product  4"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#/">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_05.jpg"
                          alt="Product  5"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#/">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_06.jpg"
                          alt="Product  6"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/*/.Second slide*/}
                {/*Third slide*/}
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-4">
                      <a href="#/">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_07.jpg"
                          alt="Product  7"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#/">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_08.jpg"
                          alt="Product  8"
                        />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="#/">
                        <img
                          className="card-img img-fluid"
                          src="assets/img/product_single_09.jpg"
                          alt="Product  9"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/*/.Third slide*/}
              </div>
              {/*End Slides*/}
            </div>
            {/*End Carousel Wrapper*/}
            {/*Start Controls*/}
            <div className="col-1 align-self-center">
              <a href="#multi-item-example2" role="button" data-bs-slide="next">
                <i className="text-dark fas fa-chevron-right" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/*End Controls*/}
          </div>

  )
}

export default CardsI