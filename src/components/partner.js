import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faHome);
import Pstyles from "../../styles/components/partner.scss"
import "../assets/images/foodType/korean.jpg"
import "../assets/images/foodType/japanese.jpg"
import "../assets/images/foodType/chinese.jpg"
import "../assets/images/foodType/western.jpg"
import "../assets/images/foodType/bunsik.jpg"

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

export default class About extends Component {
  render () {
    var style1 = {backgroundImage: `url('../../assets/images/foodType/korean.jpg')`}
    var style2 = {backgroundImage: `url('../../assets/images/foodType/japanese.jpg')`}
    var style3 = {backgroundImage: `url('../../assets/images/foodType/chinese.jpg')`}
    var style4 = {backgroundImage: `url('../../assets/images/foodType/western.jpg')`}
    var style5 = {backgroundImage: `url('../../assets/images/foodType/bunsik.jpg')`}
    return (
        <div className={Pstyles.partnerWrap}>
          <ScrollToTopOnMount/>
          <h4>
            <NavLink to="/" className={Pstyles.Elink}>
              <FontAwesomeIcon icon="home"/>
            </NavLink>
            <strong> >> </strong><b>거래업종</b>
          </h4>
          <ul>
            <li>
              <div className={Pstyles.octagon}>
                <div className={Pstyles.inner}>
                  <div className={Pstyles.pics} style={style1} />
                </div>
              </div>
              <div className={Pstyles.ingrediants}>
                <h4>한식</h4>
                <h5>고추장 고춧가루 된장 간장 조미료 통조림 안주류 스낵류
                소스 절임류 식초 건어물 건채류 면류 기타 등</h5>
              </div>
            </li>
            <li>
              <div className={Pstyles.octagon}>
                <div className={Pstyles.inner}>
                  <div className={Pstyles.pics} style={style2} />
                </div>
              </div>
              <div className={Pstyles.ingrediants}>
                <h4>일식</h4>
                <h5>일식 소스 드레싱 쯔유 간장 된장 국물용 소스 라멘스프 낫또
                조미료 향신료 가쯔오 절임류 와사비 냉동/냉장 면류/소바 카레 기타 등</h5>
              </div>
            </li>
            <li>
              <div className={Pstyles.octagon}>
                <div className={Pstyles.inner}>
                  <div className={Pstyles.pics} style={style3} />
                </div>
              </div>
              <div className={Pstyles.ingrediants}>
                <h4>중식</h4>
                <h5>소스 드레싱 간장 된장 중화소스 딤섬 두반장 노두유 짜사이
                조미료 향신료 절임류 냉동/냉장 면류 기타 등</h5>
              </div>
            </li>
            <li>
              <div className={Pstyles.octagon}>
                <div className={Pstyles.inner}>
                  <div className={Pstyles.pics} style={style4} />
                </div>
              </div>
              <div className={Pstyles.ingrediants}>
                <h4>양식</h4>
                <h5>향신료 조미료 소스류 치즈 버터 절임류 파스타 오일 식초 꿀 시럽 잼
                제빵/제과재료 견과류 통조림 햄 소세지 베이컨 드레싱 디저트 샐러드 등</h5>
              </div>
            </li>
            <li>
              <div className={Pstyles.octagon}>
                <div className={Pstyles.inner}>
                  <div className={Pstyles.pics} style={style5} />
                </div>
              </div>
              <div className={Pstyles.ingrediants}>
                <h4>분식</h4>
                <h5>분식소스 간장 된장 고추장 햄 런천미트 순대 오뎅/어묵
                쌀떡/밀떡 조미료 향신료 절임류 냉동/냉장 면류 등 </h5>
              </div>
            </li>
          </ul>
        </div>
      )
  }
}
