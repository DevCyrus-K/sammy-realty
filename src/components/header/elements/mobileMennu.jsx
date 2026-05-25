import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaSearch,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import {
  getSiblings,
  getClosest,
  slideUp,
  slideToggle,
} from "@/lib/product";

const MobileMenu = function ({ offCanVastoggleBtn, closeSideBar }) {
  const onClickHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    parentEl.classList.toggle("active");
    if (
      parentEl?.classList.contains("menu-expand") ||
      target.classList.contains("menu-expand")
    ) {
      const element = target.classList.contains("icon") ? parentEl : target;
      const parent = getClosest(element, "li");
      const childNodes = parent.childNodes;
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        sibling.classList.remove("active");
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === "UL") {
            slideUp(child, 1000);
          }
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideToggle(child, 1000);
        }
      });
    }
  };

  return (
    <>
      <div
        id="ltn__utilize-mobile-menu"
        className={`ltn__utilize ltn__utilize-mobile-menu   ${
          offCanVastoggleBtn ? "ltn__utilize-open" : ""
        }`}
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <Link href="/">
                <img src="/img/main-logo.png" alt="Sammy Realty" />
              </Link>
            </div>
            <button onClick={closeSideBar} className="ltn__utilize-close">
              ×
            </button>
          </div>
          <div className="ltn__utilize-menu-search-form">
            <form action="#">
              <input type="text" placeholder="Search property, area, or service" />
              <button>
                <FaSearch />
              </button>
            </form>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">Company</Link>
                <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
                <ul className="sub-menu">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/testimonials">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/service">Services</Link>
                <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
                <ul className="sub-menu">
                  <li>
                    <Link href="/service/property-sales">Property Sales</Link>
                  </li>
                  <li>
                    <Link href="/service/property-management">Property Management</Link>
                  </li>
                  <li>
                    <Link href="/service/real-estate-consulting">Real Estate Consulting</Link>
                  </li>
                  <li>
                    <Link href="/service/rental-and-shortlets">Rental & Shortlets</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/properties/all">Properties</Link>
                <span
                  className="menu-expand"
                  onClick={onClickHandler}
                  aria-hidden="true"
                ></span>
                <ul className="sub-menu">
                  <li>
                    <Link href="/properties/all">All Properties</Link>
                  </li>
                  <li>
                    <Link href="/properties/for-sale">For Sale</Link>
                  </li>
                  <li>
                    <Link href="/properties/for-rent">For Rent</Link>
                  </li>
                  <li>
                    <Link href="/lands/for-sale">Lands</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/add-listing">Sell Your Property</Link>
              </li>
            </ul>
          </div>
          <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
            <ul>
              <li>
                <Link href="tel:+2348148414913" title="Call Sammy Realty">
                  <span className="utilize-btn-icon">
                    <FaPhoneAlt />
                  </span>
                  Call Sammy Realty
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/2348148414913" title="WhatsApp Sammy Realty">
                  <span className="utilize-btn-icon">
                    <FaWhatsapp />
                  </span>
                  WhatsApp
                </Link>
              </li>
            </ul>
          </div>
          <div className="ltn__social-media-2">
            <ul>
              <li>
                <Link href="/contact">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
