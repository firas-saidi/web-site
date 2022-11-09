import React from 'react'
import CardsI from './CardsI'

function SingleShop() {
  return (
    
    <>
  <div
    className="modal fade bg-white"
    id="templatemo_search"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="w-100 pt-1 mb-5 text-right">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <form
        action=""
        method="get"
        className="modal-content modal-body border-0 p-0"
      >
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            id="inputModalSearch"
            name="q"
            placeholder="Search ..."
          />
          <button
            type="submit"
            className="input-group-text bg-success text-light"
          >
            <i className="fa fa-fw fa-search text-white" />
          </button>
        </div>
      </form>
    </div>
  </div>
  {/* Open Content */}
  <section className="bg-light">
    <div className="container pb-5">
      <div className="row">
        <div className="col-lg-5 mt-5">
          <div className="card mb-3">
            <img
              className="card-img img-fluid"
              src="assets/img/product_single_10.jpg"
              alt="Card  cap"
              id="product-detail"
            />
          </div>
          <div className="row">
            {/*Start Controls*/}
            <div className="col-1 align-self-center">
              <a href="#multi-item-example" role="button" data-bs-slide="prev">
                <i className="text-dark fas fa-chevron-left" />
                <span className="sr-only">Previous</span>
              </a>
            </div>
            {/*End Controls*/}
            {/*Start Carousel Wrapper*/}
            <div
              id="multi-item-example"
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
              <a href="#multi-item-example" role="button" data-bs-slide="next">
                <i className="text-dark fas fa-chevron-right" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/*End Controls*/}
          </div>
        </div>
        {/* col end */}
        <div className="col-lg-7 mt-5">
          <div className="card">
            <div className="card-body">
              <h1 className="h2">Active Wear</h1>
              <p className="h3 py-2">$25.00</p>
              <p className="py-2">
                <i className="fa fa-star text-warning" />
                <i className="fa fa-star text-warning" />
                <i className="fa fa-star text-warning" />
                <i className="fa fa-star text-warning" />
                <i className="fa fa-star text-secondary" />
                <span className="list-inline-item text-dark">
                  Rating 4.8 | 36 Comments
                </span>
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <h6>Brand:</h6>
                </li>
                <li className="list-inline-item">
                  <p className="text-muted">
                    <strong>Easy Wear</strong>
                  </p>
                </li>
              </ul>
              <h6>Description:</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temp incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse. Donec condimentum elementum convallis. Nunc
                sed orci a diam ultrices aliquet interdum quis nulla.
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <h6>Avaliable Color :</h6>
                </li>
                <li className="list-inline-item">
                  <p className="text-muted">
                    <strong>White / Black</strong>
                  </p>
                </li>
              </ul>
              <h6>Specification:</h6>
              <ul className="list-unstyled pb-3">
                <li>Lorem ipsum dolor sit</li>
                <li>Amet, consectetur</li>
                <li>Adipiscing elit,set</li>
                <li>Duis aute irure</li>
                <li>Ut enim ad minim</li>
                <li>Dolore magna aliqua</li>
                <li>Excepteur sint</li>
              </ul>
              <form action="" method="GET">
                <input
                  type="hidden"
                  name="product-title"
                  defaultValue="Activewear"
                />
                <div className="row">
                  <div className="col-auto">
                    <ul className="list-inline pb-3">
                      <li className="list-inline-item">
                        Size :
                        <input
                          type="hidden"
                          name="product-size"
                          id="product-size"
                          defaultValue="S"
                        />
                      </li>
                      <li className="list-inline-item">
                        <span className="btn btn-success btn-size">S</span>
                      </li>
                      <li className="list-inline-item">
                        <span className="btn btn-success btn-size">M</span>
                      </li>
                      <li className="list-inline-item">
                        <span className="btn btn-success btn-size">L</span>
                      </li>
                      <li className="list-inline-item">
                        <span className="btn btn-success btn-size">XL</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-auto">
                    <ul className="list-inline pb-3">
                      <li className="list-inline-item text-right">
                        Quantity
                        <input
                          type="hidden"
                          name="product-quanity"
                          id="product-quanity"
                          defaultValue={1}
                        />
                      </li>
                      <li className="list-inline-item">
                        <span className="btn btn-success" id="btn-minus">
                          -
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span className="badge bg-secondary" id="var-value">
                          1
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span className="btn btn-success" id="btn-plus">
                          +
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col d-grid">
                    <button
                      type="submit"
                      className="btn btn-success btn-lg"
                      name="submit"
                      value="buy"
                    >
                      Buy
                    </button>
                  </div>
                  <div className="col d-grid">
                    <button
                      type="submit"
                      className="btn btn-success btn-lg"
                      name="submit"
                      value="addtocard"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Close Content */}
  {/* Start Article */}
  <section className="py-5 fx">
    <div className="container">
      <div className="row text-left p-2 pb-3">
        <h4>Related Products</h4>
        
      </div>
      {/*Start Carousel Wrapper*/}
     
 <CardsI/>

    </div>
  </section>
</>
  )
}

export default SingleShop
