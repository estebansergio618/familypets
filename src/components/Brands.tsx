import React from "react";
import Slider from "react-slick";
import clubWulf from "../assets/images/clubwuf.webp";
import ncibau from "../assets/images/ncibau.webp";
import ndental from "../assets/images/ndental.webp";
import nfisiovet from "../assets/images/nfisiovet.webp";
import nhills from "../assets/images/nhills.webp";
import nkoning from "../assets/images/nkoning.webp";
import nmio from "../assets/images/nmio.webp";
import npetid from "../assets/images/npetid.webp";
import nvetlife from "../assets/images/nvetlife.webp";
import nvetoch from "../assets/images/nvetoch.webp";

const Brands = () => {
  const settings = {
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
    <div className="brands">
      <img className="brands__logo" src={clubWulf} alt="club wulf logo" />
      <h2 className="brands__h2">
        {" "}
        NUESTROS ALIADOS EN LA SALUD DE TU MASCOTA{" "}
      </h2>
      <div className="brands__slider">
        <Slider {...settings}>
          <img className="brands__image" src={ncibau} alt="cibau logo" />
          <img className="brands__image" src={ndental} alt="dental logo" />
          <img className="brands__image" src={nfisiovet} alt="fisiovet logo" />
          <img className="brands__image" src={nhills} alt="hills logo" />
          <img className="brands__image" src={nkoning} alt="koning logo" />
          <img className="brands__image" src={nmio} alt="mio logo" />
          <img className="brands__image" src={npetid} alt="petid logo" />
          <img className="brands__image" src={nvetlife} alt="vetlife logo" />
          <img className="brands__image" src={nvetoch} alt="vetoch logo" />
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
