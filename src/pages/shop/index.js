import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Paginator from "react-hooks-paginator";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import { getSortedProducts, productSlug } from "@/lib/product";
import { LayoutOne } from "@/layouts";
import { FaThLarge, FaThList, FaSearch } from "react-icons/fa";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import SideBar from "@/components/shopSideBar";
import RelatedProduct from "@/components/product/related-product";
import ProductList from "@/components/product/list";
import Select from "react-select";

function Shop() {
  const { products } = useSelector((state) => state.product);
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);

  const pageLimit = 12;

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);

    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );

    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);

    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);


  const areaOptions = [
    { value: "Default Sorting", label: "Default Sorting" },
    { value: "Sort by popularity", label: "Sort by popularity" },
    { value: "Sort by new arrivals", label: "Sort by new arrivals" },
    { value: "Sort by price: low to high", label: "Sort by price: low to high" },
    { value: "Sort by price: high to low", label: "Sort by price: high to low" },
   
  ];

  const propertyOptions = [
    { value: "Per Page: 12", label: "Per Page: 12" },
    { value: "Per Page: 21", label: "Per Page: 21" },
    { value: "Per Page: 13", label: "Per Page: 13" },
    { value: "Per Page: 15", label: "Per Page: 15" },
    { value: "Per Page: 30", label: "Per Page: 30" },
  ];


  return (
    <LayoutOne>
      {/* <!-- BREADCRUMB AREA START --> */}

      <ShopBreadCrumb title="Shop" sectionPace="" currentSlug="Shop" />
      {/* <!-- BREADCRUMB AREA END -->
    
    <!-- PRODUCT DETAILS AREA START --> */}
      <div className="ltn__product-area ltn__product-gutter mb-120">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <Tab.Container defaultActiveKey="first">
                <div className="ltn__shop-options">
                  <ul className="justify-content-start">
                    <li>
                      <div className="ltn__grid-list-tab-menu">
                        <Nav className="nav">
                          <Nav.Link eventKey="first">
                            <FaThLarge />
                          </Nav.Link>
                          <Nav.Link eventKey="second">
                            <FaThList />
                          </Nav.Link>
                        </Nav>
                      </div>
                    </li>
                    
                    <li>
                      <div className="short-by text-center">
                        <Select
                              className="nice-select"
                              options={areaOptions}
                              defaultValue={[
                                { value: "Default Sorting", label: "Default Sorting" },
                              ]}
                            />
                      </div>
                    </li>
                    <li>
                      <div className="short-by text-center">
                        <Select
                              className="nice-select"
                              options={areaOptions}
                              defaultValue={[
                                { value: "Per Page: 12", label: "Per Page: 12" },
                              ]}
                            />
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="ltn__search-widget mb-30">
                  <form action="#">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search your keyword..."
                    />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                      <Row>
                        {currentData.map((product, key) => {
                          const slug = productSlug(product.title);
                          return (
                            <Col key={key} xs={12} sm={6}>
                              <RelatedProduct
                                slug={slug}
                                baseUrl="shop"
                                productData={product}
                              />
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="ltn__product-tab-content-inner ltn__product-list-view">
                      <Row>
                        {currentData.map((product, key) => {
                          const slug = productSlug(product.title);
                          return (
                            <Col key={key} xs={12}>
                              <ProductList slug={slug} baseUrl="shop" productData={product} />
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

              <div className="ltn__pagination-area text-center">
                <Paginator
                  totalRecords={sortedProducts.length}
                  pageLimit={pageLimit}
                  pageNeighbours={1}
                  setOffset={setOffset}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageContainerClass="ltn__pagination"
                  pagePrevText="«"
                  pageNextText="»"
                />
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <SideBar />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- PRODUCT DETAILS AREA END -->

    <!-- CALL TO ACTION START (call-to-action-6) --> */}
      <div
        className="ltn__call-to-action-area call-to-action-6 before-bg-bottom"
        data-bs-bg="img/1.jpg--"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                <div className="coll-to-info text-color-white">
                  <h1>Looking for a dream home?</h1>
                  <p>We can help you realize your dream of a new home</p>
                </div>
                <div className="btn-wrapper">
                  <a className="btn btn-effect-3 btn-white" href="contact.html">
                    Explore Properties <i className="icon-next"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CALL TO ACTION END --> */}
    </LayoutOne>
  );
}

export default Shop;
