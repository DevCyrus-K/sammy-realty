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
              <Link href="/shop/right-sidebar">
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
      </aside>
    </>
  );
};

export default SideBar;
