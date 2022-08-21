import React from "react";
import Slider from "react-slick";
import clubWulf from "../images/clubwuf.png";
import ncibau from "../images/ncibau.png";
import ndental from "../images/ndental.png";
import nfisiovet from "../images/nfisiovet.png";
import nhills from "../images/nhills.png";
import nkoning from "../images/nkoning.png";
import nmio from "../images/nmio.png";
import npetid from "../images/npetid.png";
import nvetlife from "../images/nvetlife.png";
import nvetoch from "../images/nvetoch.png";

const AlliesSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 476,
        settings: {
          slidesToShow: 2,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
    ],
  };
  return (
    <div className="allies">
      <img className="allies__logo" src={clubWulf} alt="club wulf logo" />
      <h2 className="allies__h2">
        {" "}
        NUESTROS ALIADOS EN LA SALUD DE TU MASCOTA{" "}
      </h2>
      <div className="allies__slider">
        <Slider {...settings}>
          <img className="allies__image" src={ncibau} alt="cibau logo" />
          <img className="allies__image" src={ndental} alt="dental logo" />
          <img className="allies__image" src={nfisiovet} alt="fisiovet logo" />
          <img className="allies__image" src={nhills} alt="hills logo" />
          <img className="allies__image" src={nkoning} alt="koning logo" />
          <img className="allies__image" src={nmio} alt="mio logo" />
          <img className="allies__image" src={npetid} alt="petid logo" />
          <img className="allies__image" src={nvetlife} alt="vetlife logo" />
          <img className="allies__image" src={nvetoch} alt="vetoch logo" />
        </Slider>
      </div>
    </div>
  );
};

export default AlliesSlider;
