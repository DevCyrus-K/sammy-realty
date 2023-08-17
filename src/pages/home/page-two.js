import { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import { FaPlay, FaHome, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import path from "path";
import fs from "fs/promises";
import { LayoutOne } from "@/layouts";
import { Col, Container, Row } from "react-bootstrap";
import HeroSectionStyleTwo from "@/components/hero/styleTwo";

function HomeVersionTwo(props) {
  const { data } = props;

  const upCommingSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [productref, setproductref] = useState(null);
  const productsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [testiMonialref, settestiMonialref] = useState(null);
  const testiMonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const [blog, setBlog] = useState(null);
  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <LayoutOne>
      {/* <!-- SLIDER AREA START (slider-11) --> */}
      <div className="ltn__slider-area ltn__slider-11 section-bg-1">
        <HeroSectionStyleTwo data={data} />
      </div>
      {/* <!-- SLIDER AREA END -->

    <!-- ABOUT US AREA START --> */}
      <div className="ltn__about-us-area pt-115 pb-100 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src="../img/others/11.png" alt="About Us Image" />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3 d-none">
                  <div className="ltn__video-img ltn__animation-pulse1">
                    <img src="../img/others/8.png" alt="video popup bg image" />
                    <a
                      className="ltn__video-icon-2 ltn__video-icon-2-border---"
                      href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0"
                      data-rel="lightcase:myCollection"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-30">
                  <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">
                    Dream Living Spaces Setting New Build
                  </h1>
                  <p>
                    Over 39,000 people work for us in more than 70 countries all
                    over the This breadth of global coverage, combined with
                    specialist services
                  </p>
                </div>
                <div className="ltn__feature-item ltn__feature-item-3">
                  <div className="ltn__feature-icon">
                    <span>
                      <i className="flaticon-house-4"></i>
                    </span>
                  </div>
                  <div className="ltn__feature-info">
                    <h4>
                      <a href="service-details.html">The Perfect Residency</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic do
                      eiusmod tempor incididunt ut labore et
                    </p>
                  </div>
                </div>
                <div className="ltn__feature-item ltn__feature-item-3">
                  <div className="ltn__feature-icon">
                    <span>
                      <i className="flaticon-call-center-agent"></i>
                    </span>
                  </div>
                  <div className="ltn__feature-info">
                    <h4>
                      <a href="service-details.html">
                        Global Architect Experts
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic do
                      eiusmod tempor incididunt ut labore et
                    </p>
                  </div>
                </div>
                <div className="ltn__feature-item ltn__feature-item-3">
                  <div className="ltn__feature-icon">
                    <span>
                      <i className="flaticon-maps-and-location"></i>
                    </span>
                  </div>
                  <div className="ltn__feature-info">
                    <h4>
                      <a href="service-details.html">
                        Built-in Storage Cupboards
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic do
                      eiusmod tempor incididunt ut labore et
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ABOUT US AREA END -->

    <!-- ABOUT US AREA START --> */}
      <div className="ltn__about-us-area section-bg-1 bg-image-right-before pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-20">
                  <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                    Building Facilities
                  </h6>
                  <h1 className="section-title">
                    Making living spaces More Beautiful
                  </h1>
                  <p>
                    Over 39,000 people work for us in more than 70 countries all
                    over the This breadth of global coverage, combined with
                    specialist services
                  </p>
                </div>
                <ul className="ltn__list-item-half ltn__list-item-half-2 list-item-margin clearfix">
                  <li>
                    <i className="icon-done"></i>
                    Living rooms are pre-wired for Surround
                  </li>
                  <li>
                    <i className="icon-done"></i>
                    Luxurious interior design and amenities
                  </li>
                  <li>
                    <i className="icon-done"></i>
                    Nestled in the Buckhead Vinings communities
                  </li>
                  <li>
                    <i className="icon-done"></i>
                    Private balconies with stunning views
                  </li>
                  <li>
                    <i className="icon-done"></i>A rare combination of inspired
                    architecture
                  </li>
                  <li>
                    <i className="icon-done"></i>
                    Outdoor grilling with dining court
                  </li>
                </ul>
                <div className="  ltn__animation-pulse2 text-center mt-30">
                  <a
                    className="ltn__video-play-btn bg-white--- ltn__secondary-bg"
                    href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&amp;showinfo=0"
                    data-rel="lightcase"
                  >
                    <i className="icon-play  ltn__secondary-color--- white-color"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-left"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ABOUT US AREA END -->

    <!-- FEATURE AREA START ( Feature - 6) --> */}
      <div className="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  Our Services
                </h6>
                <h1 className="section-title">Our Main Focus</h1>
              </div>
            </div>
          </div>

          <div className="row ltn__custom-gutter---  justify-content-center">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  {/* <!-- <span><i className="flaticon-house"></i></span> --> */}
                  <img src="../img/icons/icon-img/21.png" alt="#" />
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <a href="service-details.html">Buy a home</a>
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                  <a className="ltn__service-btn" href="service-details.html">
                    Find A Home <i className="flaticon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                <div className="ltn__feature-icon">
                  {/* <!-- <span><i className="flaticon-house-3"></i></span> --> */}
                  <img src="../img/icons/icon-img/22.png" alt="#" />
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <a href="service-details.html">Rent a home</a>
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                  <a className="ltn__service-btn" href="service-details.html">
                    Find A Home <i className="flaticon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  {/* <!-- <span><i className="flaticon-deal-1"></i></span> --> */}
                  <img src="../img/icons/icon-img/23.png" alt="#" />
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <a href="service-details.html">Sell a home</a>
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we
                    can match you with a house you will want to call home.
                  </p>
                  <a className="ltn__service-btn" href="service-details.html">
                    Find A Home <i className="flaticon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FEATURE AREA END -->

    <!-- UPCOMING PROJECT AREA START --> */}
      <div
        className="ltn__upcoming-project-area section-bg-1--- bg-image-top pt-115 pb-65"
        style={{ backgroundImage: `url("../img/bg/22.jpg")` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center---">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">
                  Upcoming Projects
                </h6>
                <h1 className="section-title  white-color">
                  Dream Living Space <br />
                  Setting New Standards
                </h1>
              </div>
            </div>
          </div>

          <Slider
            {...upCommingSettings}
            className="row ltn__upcoming-project-slider-1-active slick-arrow-3"
          >
            {/* <!-- upcoming-project-item --> */}
            <div className="col-lg-12">
              <div className="ltn__upcoming-project-item">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="ltn__upcoming-project-img">
                      <img src="../img/product-3/3.jpg" alt="#" />
                    </div>
                  </div>
                  <div className="col-lg-5 section-bg-1">
                    <div className="ltn__upcoming-project-info ltn__menu-widget">
                      <h6 className="section-subtitle ltn__secondary-color mb-0">
                        About Projects
                      </h6>
                      <h1 className="mb-30">Upcoming Projects</h1>
                      <ul className="mt">
                        <li>
                          1. Project Name: <span>Quarter</span>
                        </li>
                        <li>
                          2. Project Type: <span>Apartment / Home</span>
                        </li>
                        <li>
                          3. Building Location: <span>New York, USA</span>
                        </li>
                        <li>
                          4. No. Of Apartments: <span>568</span>
                        </li>
                        <li>
                          5. Total Investment: <span>$14,500,00</span>
                        </li>
                      </ul>
                      <div className="btn-wrapper animated">
                        <a
                          href="contact.html"
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          Download Brochure
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- upcoming-project-item --> */}
            <div className="col-lg-12">
              <div className="ltn__upcoming-project-item">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="ltn__upcoming-project-img">
                      <img src="../img/product-3/2.jpg" alt="#" />
                    </div>
                  </div>
                  <div className="col-lg-5 section-bg-1">
                    <div className="ltn__upcoming-project-info ltn__menu-widget">
                      <h6 className="ltn__secondary-color">About Projects</h6>
                      <h1>Upcoming Projects</h1>
                      <ul>
                        <li>
                          1. Project Name: <span>Quarter</span>
                        </li>
                        <li>
                          2. Project Type: <span>Apartment / Home</span>
                        </li>
                        <li>
                          3. Building Location: <span>New York, USA</span>
                        </li>
                        <li>
                          4. No. Of Apartments: <span>568</span>
                        </li>
                        <li>
                          5. Total Investment: <span>$14,500,00</span>
                        </li>
                      </ul>
                      <div className="btn-wrapper animated">
                        <a
                          href="contact.html"
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          Download Brochure
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- upcoming-project-item --> */}
            <div className="col-lg-12">
              <div className="ltn__upcoming-project-item">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="ltn__upcoming-project-img">
                      <img src="../img/product-3/7.jpg" alt="#" />
                    </div>
                  </div>
                  <div className="col-lg-5 section-bg-1">
                    <div className="ltn__upcoming-project-info ltn__menu-widget">
                      <h6 className="ltn__secondary-color">About Projects</h6>
                      <h1>Upcoming Projects</h1>
                      <ul>
                        <li>
                          1. Project Name: <span>Quarter</span>
                        </li>
                        <li>
                          2. Project Type: <span>Apartment / Home</span>
                        </li>
                        <li>
                          3. Building Location: <span>New York, USA</span>
                        </li>
                        <li>
                          4. No. Of Apartments: <span>568</span>
                        </li>
                        <li>
                          5. Total Investment: <span>$14,500,00</span>
                        </li>
                      </ul>
                      <div className="btn-wrapper animated">
                        <a
                          href="contact.html"
                          className="theme-btn-1 btn btn-effect-1"
                        >
                          Download Brochure
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  --> */}
          </Slider>
        </div>
      </div>
      {/* <!-- UPCOMING PROJECT AREA END -->

    <!-- APARTMENTS PLAN AREA START --> */}
      <div className="ltn__apartments-plan-area pt-115--- pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  Apartment Sketch
                </h6>
                <h1 className="section-title">Apartments Plan</h1>
              </div>
              <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
                <div className="nav">
                  <a data-bs-toggle="tab" href="#liton_tab_3_1">
                    The Studio
                  </a>
                  <a
                    className="active show"
                    data-bs-toggle="tab"
                    href="#liton_tab_3_2"
                  >
                    Deluxe Portion
                  </a>
                  <a data-bs-toggle="tab" href="#liton_tab_3_3" className="">
                    Penthouse
                  </a>
                  <a data-bs-toggle="tab" href="#liton_tab_3_4" className="">
                    Top Garden
                  </a>
                  <a data-bs-toggle="tab" href="#liton_tab_3_5" className="">
                    Double Height
                  </a>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade" id="liton_tab_3_1">
                  <div className="ltn__apartments-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                          <h2>The Studio</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                          <div className="apartments-info-list apartments-info-list-color mt-40">
                            <ul>
                              <li>
                                <label>Total Area</label>{" "}
                                <span>2800 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bedroom</label> <span>150 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bathroom</label> <span>45 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Belcony/Pets</label> <span>Allowed</span>
                              </li>
                              <li>
                                <label>Lounge</label> <span>650 Sq. Ft</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-plan-img">
                          <img src="../img/others/10.png" alt="#" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade active show" id="liton_tab_3_2">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                          <h2>Deluxe Portion</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                          <div className="apartments-info-list apartments-info-list-color mt-40">
                            <ul>
                              <li>
                                <label>Total Area</label>{" "}
                                <span>2800 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bedroom</label> <span>150 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bathroom</label> <span>45 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Belcony/Pets</label> <span>Allowed</span>
                              </li>
                              <li>
                                <label>Lounge</label> <span>650 Sq. Ft</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-plan-img">
                          <img src="../img/others/10.png" alt="#" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_3">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                          <h2>Penthouse</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                          <div className="apartments-info-list apartments-info-list-color mt-40">
                            <ul>
                              <li>
                                <label>Total Area</label>{" "}
                                <span>2800 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bedroom</label> <span>150 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bathroom</label> <span>45 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Belcony/Pets</label> <span>Allowed</span>
                              </li>
                              <li>
                                <label>Lounge</label> <span>650 Sq. Ft</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-plan-img">
                          <img src="../img/others/10.png" alt="#" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_4">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                          <h2>Top Garden</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                          <div className="apartments-info-list apartments-info-list-color mt-40">
                            <ul>
                              <li>
                                <label>Total Area</label>{" "}
                                <span>2800 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bedroom</label> <span>150 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bathroom</label> <span>45 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Belcony/Pets</label> <span>Allowed</span>
                              </li>
                              <li>
                                <label>Lounge</label> <span>650 Sq. Ft</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-plan-img">
                          <img src="../img/others/10.png" alt="#" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_5">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                          <h2>Double Height</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                          <div className="apartments-info-list apartments-info-list-color mt-40">
                            <ul>
                              <li>
                                <label>Total Area</label>{" "}
                                <span>2800 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bedroom</label> <span>150 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bathroom</label> <span>45 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Belcony/Pets</label> <span>Allowed</span>
                              </li>
                              <li>
                                <label>Lounge</label> <span>650 Sq. Ft</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-plan-img">
                          <img src="../img/others/10.png" alt="#" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- APARTMENTS PLAN AREA END -->

    <!-- SEARCH BY PLACE AREA START (testimonial-7) --> */}
      <div
        className="ltn__search-by-place-area before-bg-top bg-image-top--- pt-115 pb-70"
        style={{ backgroundImage: `url("../img/bg/20.jpg")` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center---">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  Area Properties
                </h6>
                <h1 className="section-title">
                  Find Your Dream House <br />
                  Search By Area
                </h1>
              </div>
            </div>
          </div>

          {/* <Slider
                ref={setSliderRef}
                {...settings}></Slider> */}

          <Slider
            {...productsettings}
            className="row ltn__search-by-place-slider-1-active slick-arrow-1"
          >
            <div className="col-lg-4">
              <div className="ltn__search-by-place-item">
                <div className="search-by-place-img">
                  <a href="product-details">
                    <img src="../img/product-3/1.jpg" alt="#" />
                  </a>
                  <div className="search-by-place-badge">
                    <ul>
                      <li>2 Properties</li>
                    </ul>
                  </div>
                </div>
                <div className="search-by-place-info">
                  <h6>
                    <a href="locations.html">San Francisco</a>
                  </h6>
                  <h4>
                    <a href="product-details">Mission District Area</a>
                  </h4>
                  <div className="search-by-place-btn">
                    <a href="product-details">
                      View Property <i className="flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__search-by-place-item">
                <div className="search-by-place-img">
                  <a href="product-details">
                    <img src="../img/product-3/2.jpg" alt="#" />
                  </a>
                  <div className="search-by-place-badge">
                    <ul>
                      <li>5 Properties</li>
                    </ul>
                  </div>
                </div>
                <div className="search-by-place-info">
                  <h6>
                    <a href="locations.html">New York</a>
                  </h6>
                  <h4>
                    <a href="product-details">Pacific Heights Area</a>
                  </h4>
                  <div className="search-by-place-btn">
                    <a href="product-details">
                      View Property <i className="flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__search-by-place-item">
                <div className="search-by-place-img">
                  <a href="product-details">
                    <img src="../img/product-3/3.jpg" alt="#" />
                  </a>
                  <div className="search-by-place-badge">
                    <ul>
                      <li>9 Properties</li>
                    </ul>
                  </div>
                </div>
                <div className="search-by-place-info">
                  <h6>
                    <a href="locations.html">Sedona, Arizona</a>
                  </h6>
                  <h4>
                    <a href="product-details">Noe Valley Zones</a>
                  </h4>
                  <div className="search-by-place-btn">
                    <a href="product-details">
                      View Property <i className="flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__search-by-place-item">
                <div className="search-by-place-img">
                  <a href="product-details">
                    <img src="../img/product-3/2.jpg" alt="#" />
                  </a>
                  <div className="search-by-place-badge">
                    <ul>
                      <li>5 Properties</li>
                    </ul>
                  </div>
                </div>
                <div className="search-by-place-info">
                  <h6>
                    <a href="locations.html">New York</a>
                  </h6>
                  <h4>
                    <a href="product-details">Pacific Heights Area</a>
                  </h4>
                  <div className="search-by-place-btn">
                    <a href="product-details">
                      View Property <i className="flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  --> */}
          </Slider>
        </div>
      </div>
      {/* <!-- SEARCH BY PLACE AREA END -->

    <!-- SELECT AVAILABILITY AREA START --> */}
      <div className="select-availability-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center---">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  Avialable Spaces
                </h6>
                <h1 className="section-title">Select Availability</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__select-availability-table-wrap">
                <div className="ltn__select-availability-table d-none d-md-block">
                  <ul className="ltn__select-availability-table-head">
                    <li>Residence</li>
                    <li>Bedrooms</li>
                    <li>Bathroom</li>
                    <li>SQ.FT </li>
                    <li>Rent Price</li>
                    <li>Details</li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row">
                    <li className="tower-name">Tower Name</li>
                    <li>3</li>
                    <li>3</li>
                    <li>1,200 </li>
                    <li>$3,500</li>
                    <li>
                      <a href="product-details">+ Available</a>
                    </li>
                  </ul>
                </div>
                <div className="ltn__select-availability-table-responsive d-md-none">
                  <ul className="ltn__select-availability-table-row-responsive-item">
                    <li>
                      <span>Residence</span>{" "}
                      <span className="tower-name">Tower Name</span>
                    </li>
                    <li>
                      <span>Bedrooms</span> <span>3</span>
                    </li>
                    <li>
                      <span>Bathroom</span> <span>3</span>
                    </li>
                    <li>
                      <span>SQ.FT</span> <span>1,200</span>
                    </li>
                    <li>
                      <span>Rent Price</span> <span>$3,500</span>
                    </li>
                    <li>
                      <span>Details</span>{" "}
                      <span>
                        <a href="product-details">+ Available</a>
                      </span>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row-responsive-item">
                    <li>
                      <span>Residence</span>{" "}
                      <span className="tower-name">Tower Name</span>
                    </li>
                    <li>
                      <span>Bedrooms</span> <span>3</span>
                    </li>
                    <li>
                      <span>Bathroom</span> <span>3</span>
                    </li>
                    <li>
                      <span>SQ.FT</span> <span>1,200</span>
                    </li>
                    <li>
                      <span>Rent Price</span> <span>$3,500</span>
                    </li>
                    <li>
                      <span>Details</span>{" "}
                      <span>
                        <a href="product-details">+ Available</a>
                      </span>
                    </li>
                  </ul>
                  <ul className="ltn__select-availability-table-row-responsive-item">
                    <li>
                      <span>Residence</span>{" "}
                      <span className="tower-name">Tower Name</span>
                    </li>
                    <li>
                      <span>Bedrooms</span> <span>3</span>
                    </li>
                    <li>
                      <span>Bathroom</span> <span>3</span>
                    </li>
                    <li>
                      <span>SQ.FT</span> <span>1,200</span>
                    </li>
                    <li>
                      <span>Rent Price</span> <span>$3,500</span>
                    </li>
                    <li>
                      <span>Details</span>{" "}
                      <span>
                        <a href="product-details">+ Available</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- SELECT AVAILABILITY AREA END -->

    <!-- NEIGHBOUR AREA START --> */}
      <div className="neighbour-area section-bg-1 pt-118 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center---">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  Explore Neighbour
                </h6>
                <h1 className="section-title">
                  What’s In Neighbour <br />
                  Explore Below
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__neighbour-tab-wrap">
                <div className="ltn__tab-menu ltn__tab-menu-3--- ltn__tab-menu-4 ltn__tab-menu-top-right-- text-uppercase--- text-center">
                  <div className="nav">
                    <a
                      className="active show"
                      data-bs-toggle="tab"
                      href="#liton_tab_4_1"
                    >
                      <img src="../img/neighbour/1.jpg" alt="#" />
                    </a>
                    <a data-bs-toggle="tab" href="#liton_tab_4_2" className="">
                      <img src="../img/neighbour/2.jpg" alt="#" />
                    </a>
                    <a data-bs-toggle="tab" href="#liton_tab_4_3" className="">
                      <img src="../img/neighbour/3.jpg" alt="#" />
                    </a>
                  </div>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade active show" id="liton_tab_4_1">
                    <div className="ltn__neighbour-tab-content-inner">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="neighbour-apartments-img">
                            <img src="../img/neighbour/1.jpg" alt="#" />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="ltn__search-by-place-item neighbour-apartments-item">
                            <div className="search-by-place-img">
                              <a href="product-details">
                                <img src="../img/product-3/3.jpg" alt="#" />
                              </a>
                              <div className="search-by-place-badge">
                                <ul>
                                  <li>9 Properties</li>
                                </ul>
                              </div>
                            </div>
                            <div className="search-by-place-info">
                              <h4>
                                <a href="product-details">Shopping Center</a>
                              </h4>
                              <label>
                                <span className="ltn__secondary-color">
                                  1,500m{" "}
                                </span>
                                / 21 min. walk
                              </label>
                              <div className="search-by-place-brief">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore Enim ullamco laboris.
                                </p>
                              </div>
                              <div className="search-by-place-btn">
                                <a href="product-details">
                                  View Property{" "}
                                  <i className="flaticon-right-arrow"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_tab_4_2">
                    <div className="ltn__neighbour-tab-content-inner">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="neighbour-apartments-img">
                            <img src="../img/neighbour/2.jpg" alt="#" />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="ltn__search-by-place-item neighbour-apartments-item">
                            <div className="search-by-place-img">
                              <a href="product-details">
                                <img src="../img/product-3/2.jpg" alt="#" />
                              </a>
                              <div className="search-by-place-badge">
                                <ul>
                                  <li>9 Properties</li>
                                </ul>
                              </div>
                            </div>
                            <div className="search-by-place-info">
                              <h4>
                                <a href="product-details">Medical Hospital</a>
                              </h4>
                              <label>
                                <span className="ltn__secondary-color">
                                  1,500m{" "}
                                </span>
                                / 21 min. walk
                              </label>
                              <div className="search-by-place-brief">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore Enim ullamco laboris.
                                </p>
                              </div>
                              <div className="search-by-place-btn">
                                <a href="product-details">
                                  View Property{" "}
                                  <i className="flaticon-right-arrow"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="liton_tab_4_3">
                    <div className="ltn__neighbour-tab-content-inner">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="neighbour-apartments-img">
                            <img src="../img/neighbour/3.jpg" alt="#" />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="ltn__search-by-place-item neighbour-apartments-item">
                            <div className="search-by-place-img">
                              <a href="product-details">
                                <img src="../img/product-3/4.jpg" alt="#" />
                              </a>
                              <div className="search-by-place-badge">
                                <ul>
                                  <li>9 Properties</li>
                                </ul>
                              </div>
                            </div>
                            <div className="search-by-place-info">
                              <h4>
                                <a href="product-details">Children Playland</a>
                              </h4>
                              <label>
                                <span className="ltn__secondary-color">
                                  1,500m{" "}
                                </span>
                                / 21 min. walk
                              </label>
                              <div className="search-by-place-brief">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempor
                                  incididunt ut labore Enim ullamco laboris.
                                </p>
                              </div>
                              <div className="search-by-place-btn">
                                <a href="product-details">
                                  View Property{" "}
                                  <i className="flaticon-right-arrow"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
                <div className="row">
                  <div className="col-lg-6">
                    <div id="accordion_2">
                      {/* <!-- card --> */}
                      <div className="card">
                        <h6
                          className="collapsed ltn__card-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-item-2-1"
                          aria-expanded="false"
                        >
                          <i className="flaticon-mortarboard"></i> University /
                          College
                        </h6>
                        <div
                          id="faq-item-2-1"
                          className="collapse"
                          data-bs-parent="#accordion_2"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Scelerisque eleifend donec
                              pretium vulputate sapien nec sagittis.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- card --> */}
                      <div className="card">
                        <h6
                          className="collapsed ltn__card-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-item-2-2"
                          aria-expanded="false"
                        >
                          <i className="flaticon-hospital"></i> Medical Hospital
                        </h6>
                        <div
                          id="faq-item-2-2"
                          className="collapse show---"
                          data-bs-parent="#accordion_2"
                        >
                          <div className="card-body">
                            <div className="ltn__video-img alignleft">
                              <img
                                src="../img/bg/17.jpg"
                                alt="video popup bg image"
                              />
                              <a
                                className="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----"
                                href="https://www.youtube.com/embed/LjCzPp-MK48?autoplay=1&showinfo=0"
                                data-rel="lightcase:myCollection"
                              >
                                <i className="fa fa-play"></i>
                              </a>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Scelerisque eleifend donec
                              pretium vulputate sapien nec sagittis.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- card --> */}
                      <div className="card">
                        <h6
                          className="collapsed ltn__card-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-item-2-3"
                          aria-expanded="false"
                        >
                          <i className="flaticon-metro"></i> Railway Station
                        </h6>
                        <div
                          id="faq-item-2-3"
                          className="collapse"
                          data-bs-parent="#accordion_2"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Scelerisque eleifend donec
                              pretium vulputate sapien nec sagittis.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!--  --> */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div id="accordion_3">
                      {/* <!-- card --> */}
                      <div className="card">
                        <h6
                          className="collapsed ltn__card-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-item-3-4"
                          aria-expanded="false"
                        >
                          <i className="flaticon-building"></i> Shopping Mall
                        </h6>
                        <div
                          id="faq-item-3-4"
                          className="collapse"
                          data-bs-parent="#accordion_3"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Scelerisque eleifend donec
                              pretium vulputate sapien nec sagittis.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- card --> */}
                      <div className="card">
                        <h6
                          className="collapsed ltn__card-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-item-3-5"
                          aria-expanded="false"
                        >
                          <i className="flaticon-airplane"></i> Airport/Biman
                        </h6>
                        <div
                          id="faq-item-3-5"
                          className="collapse"
                          data-bs-parent="#accordion_3"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Scelerisque eleifend donec
                              pretium vulputate sapien nec sagittis.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- card --> */}
                      <div className="card">
                        <h6
                          className="collapsed ltn__card-title"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-item-3-6"
                          aria-expanded="false"
                        >
                          <i className="flaticon-slider"></i> Children Playland
                        </h6>
                        <div
                          id="faq-item-3-6"
                          className="collapse"
                          data-bs-parent="#accordion_3"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Scelerisque eleifend donec
                              pretium vulputate sapien nec sagittis.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!--  --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- NEIGHBOUR AREA END -->

    <!-- CATEGORY AREA START --> */}
      <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  Our Aminities
                </h6>
                <h1 className="section-title">Building Aminities</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                <a href="shop.html">
                  <span className="category-icon">
                    <i className="flaticon-car"></i>
                  </span>
                  <span className="category-number">01</span>
                  <span className="category-title">Parking Space</span>
                  <span className="category-brief">
                    Enimad minim veniam quis no exercitation ullamco lab
                  </span>
                  <span className="category-btn d-none">
                    <i className="flaticon-right-arrow"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                <a href="shop.html">
                  <span className="category-icon">
                    <i className="flaticon-swimming"></i>
                  </span>
                  <span className="category-number">02</span>
                  <span className="category-title">Swimming Pool</span>
                  <span className="category-brief">
                    Enimad minim veniam quis no exercitation ullamco lab
                  </span>
                  <span className="category-btn d-none">
                    <i className="flaticon-right-arrow"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                <a href="shop.html">
                  <span className="category-icon">
                    <i className="flaticon-secure-shield"></i>
                  </span>
                  <span className="category-number">03</span>
                  <span className="category-title">Private Security</span>
                  <span className="category-brief">
                    Enimad minim veniam quis no exercitation ullamco lab
                  </span>
                  <span className="category-btn d-none">
                    <i className="flaticon-right-arrow"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                <a href="shop.html">
                  <span className="category-icon">
                    <i className="flaticon-stethoscope"></i>
                  </span>
                  <span className="category-number">04</span>
                  <span className="category-title">Medical Center</span>
                  <span className="category-brief">
                    Enimad minim veniam quis no exercitation ullamco lab
                  </span>
                  <span className="category-btn d-none">
                    <i className="flaticon-right-arrow"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                <a href="shop.html">
                  <span className="category-icon">
                    <i className="flaticon-book"></i>
                  </span>
                  <span className="category-number">05</span>
                  <span className="category-title">Library Area</span>
                  <span className="category-brief">
                    Enimad minim veniam quis no exercitation ullamco lab
                  </span>
                  <span className="category-btn d-none">
                    <i className="flaticon-right-arrow"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                <a href="shop.html">
                  <span className="category-icon">
                    <i className="flaticon-bed-1"></i>
                  </span>
                  <span className="category-number">06</span>
                  <span className="category-title">King Size Beds</span>
                  <span className="category-brief">
                    Enimad minim veniam quis no exercitation ullamco lab
                  </span>
                  <span className="category-btn d-none">
                    <i className="flaticon-right-arrow"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                <a href="shop.html">
                  <span className="category-icon">
                    <i className="flaticon-home-2"></i>
                  </span>
                  <span className="category-number">07</span>
                  <span className="category-title">Smart Homes</span>
                  <span className="category-brief">
                    Enimad minim veniam quis no exercitation ullamco lab
                  </span>
                  <span className="category-btn d-none">
                    <i className="flaticon-right-arrow"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                <a href="shop.html">
                  <span className="category-icon">
                    <i className="flaticon-slider"></i>
                  </span>
                  <span className="category-number">08</span>
                  <span className="category-title">Kid’s Playland</span>
                  <span className="category-brief">
                    Enimad minim veniam quis no exercitation ullamco lab
                  </span>
                  <span className="category-btn d-none">
                    <i className="flaticon-right-arrow"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CATEGORY AREA END -->


    <!-- TESTIMONIAL AREA START (testimonial-8) --> */}
      <div
        className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-65"
        style={{ backgroundImage: `url("../img/bg/23.jpg")` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center---">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">
                  Client,s Testimonial
                </h6>
                <h1 className="section-title white-color">
                  See What,s Our Client <br />
                  Says About Us
                </h1>
              </div>
            </div>
          </div>
          <Slider
            {...testiMonialsettings}
            className="row ltn__testimonial-slider-6-active slick-arrow-3"
          >
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
                <div className="ltn__testimoni-info">
                  <div className="ltn__testimoni-author-ratting">
                    <div className="ltn__testimoni-info-inner">
                      <div className="ltn__testimoni-img">
                        <img src="../img/testimonial/1.jpg" alt="#" />
                      </div>
                      <div className="ltn__testimoni-name-designation">
                        <h5>Jacob William</h5>
                        <label>Selling Agents</label>
                      </div>
                    </div>
                    <div className="ltn__testimoni-rating">
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p>
                    Precious ipsum dolor sit amet consectetur adipisicing elit,
                    sed dos mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
                <div className="ltn__testimoni-info">
                  <div className="ltn__testimoni-author-ratting">
                    <div className="ltn__testimoni-info-inner">
                      <div className="ltn__testimoni-img">
                        <img src="../img/testimonial/2.jpg" alt="#" />
                      </div>
                      <div className="ltn__testimoni-name-designation">
                        <h5>Kelian Anderson</h5>
                        <label>Selling Agents</label>
                      </div>
                    </div>
                    <div className="ltn__testimoni-rating">
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p>
                    Precious ipsum dolor sit amet consectetur adipisicing elit,
                    sed dos mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
                <div className="ltn__testimoni-info">
                  <div className="ltn__testimoni-author-ratting">
                    <div className="ltn__testimoni-info-inner">
                      <div className="ltn__testimoni-img">
                        <img src="../img/testimonial/3.jpg" alt="#" />
                      </div>
                      <div className="ltn__testimoni-name-designation">
                        <h5>Adam Joseph</h5>
                        <label>Selling Agents</label>
                      </div>
                    </div>
                    <div className="ltn__testimoni-rating">
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p>
                    Precious ipsum dolor sit amet consectetur adipisicing elit,
                    sed dos mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
                <div className="ltn__testimoni-info">
                  <div className="ltn__testimoni-author-ratting">
                    <div className="ltn__testimoni-info-inner">
                      <div className="ltn__testimoni-img">
                        <img src="../img/testimonial/4.jpg" alt="#" />
                      </div>
                      <div className="ltn__testimoni-name-designation">
                        <h5>James Carter</h5>
                        <label>Selling Agents</label>
                      </div>
                    </div>
                    <div className="ltn__testimoni-rating">
                      <div className="product-ratting">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-star"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p>
                    Precious ipsum dolor sit amet consectetur adipisicing elit,
                    sed dos mod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </p>
                </div>
              </div>
            </div>
            {/* <!--  --> */}
          </Slider>
        </div>
      </div>
      {/* <!-- TESTIMONIAL AREA END -->

    <!-- BLOG AREA START (blog-3) --> */}
      <div className="ltn__blog-area pt-115--- pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">
                  News & Blogs
                </h6>
                <h1 className="section-title">Leatest News Feeds</h1>
              </div>
            </div>
          </div>
          <Slider
            {...blogSettings}
            className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal"
          >
            {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="../img/blog/1.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Decorate
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      10 Brilliant Ways To Decorate Your Home
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i>June 24, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="../img/blog/2.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Interior
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      The Most Inspiring Interior Design Of 2021
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i>July 23, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="../img/blog/3.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Estate
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      Recent Commercial Real Estate Transactions
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i>May 22, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="../img/blog/4.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Room
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      Renovating a Living Room? Experts Share Their Secrets
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i>June 24, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Blog Item --> */}
            <div className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <a href="blog-details.html">
                    <img src="../img/blog/5.jpg" alt="#" />
                  </a>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Admin
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Trends
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">
                      7 home trends that will shape your house in 2021
                    </a>
                  </h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i>June 24, 2021
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  --> */}
          </Slider>
        </div>
      </div>
      {/* <!-- BLOG AREA END -->

    <!-- CALL TO ACTION START (call-to-action-6) --> */}
      <div
        className="ltn__call-to-action-area call-to-action-6 before-bg-bottom"
        data-bs-bg="../img/1.jpg--"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                <div className="coll-to-info text-color-white">
                  <h1>Looking for a dream home?</h1>
                  <p>We help you make the dream of new house a reality</p>
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

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/hero/", "index-two.json");
  const data = JSON.parse(await fs.readFile(filePath));

  return {
    props: {
      data,
    },
  };
}
export default HomeVersionTwo;
