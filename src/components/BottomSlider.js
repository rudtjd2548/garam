import React, { Component } from "react";
import Slider from 'react-slick'
import Sstyles from "../../styles/components/slider.scss"
import "../assets/images/bottomLogo/bottom_logo01.gif"
import "../assets/images/bottomLogo/bottom_logo02.gif"
import "../assets/images/bottomLogo/bottom_logo03.gif"
import "../assets/images/bottomLogo/bottom_logo04.gif"
import "../assets/images/bottomLogo/bottom_logo05.gif"
import "../assets/images/bottomLogo/bottom_logo06.gif"
import "../assets/images/bottomLogo/bottom_logo07.gif"
import "../assets/images/bottomLogo/bottom_logo08.gif"
import "../assets/images/bottomLogo/bottom_logo09.gif"
import "../assets/images/bottomLogo/bottom_logo10.gif"
import "../assets/images/bottomLogo/bottom_logo11.gif"
import "../assets/images/bottomLogo/bottom_logo12.gif"
import "../assets/images/bottomLogo/bottom_logo13.gif"
import "../assets/images/bottomLogo/bottom_logo14.gif"
import "../assets/images/bottomLogo/bottom_logo15.gif"

export default class Slider1 extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      variableWidth: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={Sstyles.Swrap}>
        <Slider {...settings}>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo01.gif" alt="오뚜기" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo02.gif" alt="롯데삼강" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo03.gif" alt="동서식품" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo04.gif" alt="씨제이" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo05.gif" alt="부산어묵" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo06.gif" alt="곰표" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo07.gif" alt="미원" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo08.gif" alt="대상선" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo09.gif" alt="면나라" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo10.gif" alt="해표" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo11.gif" alt="해찬들" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo12.gif" alt="진주햄" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo13.gif" alt="사골김" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo14.gif" alt="샘표" />
          </div>
          <div className={Sstyles.Sbox}>
            <img src="../assets/images/bottomLogo/bottom_logo15.gif" alt="사조" />
          </div>
        </Slider>
      </div>
    );
  }
}
