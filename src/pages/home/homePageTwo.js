import path from "path";
import fs from "fs/promises";
import { LayoutOne } from "@/layouts";
import HeroSectionStyleOne from "@/components/hero/styleOne";

function HomeVersion2(props) {
  const { data } = props;

  return (
    <LayoutOne>
     
     {/* <!-- SLIDER AREA START (slider-11) --> */}
    <div class="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
        <div class="ltn__slider-11-inner">
            <div class="ltn__slider-11-active">
                {/* <!-- slide-item --> */}
                <div class="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
                    <div class="ltn__slide-item-inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 align-self-center">
                                    <div class="slide-item-info">
                                        <div class="slide-item-info-inner ltn__slide-animation">
                                            <div class="slide-video mb-50 d-none">
                                                <a class="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                                                    <i class="fa fa-play"></i>
                                                </a>
                                            </div>
                                            <h6 class="slide-sub-title white-color--- animated"><span><i class="fas fa-home"></i></span> Real Estate Agency</h6>
                                            <h1 class="slide-title animated ">Search and Find <br/><span>Luxury</span> House</h1>
                                            <div class="slide-brief animated">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                            <div class="btn-wrapper animated">
                                                <a href="about.html" class="theme-btn-1 btn btn-effect-1">Make An Enquiry</a>
                                                <a class="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&amp;showinfo=0" data-rel="lightcase">
                                                    <i class="icon-play  ltn__secondary-color"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide-item-img">
                                        <img src="img/slider/61.jpg" alt="#"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- slide-item --> */}
                <div class="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
                    <div class="ltn__slide-item-inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 align-self-center">
                                    <div class="slide-item-info">
                                        <div class="slide-item-info-inner ltn__slide-animation">
                                            <div class="slide-video mb-50 d-none">
                                                <a class="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                                                    <i class="fa fa-play"></i>
                                                </a>
                                            </div>
                                            <h6 class="slide-sub-title white-color--- animated"><span><i class="fas fa-home"></i></span> Real Estate Agency</h6>
                                            <h1 class="slide-title animated ">Find Your Dream <br/> House By Us</h1>
                                            <div class="slide-brief animated">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                            <div class="btn-wrapper animated">
                                                <a href="service.html" class="theme-btn-1 btn btn-effect-1">OUR SERVICES</a>
                                                <a href="about.html" class="btn btn-transparent btn-effect-3">LEARN MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide-item-img">
                                        <img src="img/slider/62.jpg" alt="#"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- slide-item --> */}
                <div class="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
                    <div class="ltn__slide-item-inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 align-self-center">
                                    <div class="slide-item-info">
                                        <div class="slide-item-info-inner ltn__slide-animation">
                                            <div class="slide-video mb-50 d-none">
                                                <a class="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                                                    <i class="fa fa-play"></i>
                                                </a>
                                            </div>
                                            <h6 class="slide-sub-title white-color--- animated"><span><i class="fas fa-home"></i></span> Real Estate Agency</h6>
                                            <h1 class="slide-title animated ">Find Your Dream <br/> House By Us</h1>
                                            <div class="slide-brief animated">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                            <div class="btn-wrapper animated">
                                                <a href="service.html" class="theme-btn-1 btn btn-effect-1">OUR SERVICES</a>
                                                <a href="about.html" class="btn btn-transparent btn-effect-3">LEARN MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide-item-img">
                                        <img src="img/slider/63.jpg" alt="#"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- slide-item --> */}
                <div class="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
                    <div class="ltn__slide-item-inner">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 align-self-center">
                                    <div class="slide-item-info">
                                        <div class="slide-item-info-inner ltn__slide-animation">
                                            <div class="slide-video mb-50 d-none">
                                                <a class="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                                                    <i class="fa fa-play"></i>
                                                </a>
                                            </div>
                                            <h6 class="slide-sub-title white-color--- animated"><span><i class="fas fa-home"></i></span> Real Estate Agency</h6>
                                            <h1 class="slide-title animated ">Find Your Dream <br/> House By Us</h1>
                                            <div class="slide-brief animated">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                            <div class="btn-wrapper animated">
                                                <a href="service.html" class="theme-btn-1 btn btn-effect-1">OUR SERVICES</a>
                                                <a href="about.html" class="btn btn-transparent btn-effect-3">LEARN MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slide-item-img">
                                        <img src="img/slider/64.jpg" alt="#"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- slider-4-pagination --> */}
            <div class="ltn__slider-11-pagination-count">
                <span class="count"></span>
                <span class="total"></span>
            </div>
            {/* <!-- slider-sticky-icon --> */}
            <div class="slider-sticky-icon-2">
                <ul>
                    <li><a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#" title="Linkedin"><i class="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
            {/* <!-- slider-4-img-slide-arrow --> */}
            <div class="ltn__slider-11-img-slide-arrow">
                <div class="ltn__slider-11-img-slide-arrow-inner">
                    <div class="ltn__slider-11-img-slide-arrow-active">
                        <div class="image-slide-item">
                            <img src="img/slider/61.jpg" alt="Flower Image"/>
                        </div>
                        <div class="image-slide-item">
                            <img src="img/slider/62.jpg" alt="Flower Image"/>
                        </div>
                        <div class="image-slide-item">
                            <img src="img/slider/63.jpg" alt="Flower Image"/>
                        </div>
                        <div class="image-slide-item">
                            <img src="img/slider/64.jpg" alt="Flower Image"/>
                        </div>
                    </div>
                    {/* <!-- slider-4-slide-item-count --> */}
                    <div class="ltn__slider-11-slide-item-count">
                        <span class="count"></span>
                        <span class="total"></span>
                    </div>
                </div>
            </div>

        </div>
    </div>
    {/* <!-- SLIDER AREA END -->

    <!-- ABOUT US AREA START --> */}
    <div class="ltn__about-us-area pt-115 pb-100 ">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 align-self-center">
                    <div class="about-us-img-wrap about-img-left">
                        <img src="img/others/11.png" alt="About Us Image"/>
                        <div class="about-us-img-info about-us-img-info-2 about-us-img-info-3 d-none">
                            
                            <div class="ltn__video-img ltn__animation-pulse1">
                                <img src="img/others/8.png" alt="video popup bg image"/>
                                <a class="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0"  data-rel="lightcase:myCollection">
                                    <i class="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 align-self-center">
                    <div class="about-us-info-wrap">
                        <div class="section-title-area ltn__section-title-2--- mb-30">
                            <h6 class="section-subtitle section-subtitle-2--- ltn__secondary-color">About Us</h6>
                            <h1 class="section-title">Dream Living Spaces
                                Setting New Build</h1>
                            <p>Over 39,000 people work for us in more than 70 countries all over the
                                This breadth of global coverage, combined with specialist services</p>
                        </div>                        
                        <div class="ltn__feature-item ltn__feature-item-3">
                            <div class="ltn__feature-icon">
                                <span><i class="flaticon-house-4"></i></span>
                            </div>
                            <div class="ltn__feature-info">
                                <h4><a href="service-details.html">The Perfect Residency</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
                            </div>
                        </div>
                        <div class="ltn__feature-item ltn__feature-item-3">
                            <div class="ltn__feature-icon">
                                <span><i class="flaticon-call-center-agent"></i></span>
                            </div>
                            <div class="ltn__feature-info">
                                <h4><a href="service-details.html">Global Architect Experts</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
                            </div>
                        </div>
                        <div class="ltn__feature-item ltn__feature-item-3">
                            <div class="ltn__feature-icon">
                                <span><i class="flaticon-maps-and-location"></i></span>
                            </div>
                            <div class="ltn__feature-info">
                                <h4><a href="service-details.html">Built-in Storage Cupboards</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ABOUT US AREA END -->

    <!-- ABOUT US AREA START --> */}
    <div class="ltn__about-us-area section-bg-1 bg-image-right-before pt-120 pb-90">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 align-self-center">
                    <div class="about-us-info-wrap">
                        <div class="section-title-area ltn__section-title-2--- mb-20">
                            <h6 class="section-subtitle section-subtitle-2--- ltn__secondary-color">Building Facilities</h6>
                            <h1 class="section-title">Making living spaces
                                More Beautiful</h1>
                            <p>Over 39,000 people work for us in more than 70 countries all over the
                                This breadth of global coverage, combined with specialist services</p>
                        </div>
                        <ul class="ltn__list-item-half ltn__list-item-half-2 list-item-margin clearfix">
                            <li>
                                <i class="icon-done"></i>
                                Living rooms are pre-wired for Surround
                            </li>
                            <li>
                                <i class="icon-done"></i>
                                Luxurious interior design and amenities
                            </li>
                            <li>
                                <i class="icon-done"></i>
                                Nestled in the Buckhead Vinings communities
                            </li>
                            <li>
                                <i class="icon-done"></i>
                                Private balconies with stunning views
                            </li>
                            <li>
                                <i class="icon-done"></i>
                                A rare combination of inspired architecture
                            </li>
                            <li>
                                <i class="icon-done"></i>
                                Outdoor grilling with dining court
                            </li>
                        </ul>
                        <div class="  ltn__animation-pulse2 text-center mt-30">
                            <a class="ltn__video-play-btn bg-white--- ltn__secondary-bg" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&amp;showinfo=0" data-rel="lightcase">
                                <i class="icon-play  ltn__secondary-color--- white-color"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 align-self-center">
                    <div class="about-us-img-wrap about-img-left">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ABOUT US AREA END -->

    <!-- FEATURE AREA START ( Feature - 6) --> */}
    <div class="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2--- text-center">
                        <h6 class="section-subtitle section-subtitle-2--- ltn__secondary-color">Our Services</h6>
                        <h1 class="section-title">Our Main Focus</h1>
                    </div>
                </div>
            </div>
            <div class="row ltn__custom-gutter---  justify-content-center">
                <div class="col-lg-4 col-sm-6 col-12">
                    <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                        <div class="ltn__feature-icon">
                            {/* <!-- <span><i class="flaticon-house"></i></span> --> */}
                            <img src="img/icons/icon-img/21.png" alt="#"/>
                        </div>
                        <div class="ltn__feature-info">
                            <h3><a href="service-details.html">Buy a home</a></h3>
                            <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                            <a class="ltn__service-btn" href="service-details.html">Find A Home <i class="flaticon-right-arrow"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-12">
                    <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                        <div class="ltn__feature-icon">
                            {/* <!-- <span><i class="flaticon-house-3"></i></span> --> */}
                            <img src="img/icons/icon-img/22.png" alt="#"/>
                        </div>
                        <div class="ltn__feature-info">
                            <h3><a href="service-details.html">Rent a home</a></h3>
                            <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                            <a class="ltn__service-btn" href="service-details.html">Find A Home <i class="flaticon-right-arrow"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-12">
                    <div class="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                        <div class="ltn__feature-icon">
                            {/* <!-- <span><i class="flaticon-deal-1"></i></span> --> */}
                            <img src="img/icons/icon-img/23.png" alt="#"/>
                        </div>
                        <div class="ltn__feature-info">
                            <h3><a href="service-details.html">Sell a home</a></h3>
                            <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                            <a class="ltn__service-btn" href="service-details.html">Find A Home <i class="flaticon-right-arrow"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- FEATURE AREA END -->

    <!-- UPCOMING PROJECT AREA START --> */}
    <div class="ltn__upcoming-project-area section-bg-1--- bg-image-top pt-115 pb-65" data-bs-bg="img/bg/22.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2--- text-center---">
                        <h6 class="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Upcoming Projects</h6>
                        <h1 class="section-title  white-color">Dream Living Space <br/>
                            Setting New Standards</h1>
                    </div>
                </div>
            </div>
            <div class="row ltn__upcoming-project-slider-1-active slick-arrow-3">
                {/* <!-- upcoming-project-item --> */}
                <div class="col-lg-12">
                    <div class="ltn__upcoming-project-item">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="ltn__upcoming-project-img">
                                    <img src="img/product-3/3.jpg" alt="#"/>
                                </div>
                            </div>
                            <div class="col-lg-5 section-bg-1">
                                <div class="ltn__upcoming-project-info ltn__menu-widget">
                                    <h6 class="section-subtitle ltn__secondary-color mb-0">About Projects</h6>
                                    <h1 class="mb-30">Upcoming Projects</h1>
                                    <ul class="mt">
                                        <li>1. Project Name: <span>Quarter</span></li>
                                        <li>2. Project Type: <span>Apartment / Home</span></li>
                                        <li>3. Building Location: <span>New York, USA</span></li>
                                        <li>4. No. Of Apartments: <span>568</span></li>
                                        <li>5. Total Investment: <span>$14,500,00</span></li>
                                    </ul>
                                    <div class="btn-wrapper animated">
                                        <a href="contact.html" class="theme-btn-1 btn btn-effect-1">Download Brochure</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- upcoming-project-item --> */}
                <div class="col-lg-12">
                    <div class="ltn__upcoming-project-item">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="ltn__upcoming-project-img">
                                    <img src="img/product-3/2.jpg" alt="#"/>
                                </div>
                            </div>
                            <div class="col-lg-5 section-bg-1">
                                <div class="ltn__upcoming-project-info ltn__menu-widget">
                                    <h6 class="ltn__secondary-color">About Projects</h6>
                                    <h1>Upcoming Projects</h1>
                                    <ul>
                                        <li>1. Project Name: <span>Quarter</span></li>
                                        <li>2. Project Type: <span>Apartment / Home</span></li>
                                        <li>3. Building Location: <span>New York, USA</span></li>
                                        <li>4. No. Of Apartments: <span>568</span></li>
                                        <li>5. Total Investment: <span>$14,500,00</span></li>
                                    </ul>
                                    <div class="btn-wrapper animated">
                                        <a href="contact.html" class="theme-btn-1 btn btn-effect-1">Download Brochure</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- upcoming-project-item --> */}
                <div class="col-lg-12">
                    <div class="ltn__upcoming-project-item">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="ltn__upcoming-project-img">
                                    <img src="img/product-3/7.jpg" alt="#"/>
                                </div>
                            </div>
                            <div class="col-lg-5 section-bg-1">
                                <div class="ltn__upcoming-project-info ltn__menu-widget">
                                    <h6 class="ltn__secondary-color">About Projects</h6>
                                    <h1>Upcoming Projects</h1>
                                    <ul>
                                        <li>1. Project Name: <span>Quarter</span></li>
                                        <li>2. Project Type: <span>Apartment / Home</span></li>
                                        <li>3. Building Location: <span>New York, USA</span></li>
                                        <li>4. No. Of Apartments: <span>568</span></li>
                                        <li>5. Total Investment: <span>$14,500,00</span></li>
                                    </ul>
                                    <div class="btn-wrapper animated">
                                        <a href="contact.html" class="theme-btn-1 btn btn-effect-1">Download Brochure</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--  --> */}
            </div>
        </div>
    </div>
    {/* <!-- UPCOMING PROJECT AREA END -->

    <!-- APARTMENTS PLAN AREA START --> */}
    <div class="ltn__apartments-plan-area pt-115--- pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2--- text-center">
                        <h6 class="section-subtitle section-subtitle-2--- ltn__secondary-color">Apartment Sketch</h6>
                        <h1 class="section-title">Apartments Plan</h1>
                    </div>
                    <div class="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
                        <div class="nav">
                            <a data-bs-toggle="tab" href="#liton_tab_3_1">The Studio</a>
                            <a class="active show"  data-bs-toggle="tab" href="#liton_tab_3_2">Deluxe Portion</a>
                            <a data-bs-toggle="tab" href="#liton_tab_3_3" class="">Penthouse</a>
                            <a data-bs-toggle="tab" href="#liton_tab_3_4" class="">Top Garden</a>
                            <a data-bs-toggle="tab" href="#liton_tab_3_5" class="">Double Height</a>
                        </div>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane fade" id="liton_tab_3_1">
                            <div class="ltn__apartments-tab-content-inner">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                                            <h2>The Studio</h2>
                                            <p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
                                                Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
                                                eiusmod tempor.Incididunt labore et dolore magna aliqua.
                                                sed ayd minim veniam.</p>
                                            <div class="apartments-info-list apartments-info-list-color mt-40">
                                                <ul>
                                                    <li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
                                                    <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
                                                    <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
                                                    <li><label>Belcony/Pets</label> <span>Allowed</span></li>
                                                    <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="apartments-plan-img">
                                            <img src="img/others/10.png" alt="#"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade active show" id="liton_tab_3_2">
                            <div class="ltn__product-tab-content-inner">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                                            <h2>Deluxe Portion</h2>
                                            <p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
                                                Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
                                                eiusmod tempor.Incididunt labore et dolore magna aliqua.
                                                sed ayd minim veniam.</p>
                                            <div class="apartments-info-list apartments-info-list-color mt-40">
                                                <ul>
                                                    <li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
                                                    <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
                                                    <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
                                                    <li><label>Belcony/Pets</label> <span>Allowed</span></li>
                                                    <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="apartments-plan-img">
                                            <img src="img/others/10.png" alt="#"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="liton_tab_3_3">
                            <div class="ltn__product-tab-content-inner">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                                            <h2>Penthouse</h2>
                                            <p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
                                                Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
                                                eiusmod tempor.Incididunt labore et dolore magna aliqua.
                                                sed ayd minim veniam.</p>
                                            <div class="apartments-info-list apartments-info-list-color mt-40">
                                                <ul>
                                                    <li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
                                                    <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
                                                    <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
                                                    <li><label>Belcony/Pets</label> <span>Allowed</span></li>
                                                    <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="apartments-plan-img">
                                            <img src="img/others/10.png" alt="#"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="liton_tab_3_4">
                            <div class="ltn__product-tab-content-inner">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                                            <h2>Top Garden</h2>
                                            <p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
                                                Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
                                                eiusmod tempor.Incididunt labore et dolore magna aliqua.
                                                sed ayd minim veniam.</p>
                                            <div class="apartments-info-list apartments-info-list-color mt-40">
                                                <ul>
                                                    <li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
                                                    <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
                                                    <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
                                                    <li><label>Belcony/Pets</label> <span>Allowed</span></li>
                                                    <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="apartments-plan-img">
                                            <img src="img/others/10.png" alt="#"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="liton_tab_3_5">
                            <div class="ltn__product-tab-content-inner">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="apartments-plan-info ltn__secondary-bg--- section-bg-1 text-color-white---">
                                            <h2>Double Height</h2>
                                            <p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
                                                Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
                                                eiusmod tempor.Incididunt labore et dolore magna aliqua.
                                                sed ayd minim veniam.</p>
                                            <div class="apartments-info-list apartments-info-list-color mt-40">
                                                <ul>
                                                    <li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
                                                    <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
                                                    <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
                                                    <li><label>Belcony/Pets</label> <span>Allowed</span></li>
                                                    <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="apartments-plan-img">
                                            <img src="img/others/10.png" alt="#"/>
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
    <div class="ltn__search-by-place-area before-bg-top bg-image-top--- pt-115 pb-70" data-bs-bg="img/bg/20.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2--- text-center---">
                        <h6 class="section-subtitle section-subtitle-2--- ltn__secondary-color">Area Properties</h6>
                        <h1 class="section-title">Find Your Dream House <br/>
                            Search By Area</h1>
                    </div>
                </div>
            </div>
            <div class="row ltn__search-by-place-slider-1-active slick-arrow-1">
                <div class="col-lg-4">
                    <div class="ltn__search-by-place-item">
                        <div class="search-by-place-img">
                            <a href="product-details.html"><img src="img/product-3/1.jpg" alt="#"/></a>
                            <div class="search-by-place-badge">
                                <ul>
                                    <li>2 Properties</li>
                                </ul>
                            </div>
                        </div>
                        <div class="search-by-place-info">
                            <h6><a href="locations.html">San Francisco</a></h6>
                            <h4><a href="product-details.html">Mission District Area</a></h4>
                            <div class="search-by-place-btn">
                                <a href="product-details.html">View Property <i class="flaticon-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="ltn__search-by-place-item">
                        <div class="search-by-place-img">
                            <a href="product-details.html"><img src="img/product-3/2.jpg" alt="#"/></a>
                            <div class="search-by-place-badge">
                                <ul>
                                    <li>5 Properties</li>
                                </ul>
                            </div>
                        </div>
                        <div class="search-by-place-info">
                            <h6><a href="locations.html">New York</a></h6>
                            <h4><a href="product-details.html">Pacific Heights Area</a></h4>
                            <div class="search-by-place-btn">
                                <a href="product-details.html">View Property <i class="flaticon-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="ltn__search-by-place-item">
                        <div class="search-by-place-img">
                            <a href="product-details.html"><img src="img/product-3/3.jpg" alt="#"/></a>
                            <div class="search-by-place-badge">
                                <ul>
                                    <li>9 Properties</li>
                                </ul>
                            </div>
                        </div>
                        <div class="search-by-place-info">
                            <h6><a href="locations.html">Sedona, Arizona</a></h6>
                            <h4><a href="product-details.html">Noe Valley Zones</a></h4>
                            <div class="search-by-place-btn">
                                <a href="product-details.html">View Property <i class="flaticon-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="ltn__search-by-place-item">
                        <div class="search-by-place-img">
                            <a href="product-details.html"><img src="img/product-3/2.jpg" alt="#"/></a>
                            <div class="search-by-place-badge">
                                <ul>
                                    <li>5 Properties</li>
                                </ul>
                            </div>
                        </div>
                        <div class="search-by-place-info">
                            <h6><a href="locations.html">New York</a></h6>
                            <h4><a href="product-details.html">Pacific Heights Area</a></h4>
                            <div class="search-by-place-btn">
                                <a href="product-details.html">View Property <i class="flaticon-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--  --> */}
            </div>
        </div>
    </div>
    {/* <!-- SEARCH BY PLACE AREA END -->

    <!-- SELECT AVAILABILITY AREA START --> */}
    <div class="select-availability-area pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2--- text-center---">
                        <h6 class="section-subtitle section-subtitle-2--- ltn__secondary-color">Avialable Spaces</h6>
                        <h1 class="section-title">Select Availability</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="ltn__select-availability-table-wrap">
                        <div class="ltn__select-availability-table d-none d-md-block">
                            <ul class="ltn__select-availability-table-head">
                                <li>Residence</li>
                                <li>Bedrooms</li>
                                <li>Bathroom</li>
                                <li>SQ.FT </li>
                                <li>Rent Price</li>
                                <li>Details</li>
                            </ul>
                            <ul class="ltn__select-availability-table-row">
                                <li class="tower-name">Tower Name</li>
                                <li>3</li>
                                <li>3</li>
                                <li>1,200 </li>
                                <li>$3,500</li>
                                <li><a href="product-details.html">+ Available</a></li>
                            </ul>
                            <ul class="ltn__select-availability-table-row">
                                <li class="tower-name">Tower Name</li>
                                <li>3</li>
                                <li>3</li>
                                <li>1,200 </li>
                                <li>$3,500</li>
                                <li><a href="product-details.html">+ Available</a></li>
                            </ul>
                            <ul class="ltn__select-availability-table-row">
                                <li class="tower-name">Tower Name</li>
                                <li>3</li>
                                <li>3</li>
                                <li>1,200 </li>
                                <li>$3,500</li>
                                <li><a href="product-details.html">+ Available</a></li>
                            </ul>
                            <ul class="ltn__select-availability-table-row">
                                <li class="tower-name">Tower Name</li>
                                <li>3</li>
                                <li>3</li>
                                <li>1,200 </li>
                                <li>$3,500</li>
                                <li><a href="product-details.html">+ Available</a></li>
                            </ul>
                            <ul class="ltn__select-availability-table-row">
                                <li class="tower-name">Tower Name</li>
                                <li>3</li>
                                <li>3</li>
                                <li>1,200 </li>
                                <li>$3,500</li>
                                <li><a href="product-details.html">+ Available</a></li>
                            </ul>
                            <ul class="ltn__select-availability-table-row">
                                <li class="tower-name">Tower Name</li>
                                <li>3</li>
                                <li>3</li>
                                <li>1,200 </li>
                                <li>$3,500</li>
                                <li><a href="product-details.html">+ Available</a></li>
                            </ul>
                            <ul class="ltn__select-availability-table-row">
                                <li class="tower-name">Tower Name</li>
                                <li>3</li>
                                <li>3</li>
                                <li>1,200 </li>
                                <li>$3,500</li>
                                <li><a href="product-details.html">+ Available</a></li>
                            </ul>
                            <ul class="ltn__select-availability-table-row">
                                <li class="tower-name">Tower Name</li>
                                <li>3</li>
                                <li>3</li>
                                <li>1,200 </li>
                                <li>$3,500</li>
                                <li><a href="product-details.html">+ Available</a></li>
                            </ul>
                        </div>
                        <div class="ltn__select-availability-table-responsive d-md-none">
                            <ul class="ltn__select-availability-table-row-responsive-item">
                                <li><span>Residence</span> <span class="tower-name">Tower Name</span></li>
                                <li><span>Bedrooms</span> <span>3</span></li>
                                <li><span>Bathroom</span> <span>3</span></li>
                                <li><span>SQ.FT</span> <span>1,200</span></li>
                                <li><span>Rent Price</span> <span>$3,500</span></li>
                                <li><span>Details</span> <span><a href="product-details.html">+ Available</a></span></li>
                            </ul>
                            <ul class="ltn__select-availability-table-row-responsive-item">
                                <li><span>Residence</span> <span class="tower-name">Tower Name</span></li>
                                <li><span>Bedrooms</span> <span>3</span></li>
                                <li><span>Bathroom</span> <span>3</span></li>
                                <li><span>SQ.FT</span> <span>1,200</span></li>
                                <li><span>Rent Price</span> <span>$3,500</span></li>
                                <li><span>Details</span> <span><a href="product-details.html">+ Available</a></span></li>
                            </ul>
                            <ul class="ltn__select-availability-table-row-responsive-item">
                                <li><span>Residence</span> <span class="tower-name">Tower Name</span></li>
                                <li><span>Bedrooms</span> <span>3</span></li>
                                <li><span>Bathroom</span> <span>3</span></li>
                                <li><span>SQ.FT</span> <span>1,200</span></li>
                                <li><span>Rent Price</span> <span>$3,500</span></li>
                                <li><span>Details</span> <span><a href="product-details.html">+ Available</a></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- SELECT AVAILABILITY AREA END -->

    <!-- NEIGHBOUR AREA START --> */}
    <div class="neighbour-area section-bg-1 pt-118 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2--- text-center---">
                        <h6 class="section-subtitle section-subtitle-2--- ltn__secondary-color">Explore Neighbour</h6>
                        <h1 class="section-title">What’s In Neighbour <br/>
                            Explore Below</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="ltn__neighbour-tab-wrap">
                        <div class="ltn__tab-menu ltn__tab-menu-3--- ltn__tab-menu-4 ltn__tab-menu-top-right-- text-uppercase--- text-center">
                            <div class="nav">
                                <a class="active show"  data-bs-toggle="tab" href="#liton_tab_4_1"><img src="img/neighbour/1.jpg" alt="#"/></a>
                                <a data-bs-toggle="tab" href="#liton_tab_4_2" class=""><img src="img/neighbour/2.jpg" alt="#"/></a>
                                <a data-bs-toggle="tab" href="#liton_tab_4_3" class=""><img src="img/neighbour/3.jpg" alt="#"/></a>
                            </div>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane fade active show" id="liton_tab_4_1">
                                <div class="ltn__neighbour-tab-content-inner">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="neighbour-apartments-img">
                                                <img src="img/neighbour/1.jpg" alt="#"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="ltn__search-by-place-item neighbour-apartments-item">
                                                <div class="search-by-place-img">
                                                    <a href="product-details.html"><img src="img/product-3/3.jpg" alt="#"/></a>
                                                    <div class="search-by-place-badge">
                                                        <ul>
                                                            <li>9 Properties</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="search-by-place-info">
                                                    <h4><a href="product-details.html">Shopping Center</a></h4>
                                                    <label><span class="ltn__secondary-color">1,500m </span>/ 21 min. walk</label>
                                                    <div class="search-by-place-brief">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore Enim
                                                            ullamco laboris.</p>
                                                    </div>
                                                    <div class="search-by-place-btn">
                                                        <a href="product-details.html">View Property <i class="flaticon-right-arrow"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="liton_tab_4_2">
                                <div class="ltn__neighbour-tab-content-inner">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="neighbour-apartments-img">
                                                <img src="img/neighbour/2.jpg" alt="#"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="ltn__search-by-place-item neighbour-apartments-item">
                                                <div class="search-by-place-img">
                                                    <a href="product-details.html"><img src="img/product-3/2.jpg" alt="#"/></a>
                                                    <div class="search-by-place-badge">
                                                        <ul>
                                                            <li>9 Properties</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="search-by-place-info">
                                                    <h4><a href="product-details.html">Medical Hospital</a></h4>
                                                    <label><span class="ltn__secondary-color">1,500m </span>/ 21 min. walk</label>
                                                    <div class="search-by-place-brief">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore Enim
                                                            ullamco laboris.</p>
                                                    </div>
                                                    <div class="search-by-place-btn">
                                                        <a href="product-details.html">View Property <i class="flaticon-right-arrow"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="liton_tab_4_3">
                                <div class="ltn__neighbour-tab-content-inner">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="neighbour-apartments-img">
                                                <img src="img/neighbour/3.jpg" alt="#"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="ltn__search-by-place-item neighbour-apartments-item">
                                                <div class="search-by-place-img">
                                                    <a href="product-details.html"><img src="img/product-3/4.jpg" alt="#"/></a>
                                                    <div class="search-by-place-badge">
                                                        <ul>
                                                            <li>9 Properties</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="search-by-place-info">
                                                    <h4><a href="product-details.html">Children Playland</a></h4>
                                                    <label><span class="ltn__secondary-color">1,500m </span>/ 21 min. walk</label>
                                                    <div class="search-by-place-brief">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit, sed do eiusmod tempor incididunt ut labore Enim
                                                            ullamco laboris.</p>
                                                    </div>
                                                    <div class="search-by-place-btn">
                                                        <a href="product-details.html">View Property <i class="flaticon-right-arrow"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ltn__faq-inner ltn__faq-inner-2 ltn__faq-inner-3">
                        <div class="row">
                            <div class="col-lg-6">
                                <div id="accordion_2">
                                    {/* <!-- card --> */}
                                    <div class="card">
                                        <h6 class="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
                                           <i class="flaticon-mortarboard"></i> University / College
                                        </h6>
                                        <div id="faq-item-2-1" class="collapse" data-bs-parent="#accordion_2">
                                            <div class="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card --> */}
                                    <div class="card">
                                        <h6 class="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="false"> 
                                           <i class="flaticon-hospital"></i> Medical Hospital
                                        </h6>
                                        <div id="faq-item-2-2" class="collapse show---" data-bs-parent="#accordion_2">
                                            <div class="card-body">
                                                <div class="ltn__video-img alignleft">
                                                    <img src="img/bg/17.jpg" alt="video popup bg image"/>
                                                    <a class="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----" href="https://www.youtube.com/embed/LjCzPp-MK48?autoplay=1&showinfo=0"  data-rel="lightcase:myCollection">
                                                        <i class="fa fa-play"></i>
                                                    </a>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>
                                            </div>
                                        </div>
                                    </div>                          
                                    {/* <!-- card --> */}
                                    <div class="card">
                                        <h6 class="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
                                           <i class="flaticon-metro"></i> Railway Station
                                        </h6>
                                        <div id="faq-item-2-3" class="collapse" data-bs-parent="#accordion_2">
                                            <div class="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--  --> */}
                                </div>                                
                            </div>
                            <div class="col-lg-6">
                                <div id="accordion_3">
                                    {/* <!-- card --> */}
                                    <div class="card">
                                        <h6 class="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-3-4" aria-expanded="false">
                                           <i class="flaticon-building"></i> Shopping Mall
                                        </h6>
                                        <div id="faq-item-3-4" class="collapse" data-bs-parent="#accordion_3">
                                            <div class="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card --> */}
                                    <div class="card">
                                        <h6 class="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-3-5" aria-expanded="false">
                                            <i class="flaticon-airplane"></i> Airport/Biman
                                        </h6>
                                        <div id="faq-item-3-5" class="collapse" data-bs-parent="#accordion_3">
                                            <div class="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card --> */}
                                    <div class="card">
                                        <h6 class="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-3-6" aria-expanded="false">
                                            <i class="flaticon-slider"></i> Children Playland
                                        </h6>
                                        <div id="faq-item-3-6" class="collapse" data-bs-parent="#accordion_3">
                                            <div class="card-body">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.</p>
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
    <div class="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2--- text-center">
                        <h6 class="section-subtitle section-subtitle-2--- ltn__secondary-color">Our Aminities</h6>
                        <h1 class="section-title">Building Aminities</h1>
                    </div>
                </div>
            </div>
            <div class="row ltn__category-slider-active--- slick-arrow-1 justify-content-center">
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                        <a href="shop.html">
                            <span class="category-icon"><i class="flaticon-car"></i></span>
                            <span class="category-number">01</span>
                            <span class="category-title">Parking Space</span>
                            <span class="category-brief">
                                Enimad minim veniam quis no exercitation ullamco lab
                            </span>
                            <span class="category-btn d-none"><i class="flaticon-right-arrow"></i></span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                        <a href="shop.html">
                            <span class="category-icon"><i class="flaticon-swimming"></i></span>
                            <span class="category-number">02</span>
                            <span class="category-title">Swimming Pool</span>
                            <span class="category-brief">
                                Enimad minim veniam quis no exercitation ullamco lab
                            </span>
                            <span class="category-btn d-none"><i class="flaticon-right-arrow"></i></span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                        <a href="shop.html">
                            <span class="category-icon"><i class="flaticon-secure-shield"></i></span>
                            <span class="category-number">03</span>
                            <span class="category-title">Private Security</span>
                            <span class="category-brief">
                                Enimad minim veniam quis no exercitation ullamco lab
                            </span>
                            <span class="category-btn d-none"><i class="flaticon-right-arrow"></i></span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                        <a href="shop.html">
                            <span class="category-icon"><i class="flaticon-stethoscope"></i></span>
                            <span class="category-number">04</span>
                            <span class="category-title">Medical Center</span>
                            <span class="category-brief">
                                Enimad minim veniam quis no exercitation ullamco lab
                            </span>
                            <span class="category-btn d-none"><i class="flaticon-right-arrow"></i></span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                        <a href="shop.html">
                            <span class="category-icon"><i class="flaticon-book"></i></span>
                            <span class="category-number">05</span>
                            <span class="category-title">Library Area</span>
                            <span class="category-brief">
                                Enimad minim veniam quis no exercitation ullamco lab
                            </span>
                            <span class="category-btn d-none"><i class="flaticon-right-arrow"></i></span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                        <a href="shop.html">
                            <span class="category-icon"><i class="flaticon-bed-1"></i></span>
                            <span class="category-number">06</span>
                            <span class="category-title">King Size Beds</span>
                            <span class="category-brief">
                                Enimad minim veniam quis no exercitation ullamco lab
                            </span>
                            <span class="category-btn d-none"><i class="flaticon-right-arrow"></i></span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                        <a href="shop.html">
                            <span class="category-icon"><i class="flaticon-home-2"></i></span>
                            <span class="category-number">07</span>
                            <span class="category-title">Smart Homes</span>
                            <span class="category-brief">
                                Enimad minim veniam quis no exercitation ullamco lab
                            </span>
                            <span class="category-btn d-none"><i class="flaticon-right-arrow"></i></span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
                        <a href="shop.html">
                            <span class="category-icon"><i class="flaticon-slider"></i></span>
                            <span class="category-number">08</span>
                            <span class="category-title">Kid’s Playland</span>
                            <span class="category-brief">
                                Enimad minim veniam quis no exercitation ullamco lab
                            </span>
                            <span class="category-btn d-none"><i class="flaticon-right-arrow"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- CATEGORY AREA END -->

    <!-- TESTIMONIAL AREA START (testimonial-8) --> */}
    <div class="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-65" data-bs-bg="img/bg/23.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2--- text-center---">
                        <h6 class="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Client,s Testimonial</h6>
                        <h1 class="section-title white-color">See What,s Our Client <br/>
                            Says About Us</h1>
                    </div>
                </div>
            </div>
            <div class="row ltn__testimonial-slider-6-active slick-arrow-3">
                <div class="col-lg-4">
                    <div class="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
                        <div class="ltn__testimoni-info">
                            <div class="ltn__testimoni-author-ratting">
                                <div class="ltn__testimoni-info-inner">
                                    <div class="ltn__testimoni-img">
                                        <img src="img/testimonial/1.jpg" alt="#"/>
                                    </div>
                                    <div class="ltn__testimoni-name-designation">
                                        <h5>Jacob William</h5>
                                        <label>Selling Agents</label>
                                    </div>
                                </div>
                                <div class="ltn__testimoni-rating">
                                    <div class="product-ratting">
                                        <ul>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p> 
                                Precious ipsum dolor sit amet
                                consectetur adipisicing elit, sed dos
                                mod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad min
                                veniam, quis nostrud Precious ips
                                um dolor sit amet, consecte</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
                        <div class="ltn__testimoni-info">
                            <div class="ltn__testimoni-author-ratting">
                                <div class="ltn__testimoni-info-inner">
                                    <div class="ltn__testimoni-img">
                                        <img src="img/testimonial/2.jpg" alt="#"/>
                                    </div>
                                    <div class="ltn__testimoni-name-designation">
                                        <h5>Kelian Anderson</h5>
                                        <label>Selling Agents</label>
                                    </div>
                                </div>
                                <div class="ltn__testimoni-rating">
                                    <div class="product-ratting">
                                        <ul>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p> 
                                Precious ipsum dolor sit amet
                                consectetur adipisicing elit, sed dos
                                mod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad min
                                veniam, quis nostrud Precious ips
                                um dolor sit amet, consecte</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
                        <div class="ltn__testimoni-info">
                            <div class="ltn__testimoni-author-ratting">
                                <div class="ltn__testimoni-info-inner">
                                    <div class="ltn__testimoni-img">
                                        <img src="img/testimonial/3.jpg" alt="#"/>
                                    </div>
                                    <div class="ltn__testimoni-name-designation">
                                        <h5>Adam Joseph</h5>
                                        <label>Selling Agents</label>
                                    </div>
                                </div>
                                <div class="ltn__testimoni-rating">
                                    <div class="product-ratting">
                                        <ul>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p> 
                                Precious ipsum dolor sit amet
                                consectetur adipisicing elit, sed dos
                                mod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad min
                                veniam, quis nostrud Precious ips
                                um dolor sit amet, consecte</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
                        <div class="ltn__testimoni-info">
                            <div class="ltn__testimoni-author-ratting">
                                <div class="ltn__testimoni-info-inner">
                                    <div class="ltn__testimoni-img">
                                        <img src="img/testimonial/4.jpg" alt="#"/>
                                    </div>
                                    <div class="ltn__testimoni-name-designation">
                                        <h5>James Carter</h5>
                                        <label>Selling Agents</label>
                                    </div>
                                </div>
                                <div class="ltn__testimoni-rating">
                                    <div class="product-ratting">
                                        <ul>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            <li><a href="#"><i class="fas fa-star"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p> 
                                Precious ipsum dolor sit amet
                                consectetur adipisicing elit, sed dos
                                mod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad min
                                veniam, quis nostrud Precious ips
                                um dolor sit amet, consecte</p>
                        </div>
                    </div>
                </div>
                {/* <!--  --> */}
            </div>
        </div>
    </div>
    {/* <!-- TESTIMONIAL AREA END -->

    <!-- BLOG AREA START (blog-3) --> */}
    <div class="ltn__blog-area pt-115--- pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-area ltn__section-title-2--- text-center">
                        <h6 class="section-subtitle section-subtitle-2--- ltn__secondary-color">News & Blogs</h6>
                        <h1 class="section-title">Leatest News Feeds</h1>
                    </div>
                </div>
            </div>
            <div class="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
                {/* <!-- Blog Item --> */}
                <div class="col-lg-12">
                    <div class="ltn__blog-item ltn__blog-item-3">
                        <div class="ltn__blog-img">
                            <a href="blog-details.html"><img src="img/blog/1.jpg" alt="#"/></a>
                        </div>
                        <div class="ltn__blog-brief">
                            <div class="ltn__blog-meta">
                                <ul>
                                    <li class="ltn__blog-author">
                                        <a href="#"><i class="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li class="ltn__blog-tags">
                                        <a href="#"><i class="fas fa-tags"></i>Decorate</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 class="ltn__blog-title"><a href="blog-details.html">10 Brilliant Ways To Decorate Your Home</a></h3>
                            <div class="ltn__blog-meta-btn">
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="far fa-calendar-alt"></i>June 24, 2021</li>
                                    </ul>
                                </div>
                                <div class="ltn__blog-btn">
                                    <a href="blog-details.html">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Blog Item --> */}
                <div class="col-lg-12">
                    <div class="ltn__blog-item ltn__blog-item-3">
                        <div class="ltn__blog-img">
                            <a href="blog-details.html"><img src="img/blog/2.jpg" alt="#"/></a>
                        </div>
                        <div class="ltn__blog-brief">
                            <div class="ltn__blog-meta">
                                <ul>
                                    <li class="ltn__blog-author">
                                        <a href="#"><i class="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li class="ltn__blog-tags">
                                        <a href="#"><i class="fas fa-tags"></i>Interior</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 class="ltn__blog-title"><a href="blog-details.html">The Most Inspiring Interior Design Of 2021</a></h3>
                            <div class="ltn__blog-meta-btn">
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="far fa-calendar-alt"></i>July 23, 2021</li>
                                    </ul>
                                </div>
                                <div class="ltn__blog-btn">
                                    <a href="blog-details.html">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Blog Item --> */}
                <div class="col-lg-12">
                    <div class="ltn__blog-item ltn__blog-item-3">
                        <div class="ltn__blog-img">
                            <a href="blog-details.html"><img src="img/blog/3.jpg" alt="#"/></a>
                        </div>
                        <div class="ltn__blog-brief">
                            <div class="ltn__blog-meta">
                                <ul>
                                    <li class="ltn__blog-author">
                                        <a href="#"><i class="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li class="ltn__blog-tags">
                                        <a href="#"><i class="fas fa-tags"></i>Estate</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 class="ltn__blog-title"><a href="blog-details.html">Recent Commercial Real Estate Transactions</a></h3>
                            <div class="ltn__blog-meta-btn">
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="far fa-calendar-alt"></i>May 22, 2021</li>
                                    </ul>
                                </div>
                                <div class="ltn__blog-btn">
                                    <a href="blog-details.html">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Blog Item --> */}
                <div class="col-lg-12">
                    <div class="ltn__blog-item ltn__blog-item-3">
                        <div class="ltn__blog-img">
                            <a href="blog-details.html"><img src="img/blog/4.jpg" alt="#"/></a>
                        </div>
                        <div class="ltn__blog-brief">
                            <div class="ltn__blog-meta">
                                <ul>
                                    <li class="ltn__blog-author">
                                        <a href="#"><i class="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li class="ltn__blog-tags">
                                        <a href="#"><i class="fas fa-tags"></i>Room</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 class="ltn__blog-title"><a href="blog-details.html">Renovating a Living Room? Experts Share Their Secrets</a></h3>
                            <div class="ltn__blog-meta-btn">
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="far fa-calendar-alt"></i>June 24, 2021</li>
                                    </ul>
                                </div>
                                <div class="ltn__blog-btn">
                                    <a href="blog-details.html">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Blog Item --> */}
                <div class="col-lg-12">
                    <div class="ltn__blog-item ltn__blog-item-3">
                        <div class="ltn__blog-img">
                            <a href="blog-details.html"><img src="img/blog/5.jpg" alt="#"/></a>
                        </div>
                        <div class="ltn__blog-brief">
                            <div class="ltn__blog-meta">
                                <ul>
                                    <li class="ltn__blog-author">
                                        <a href="#"><i class="far fa-user"></i>by: Admin</a>
                                    </li>
                                    <li class="ltn__blog-tags">
                                        <a href="#"><i class="fas fa-tags"></i>Trends</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 class="ltn__blog-title"><a href="blog-details.html">7 home trends that will shape your house in 2021</a></h3>
                            <div class="ltn__blog-meta-btn">
                                <div class="ltn__blog-meta">
                                    <ul>
                                        <li class="ltn__blog-date"><i class="far fa-calendar-alt"></i>June 24, 2021</li>
                                    </ul>
                                </div>
                                <div class="ltn__blog-btn">
                                    <a href="blog-details.html">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--  --> */}
            </div>
        </div>
    </div>
    {/* <!-- BLOG AREA END -->

    <!-- CALL TO ACTION START (call-to-action-6) --> */}
    <div class="ltn__call-to-action-area call-to-action-6 before-bg-bottom" data-bs-bg="img/1.jpg--">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                        <div class="coll-to-info text-color-white">
                            <h1>Looking for a dream home?</h1>
                            <p>We help you make the dream of new house a reality</p>
                        </div>
                        <div class="btn-wrapper">
                            <a class="btn btn-effect-3 btn-white" href="contact.html">Explore Properties <i class="icon-next"></i></a>
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
  const filePath = path.join(process.cwd(), "src/data/hero/", "index.json");
  const data = JSON.parse(await fs.readFile(filePath));

  return {
    props: {
      data,
    },
  };
}
export default HomeVersion2;
