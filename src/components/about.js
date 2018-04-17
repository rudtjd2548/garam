import React, {Component} from 'react';
import Astyles from "../../styles/components/about.scss"
import ceoImg from '../assets/images/ceo_large.jpg'
import { NavLink } from 'react-router-dom'
import DocumentMeta from 'react-document-meta';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faHome);

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
    const meta = {
      title: '참가람 회사소개',
      description: '참가람은 부산어묵 서울총판을 모태로 시작, 십여년의 정직한 땀방울이 모여 지금의 종합식재료업체로 성장했습니다. 참가람식자재는 부산어묵 서울총판을 필두로 하는 왕도매로 식자재사장님께 납품드리고 있습니다. 참가람식자재는 각종 농,수,축,공산품을 유통하여 각 식당사장님들께 납품드리고 있습니다.',
      canonical: 'http://garamfood.org/page/about',
      meta: {
        charset: 'utf-8',
        name: {
          title: '참가람 회사소개'
        }
      }
    };
    return (
      <DocumentMeta {...meta}>
        <div className={Astyles.aboutWrap}>
          <ScrollToTopOnMount/>
          <h4>
            <NavLink to="/" className={Astyles.Elink}>
              <FontAwesomeIcon icon="home"/>
            </NavLink>
            <strong> >> </strong><b>회사소개</b>
          </h4>
          <h2>건강한 식재료를 정직한 단가, 성실한 배송으로</h2>
          <h1>고객성공을 견인할 것을 약속드립니다.</h1>
          <img src={ceoImg} alt="대표이미지" />
          <div>
            <h3>안녕하십니까</h3>
            <h4>참가람식자재 홈페이지를 방문해주셔서 감사드립니다.</h4>
            <h5>
              <b>참가람식자재는 </b>
              부산어묵 서울총판을 모태로 시작, 십여년의 정직한 땀방울이 모여 지금의 종합식재료업체로 성장했습니다.
              참가람식자재는 부산어묵 서울총판을 필두로 하는 왕도매로 식자재사장님께 납품드리고 있습니다.
              참가람식자재는 각종 농,수,축,공산품을 유통하여 각 식당사장님들께 납품드리고 있습니다.
              <br /><br />
              정직한 단가, 성실한 배송, 최상의 서비스를 모티브로하여 다양한 품목의 식자재를 정직한 단가로 제공해 드리며
              당일 경매된 신선한 농, 수산 식재료를 고객 여러분께 저렴하게 유통, 납품하고 있습니다.
              믿을 수 있는 식재료, 365일 신선한 식재료를 참가람식자재를 믿고 주문해 주시기 바랍니다.<br /><br />
              감사합니다.<i>참가람식자재 대표 김현규</i>
            </h5>
          </div>
        </div>
      </DocumentMeta>
      )
  }
}
