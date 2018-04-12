import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import IBstyle from '../../styles/components/imgBoard.scss'
import '../assets/images/foodBoard.jpg'

class imgBoard extends Component {


  render() {
    var styles = {
      backgroundImage: `url('../assets/images/foodBoard.jpg')`
    }
    return (
      <div className={IBstyle.IBWrap} style={styles}>
        <h1>참가람에 견적문의 하러가기</h1>
        <h4>"저희와 최고의 파트너가 되어주십시오."</h4>
        <div>
          <Link to="/page/contactUs">문의하기</Link>
        </div>
      </div>
    )
  }
}

export default imgBoard
