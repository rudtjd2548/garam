import React, {Component} from 'react'
import HowStyle from '../../styles/components/howtoServe.scss'
import Market from '../assets/images/market.png'
import Garam from '../assets/images/garam.png'
import Restaurant from '../assets/images/restaurant.png'

class howtoServe extends Component {
  render() {
    return (
      <div className={HowStyle.Howwrap}>
        <h1>어떻게 고객님들께 전달되나요?</h1>
        <div className={HowStyle.textBox}>
          <div>
            <span><img src={Market} alt="마켓 아이콘" /></span>
            <h4>MARKET</h4>
            <h5><b>가락시장 및 구리시장</b></h5>
            <h5>매일 새벽 경매된 신선한 식재료를 저렴하게 매입합니다.</h5>
          </div>
          <div>
            <span><img src={Garam} alt="식자재창고 아이콘" /></span>
            <h4>GARAMFOOD</h4>
            <h5><b>식자재창고</b></h5>
            <h5>신선한 식재료 및 공산품을 각 거래처별로 포장합니다.</h5>
          </div>
          <div>
            <span><img src={Restaurant} alt="거래처 아이콘" /></span>
            <h4>RESTAURANT</h4>
            <h5><b>거래처</b></h5>
            <h5>주문하신 물건이 다음날 새벽부터 차례차례 배송됩니다.</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default howtoServe
