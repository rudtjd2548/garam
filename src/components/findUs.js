import React, {Component} from 'react';
import Fstyles from "../../styles/components/findUs.scss"
import { NavLink } from 'react-router-dom'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/fontawesome-free-solid'
import { MapWithControlledZoom } from './googleMap'
fontawesome.library.add(faHome);

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

export default class findUs extends Component {
  render () {
    return (
        <div className={Fstyles.findUsWrap}>
          <ScrollToTopOnMount/>
          <h4>
            <NavLink to="/" className={Fstyles.Elink}>
              <FontAwesomeIcon icon="home"/>
            </NavLink>
            <strong> >> </strong><b>찾아오시는 길</b>
          </h4>
          <h2>참가람식자재 찾아오시는 길</h2>
          <div className={Fstyles.underMapSize}>
            <MapWithControlledZoom />
            <div className={Fstyles.leftBox}>
              <h3>
                <big>일반 주소 : </big><br />경기도 남양주시 진건읍 용정리 301번지<br />
                <big>도로명 주소: </big><br />경기도 남양주시 진건읍 진건우회로 242번길 6-94<br />
              </h3>
              <h5>
                FAX : 031-529-1709<br />
                E-mail : khg1659@hanmail.net
              </h5>
            </div>
            <div className={Fstyles.rightBox}>
              <h5>
                입금계좌 안내
              </h5>
              <h6>
                <b>IBK 기업은행</b><br />
                010-1577-5709<br />
                예금주 : 참가람식품 김현규
              </h6>
            </div>

          </div>
        </div>
      )
  }
}
