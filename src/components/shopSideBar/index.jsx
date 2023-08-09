import Link from "next/link";

const SideBar = ({ products, getSortParams }) => {
  return (
    <>
      <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
        <h3 className="mb-10">Advance Information</h3>
        <label className="mb-30">
          <small>About 9,620 results (0.62 seconds) </small>
        </label>
        {/* <!-- Advance Information widget --> */}
        <div className="widget ltn__menu-widget">
          <h4 className="ltn__widget-title">Property Type</h4>
          <ul>
            <li>
              <Link href="shop-right-sidebar.html">
                <label className="checkbox-item">
                  House
                  <input
                    onClick={(e) => {
                      getSortParams("category", category.name);
                      setActiveSort(e);
                    }}
                    type="checkbox"
                    defaultChecked="checked"
                  />
                  <span className="checkmark"></span>
                </label>
                <span className="categorey-no">3,924</span>
              </Link>
            </li>
            <li>
              <label className="checkbox-item">
                Single Family
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">3,610</span>
            </li>
            <li>
              <label className="checkbox-item">
                Apartment
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">2,912</span>
            </li>
            <li>
              <label className="checkbox-item">
                Office Villa
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">2,687</span>
            </li>
            <li>
              <label className="checkbox-item">
                Luxary Home
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">1,853</span>
            </li>
            <li>
              <label className="checkbox-item">
                Studio
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">893</span>
            </li>
          </ul>
          <hr />
          <h4 className="ltn__widget-title">Amenities</h4>
          <ul>
            <li>
              <label className="checkbox-item">
                Dishwasher
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                  defaultChecked="checked"
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">3,924</span>
            </li>
            <li>
              <label className="checkbox-item">
                Floor Coverings
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">3,610</span>
            </li>
            <li>
              <label className="checkbox-item">
                Internet
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">2,912</span>
            </li>
            <li>
              <label className="checkbox-item">
                Build Wardrobes
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">2,687</span>
            </li>
            <li>
              <label className="checkbox-item">
                Supermarket
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">1,853</span>
            </li>
            <li>
              <label className="checkbox-item">
                Kids Zone
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">893</span>
            </li>
          </ul>
          <hr />
          <h4 className="ltn__widget-title">Price Renge</h4>
          <ul>
            <li>
              <label className="checkbox-item">
                Low Budget
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">$5,000 - $10,000</span>
            </li>
            <li>
              <label className="checkbox-item">
                Medium
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                  defaultChecked="checked"
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">$10,000 - $30,000</span>
            </li>
            <li>
              <label className="checkbox-item">
                High Budget
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">$30,000 Up</span>
            </li>
          </ul>
          <hr />
          {/* <!-- Price Filter Widget --> */}
          <div className="widget--- ltn__price-filter-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border---">
              Filter by price
            </h4>
            <div className="price_filter">
              <div className="price_slider_amount">
                <input type="submit" value="Your range:" />
                <input
                  type="text"
                  className="amount"
                  name="price"
                  placeholder="Add Your Price"
                />
              </div>
              <div className="slider-range"></div>
            </div>
          </div>
          <hr />
          <h4 className="ltn__widget-title">Bed/bath</h4>
          <ul>
            <li>
              <label className="checkbox-item">
                Single
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                  defaultChecked="checked"
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">3,924</span>
            </li>
            <li>
              <label className="checkbox-item">
                Double
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">3,610</span>
            </li>
            <li>
              <label className="checkbox-item">
                Up To 3
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">2,912</span>
            </li>
            <li>
              <label className="checkbox-item">
                Up To 5
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">2,687</span>
            </li>
          </ul>
          <hr />
          <h4 className="ltn__widget-title">Catagory</h4>
          <ul>
            <li>
              <label className="checkbox-item">
                Buying
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                  defaultChecked="checked"
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">3,924</span>
            </li>
            <li>
              <label className="checkbox-item">
                Renting
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">3,610</span>
            </li>
            <li>
              <label className="checkbox-item">
                Selling
                <input
                  type="checkbox"
                  onClick={(e) => {
                    getSortParams("category", category.name);
                    setActiveSort(e);
                  }}
                />
                <span className="checkmark"></span>
              </label>
              <span className="categorey-no">2,912</span>
            </li>
          </ul>
        </div>
        {/* <!-- Category Widget --> */}
        <div className="widget ltn__menu-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Product categories
          </h4>
          <ul>
            <li>
              <Link href="#">
                Body{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Interior{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Lights{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Parts{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Tires{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Uncategorized{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                Wheel{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- Price Filter Widget --> */}
        <div className="widget ltn__price-filter-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Filter by price
          </h4>
          <div className="price_filter">
            <div className="price_slider_amount">
              <input type="submit" value="Your range:" />
              <input
                type="text"
                className="amount"
                name="price"
                placeholder="Add Your Price"
              />
            </div>
            <div className="slider-range"></div>
          </div>
        </div>
        {/* <!-- Top Rated Product Widget --> */}
        <div className="widget ltn__top-rated-product-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Top Rated Product
          </h4>
          <ul>
            <li>
              <div className="top-rated-product-item clearfix">
                <div className="top-rated-product-img">
                  <Link href="product-details">
                    <img src="img/product/1.png" alt="#" />
                  </Link>
                </div>
                <div className="top-rated-product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h6>
                    <Link href="product-details">Mixel Solid Seat Cover</Link>
                  </h6>
                  <div className="product-price">
                    <span>$49.00</span>
                    <del>$65.00</del>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="top-rated-product-item clearfix">
                <div className="top-rated-product-img">
                  <Link href="product-details">
                    <img src="img/product/2.png" alt="#" />
                  </Link>
                </div>
                <div className="top-rated-product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h6>
                    <Link href="product-details">3 Rooms Manhattan</Link>
                  </h6>
                  <div className="product-price">
                    <span>$49.00</span>
                    <del>$65.00</del>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="top-rated-product-item clearfix">
                <div className="top-rated-product-img">
                  <Link href="product-details">
                    <img src="img/product/3.png" alt="#" />
                  </Link>
                </div>
                <div className="top-rated-product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-star-half-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="far fa-star"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h6>
                    <Link href="product-details">Coil Spring Conversion</Link>
                  </h6>
                  <div className="product-price">
                    <span>$49.00</span>
                    <del>$65.00</del>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* <!-- Search Widget --> */}
        <div className="widget ltn__search-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Search Objects
          </h4>
          <form action="#">
            <input
              type="text"
              name="search"
              placeholder="Search your keyword..."
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        {/* <!-- Tagcloud Widget --> */}
        <div className="widget ltn__tagcloud-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Popular Tags
          </h4>
          <ul>
            <li>
              <Link href="#">Popular</Link>
            </li>
            <li>
              <Link href="#">desgin</Link>
            </li>
            <li>
              <Link href="#">ux</Link>
            </li>
            <li>
              <Link href="#">usability</Link>
            </li>
            <li>
              <Link href="#">develop</Link>
            </li>
            <li>
              <Link href="#">icon</Link>
            </li>
            <li>
              <Link href="#">Car</Link>
            </li>
            <li>
              <Link href="#">Service</Link>
            </li>
            <li>
              <Link href="#">Repairs</Link>
            </li>
            <li>
              <Link href="#">Auto Parts</Link>
            </li>
            <li>
              <Link href="#">Oil</Link>
            </li>
            <li>
              <Link href="#">Dealer</Link>
            </li>
            <li>
              <Link href="#">Oil Change</Link>
            </li>
            <li>
              <Link href="#">Body Color</Link>
            </li>
          </ul>
        </div>
        {/* <!-- Size Widget --> */}
        <div className="widget ltn__tagcloud-widget ltn__size-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Product Size
          </h4>
          <ul>
            <li>
              <Link href="#">S</Link>
            </li>
            <li>
              <Link href="#">M</Link>
            </li>
            <li>
              <Link href="#">L</Link>
            </li>
            <li>
              <Link href="#">XL</Link>
            </li>
            <li>
              <Link href="#">XXL</Link>
            </li>
          </ul>
        </div>
        {/* <!-- Color Widget --> */}
        <div className="widget ltn__color-widget d-none">
          <h4 className="ltn__widget-title ltn__widget-title-border">
            Product Color
          </h4>
          <ul>
            <li className="black">
              <Link href="#"></Link>
            </li>
            <li className="white">
              <Link href="#"></Link>
            </li>
            <li className="red">
              <Link href="#"></Link>
            </li>
            <li className="silver">
              <Link href="#"></Link>
            </li>
            <li className="gray">
              <Link href="#"></Link>
            </li>
            <li className="maroon">
              <Link href="#"></Link>
            </li>
            <li className="yellow">
              <Link href="#"></Link>
            </li>
            <li className="olive">
              <Link href="#"></Link>
            </li>
            <li className="lime">
              <Link href="#"></Link>
            </li>
            <li className="green">
              <Link href="#"></Link>
            </li>
            <li className="aqua">
              <Link href="#"></Link>
            </li>
            <li className="teal">
              <Link href="#"></Link>
            </li>
            <li className="blue">
              <Link href="#"></Link>
            </li>
            <li className="navy">
              <Link href="#"></Link>
            </li>
            <li className="fuchsia">
              <Link href="#"></Link>
            </li>
            <li className="purple">
              <Link href="#"></Link>
            </li>
            <li className="pink">
              <Link href="#"></Link>
            </li>
            <li className="nude">
              <Link href="#"></Link>
            </li>
            <li className="orange">
              <Link href="#"></Link>
            </li>

            <li>
              <Link href="#" className="orange"></Link>
            </li>
            <li>
              <Link href="#" className="orange"></Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
