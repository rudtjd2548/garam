import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Fstyles from "../../../styles/nav/footer.scss"
import DialogExampleAlert from '../policy'

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

export default class Footer extends Component {
  render () {
    return (
        <div className={Fstyles.footWrap}>
          <div className={Fstyles.topUl}>
            <ul>
              <li><b>INFORMATION</b></li>
              <li>상호명: (주)참가람식자재</li>
              <li>대표자명: 김현규</li>
              <li>주소: 남양주시 진건읍 용정리 301</li>
              <li>대표전화: 1577-5709</li>
              <li>팩스번호: 031-529-1708</li>
            </ul>
            <ul>
              <li><b>LICENCE</b></li>
              <li>사업자등록번호: 126-86-66647</li>
            </ul>
            <ul>
              <li><b>WEB MASTER</b></li>
              <li>e-mail: khg1659@hanmail.net</li>
              <li>개인정보보호정책 책임자: 김현규</li>
            </ul>
            <ul>
              <li><b>BANK INFO</b></li>
              <li>은행명: IBK 기업은행</li>
              <li>계좌번호: 010-1577-5709</li>
              <li>예금주: 참가람식품 김현규</li>
            </ul>
          </div>

          <div className={Fstyles.yellowBg}>
            <ScrollToTopOnMount/>
            <div className={Fstyles.bottomUl}>
              <ul>
                <li><NavLink to="/" className={Fstyles.Flink}>홈</NavLink></li>
                <li><NavLink to="/page/about" className={Fstyles.Flink}>회사소개</NavLink></li>
                <li><DialogExampleAlert /></li>
                <li><NavLink to="/page/contactUs" className={Fstyles.Flink}>구매문의</NavLink></li>
              </ul>
            </div>
          </div>

          <div className={Fstyles.copyRight}>
            <p>Copyright(c) by garamfood All Rights Reserved.</p>
          </div>

        </div>
      )
  }
}
