import React, {Component} from 'react'
import phoneStyle from '../../styles/components/phoneNumber.scss'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHandPointRight, faHandPointLeft } from '@fortawesome/fontawesome-free-regular'
fontawesome.library.add(faHandPointRight, faHandPointLeft);
class phoneNumber extends Component {
  render() {
    return (
      <div className={phoneStyle.phoneWrap}>
        <p><a href="tel:1577-5709">
          바로연결 : <span>1577-5709</span>
        </a></p>
      </div>
    )
  }
}

export default phoneNumber
