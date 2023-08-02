import { useState, useEffect } from "react";
import Link from "next/link";
import HeaderTopBarOne from "./headerTopBar/headerTopBarStyleOne";
import HeaderCartMenu from "./elements/headerCartMenu";
import MobileMenu from "./elements/mobileMennu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import clsx from "clsx";
import {
  FaPlus,
  FaAngleDoubleRight,
  FaCartArrowDown,
  FaRegUser,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

const HeaderStyleOne = function ({
  toggleClassNameInBody,
  SetToggleClassName,
}) {
  const [searchFormOpener, searchFormOpenerSet] = useState(false);

  const [cartMenuOpener, cartMenuOpenerSet] = useState(false);
  const [overlayBtn, SetoverlayBtn] = useState(false);
  const [offCanVastoggleBtn, SetOffCanVastoggleBtn] = useState(false);

  function offcanVasToggler() {
    SetToggleClassName(true);
    SetoverlayBtn(true);
    SetOffCanVastoggleBtn((offCanVastoggleBtn) => !offCanVastoggleBtn);
  }

  function searchForm() {
    searchFormOpenerSet((searchFormOpener) => !searchFormOpener);
  }

  function cartMenu() {
    SetoverlayBtn(true);
    cartMenuOpenerSet((cartMenuOpener) => !cartMenuOpener);
    SetToggleClassName(false);
  }

  function closeSideBar() {
    SetoverlayBtn(false);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
  }

  function overlay() {
    SetoverlayBtn((overlayBtn) => !overlayBtn);
    cartMenuOpenerSet(false);
    SetOffCanVastoggleBtn(false);
    SetToggleClassName(false);
  }

  const { cartItems } = useSelector((state) => state.cart);

  const [scroll, setScroll] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const header = document.querySelector(".ltn__header-sticky");
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <>
      <header className="ltn__header-area ltn__header-5">
        {/* <!-- ltn__header-top-area start --> */}
        <HeaderTopBarOne />
        {/* <!-- ltn__header-top-area end --> */}

        {/* <!-- ltn__header-middle-area start --> */}
        <div
          className={clsx(
            "ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white",
            scroll > headerHeight && "sticky-active"
          )}
        >
          <Container>
            <Row>
              <Col>
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <Link href="/">
                      <img src="/img/logo.png" alt="Logo" />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col className="header-menu-column">
                <div className="header-menu d-none d-xl-block">
                  <nav>
                    <div className="ltn__main-menu">
                      <ul>
                        <li className="menu-icon">
                          <Link href="/">
                            Home <FaPlus />
                          </Link>
                          <ul className="sub-menu menu-pages-img-show">
                            <li>
                              <Link href="index.html">Home Style 01</Link>
                              <img src="/img/home-demos/home-1.jpg" alt="#" />
                            </li>
                            <li>
                              <Link href="index-2.html">Home Style 02</Link>
                              <img src="/img/home-demos/home-2.jpg" alt="#" />
                            </li>
                            <li>
                              <Link href="index-3.html">Home Style 03</Link>
                              <img src="/img/home-demos/home-3.jpg" alt="#" />
                            </li>
                            <li>
                              <Link href="index-4.html">Home Style 04</Link>
                              <img src="/img/home-demos/home-4.jpg" alt="#" />
                            </li>
                            <li>
                              <Link href="index-5.html">
                                Home Style 05
                                <span className="menu-item-badge">video</span>
                              </Link>
                              <img src="/img/home-demos/home-5.jpg" alt="#" />
                            </li>
                            <li>
                              <Link href="index-6.html">Home Style 06</Link>
                              <img src="/img/home-demos/home-6.jpg" alt="#" />
                            </li>
                            <li>
                              <Link href="index-7.html">Home Style 07</Link>
                              <img src="/img/home-demos/home-7.jpg" alt="#" />
                            </li>
                            <li>
                              <Link href="index-8.html">Home Style 08</Link>
                              <img src="/img/home-demos/home-8.jpg" alt="#" />
                            </li>
                            <li>
                              <Link href="index-9.html">Home Style 09</Link>
                              <img src="/img/home-demos/home-9.jpg" alt="#" />
                            </li>
                            <li>
                              <Link href="index-10.html">
                                Home Style 10
                                <span className="menu-item-badge">Map</span>
                              </Link>
                              <img src="/img/home-demos/home-10.jpg" alt="#" />
                            </li>
                            <li>
                              <Link href="index-11.html">Home Style 11</Link>
                              <img src="/img/home-demos/home-11.jpg" alt="#" />
                            </li>
                          </ul>
                        </li>
                        <li className="menu-icon">
                          <Link href="#">
                            About <FaPlus />
                          </Link>
                          <ul>
                            <li>
                              <Link href="/about">About</Link>
                            </li>
                            <li>
                              <Link href="/service">Services</Link>
                            </li>
                            <li>
                              <Link href="/service-details">
                                Service Details
                              </Link>
                            </li>
                            <li>
                              <Link href="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                              <Link href="/portfolio-2">Portfolio - 02</Link>
                            </li>
                            <li>
                              <Link href="/portfolio-details">
                                Portfolio Details
                              </Link>
                            </li>
                            <li>
                              <Link href="/team">Team</Link>
                            </li>
                            <li>
                              <Link href="/team-details">Team Details</Link>
                            </li>
                            <li>
                              <Link href="/faq">FAQ</Link>
                            </li>
                            <li>
                              <Link href="/locations">
                                Google Map Locations
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-icon">
                          <Link href="#">
                            Shop <FaPlus />
                          </Link>
                          <ul>
                            <li>
                              <Link href="/shop">Shop</Link>
                            </li>
                            <li>
                              <Link href="/shop-grid">Shop Grid</Link>
                            </li>
                            <li>
                              <Link href="/shop/shop-left-sidebar">
                                Shop Left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link href="/shop/shop-right-sidebar">
                                Shop right sidebar
                              </Link>
                            </li>

                            <li>
                              <Link href="#">
                                Other Pages
                                <span className="float-end">
                                  <FaAngleDoubleRight />
                                </span>
                              </Link>
                              <ul>
                                <li>
                                  <Link href="/cart">Cart</Link>
                                </li>
                                <li>
                                  <Link href="/wishlist">Wishlist</Link>
                                </li>
                                <li>
                                  <Link href="/checkout">Checkout</Link>
                                </li>
                                <li>
                                  <Link href="/order-tracking">
                                    Order Tracking
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/my-account">My Account</Link>
                                </li>
                                <li>
                                  <Link href="/login">Sign in</Link>
                                </li>
                                <li>
                                  <Link href="/register">Register</Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-icon">
                          <Link href="#">
                            News <FaPlus />
                          </Link>
                          <ul>
                            <li>
                              <Link href="/blog">News</Link>
                            </li>
                            <li>
                              <Link href="/blog-grid">News Grid</Link>
                            </li>
                            <li>
                              <Link href="/blog-left-sidebar">
                                News Left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link href="/blog-right-sidebar">
                                News Right sidebar
                              </Link>
                            </li>
                            <li>
                              <Link href="/blog-details">News details</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-icon mega-menu-parent">
                          <Link href="#">
                            Pages <FaPlus />
                          </Link>
                          <ul className="mega-menu mega-menu column-4">
                            <li>
                              <Link href="#">Inner Pages</Link>
                              <ul>
                                <li>
                                  <Link href="/portfolio">Portfolio</Link>
                                </li>
                                <li>
                                  <Link href="/portfolio-2">
                                    Portfolio - 02
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/portfolio-details">
                                    Portfolio Details
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/team">Team</Link>
                                </li>
                                <li>
                                  <Link href="/team-details">Team Details</Link>
                                </li>
                                <li>
                                  <Link href="/faq">FAQ</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link href="#">Inner Pages</Link>
                              <ul>
                                <li>
                                  <Link href="/history">History</Link>
                                </li>
                                <li>
                                  <Link href="/add-listing">Add Listing</Link>
                                </li>
                                <li>
                                  <Link href="/locations">
                                    Google Map Locations
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/404">404</Link>
                                </li>
                                <li>
                                  <Link href="/contact">Contact</Link>
                                </li>
                                <li>
                                  <Link href="/coming-soon">Coming Soon</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link href="#">Shop Pages</Link>
                              <ul>
                                <li>
                                  <Link href="/shop">Shop</Link>
                                </li>
                                <li>
                                  <Link href="/shop-left-sidebar">
                                    Shop Left sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/shop-right-sidebar">
                                    Shop right sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/shop-grid">Shop Grid</Link>
                                </li>
                                <li>
                                  <Link href="/product-details">
                                    Shop details
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/cart">Cart</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link href="/shop">
                                <img
                                  src="/img/banner/menu-banner-1.jpg"
                                  alt="#"
                                />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </Col>
              <Col className="ltn__header-options ltn__header-options-2 mb-sm-20">
                {/* <!-- header-search-1 --> */}
                <div className="header-search-wrap">
                  <div
                    className={`header-search-1 ${
                      searchFormOpener ? "search-open" : ""
                    }`}
                  >
                    {/* search-open */}
                    <div className="search-icon">
                      <FaSearch
                        className="icon-search for-search-show"
                        onClick={searchForm}
                      />
                      <FaTimes
                        className="icon-cancel  for-search-close"
                        onClick={searchForm}
                      />
                    </div>
                  </div>
                  <div
                    className={`header-search-1-form ${
                      searchFormOpener ? "search-open" : ""
                    }`}
                  >
                    <form id="#" method="get" action="#">
                      <input
                        type="text"
                        name="search"
                        // value=""
                        placeholder="Search here..."
                      />
                      <button type="submit">
                        <span>
                          <FaSearch />
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
                {/* <!-- user-menu --> */}
                <div className="ltn__drop-menu user-menu">
                  <ul>
                    <li>
                      <Link href="#">
                        <FaRegUser />
                      </Link>
                      <ul>
                        <li>
                          <Link href="/login">Sign in</Link>
                        </li>
                        <li>
                          <Link href="/register">Register</Link>
                        </li>
                        <li>
                          <Link href="my-account">My Account</Link>
                        </li>
                        <li>
                          <Link href="/wishlist">Wishlist</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/* <!-- mini-cart --> */}
                <div className="mini-cart-icon">
                  <button
                    onClick={cartMenu}
                    className={`ltn__utilize-toggle ${
                      cartMenuOpener ? "close" : ""
                    }`}
                  >
                    <FaCartArrowDown />
                    {/* <sup>6</sup> */}

                    {cartItems.length > 0 ? (
                      <sup>{cartItems.length}</sup>
                    ) : (
                      <sup>0</sup>
                    )}
                  </button>
                </div>
                {/* <!-- mini-cart --> */}
                {/* <!-- Mobile Menu Button --> */}
                <div className="mobile-menu-toggle d-xl-none">
                  <button
                    onClick={offcanVasToggler}
                    className={`ltn__utilize-toggle ${
                      offCanVastoggleBtn ? "close" : ""
                    }`}
                  >
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        id="top"
                      ></path>
                      <path d="M300,320 L540,320" id="middle"></path>
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                      ></path>
                    </svg>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <!-- ltn__header-middle-area end --> */}
      </header>

      {/* <!-- Utilize Cart Menu Start --> */}

      <HeaderCartMenu
        cartMenu={cartMenu}
        cartMenuOpener={cartMenuOpener}
        closeSideBar={closeSideBar}
      />

      {/* <!-- Utilize Cart Menu End --> */}

      {/* <!-- Utilize Mobile Menu Start --> */}
      <MobileMenu
        offCanVastoggleBtn={offCanVastoggleBtn}
        offcanVasToggler={offcanVasToggler}
        closeSideBar={closeSideBar}
      />

      {/* <!-- Utilize Mobile Menu End --> */}
      <div
        className="ltn__utilize-overlay"
        style={{
          display: overlayBtn ? "block" : "none",
          opacity: overlayBtn ? "1" : "0",
        }}
        onClick={overlay}
      ></div>
    </>
  );
};

export default HeaderStyleOne;
