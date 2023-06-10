import { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";

import { FaPlay, FaHome } from "react-icons/fa";

function HeroSectionStyleOne({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <div className="ltn__slider-area ltn__slider-3  section-bg-1">
        <Slider
          ref={setSliderRef}
          className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1"
          {...settings}
        >
          {data.map((item) => {
            return (
              <div
                className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3"
                key={item.id}
              >
                <div className="ltn__slide-item-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <div className="slide-item-info">
                          <div className="slide-item-info-inner ltn__slide-animation">
                            <h6 className="slide-sub-title white-color--- animated">
                              <span>
                                <FaHome />
                              </span>
                              {item.subtitle}
                            </h6>
                            <h1 className="slide-title animated ">
                              {item.Title}
                            </h1>
                            <div className="slide-brief animated">
                              <p>{item.Desc}</p>
                            </div>
                            <div className="btn-wrapper animated d-flex">
                              <Link
                                href="about.html"
                                className="theme-btn-1 btn btn-effect-1"
                              >
                                {item.buttonText}
                              </Link>

                              {item.videoButton ? (
                                <Link
                                  className="ltn__video-play-btn bg-white d-flex align-items-center justify-content-center"
                                  href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&amp;showinfo=0"
                                  data-rel="lightcase"
                                >
                                  {/* <i className="icon-play  ltn__secondary-color"></i> */}
                                  <FaPlay className="icon-play  ltn__secondary-color" />
                                </Link>
                              ) : (
                                <Link
                                  href="#"
                                  className="btn btn-transparent btn-effect-3"
                                >
                                  {item.learnMoreButtonText}
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="slide-item-img">
                          <img src="img/slider/21.png" alt="#" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div style={{ textAlign: "center" }}>
            <button onClick={sliderRef?.slickPrev}>textPrev</button>
            <button onClick={sliderRef?.slickNext}>Next</button>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default HeroSectionStyleOne;
