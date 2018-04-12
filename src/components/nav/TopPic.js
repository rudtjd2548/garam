import React, {Component} from 'react';
import Tstyles from "../../../styles/nav/TopPic.scss"
import '../../assets/images/page/contactUs.jpg'
import '../../assets/images/page/about.jpg'
import '../../assets/images/page/findUs.jpg'
import '../../assets/images/page/partner.jpg'

export default class TopPic extends Component {
	render () {
    var styles = {
      backgroundImage: `url('../../assets/images${location.pathname}.jpg')`
    }
		return (
	  	  <div className={Tstyles.Twrapper}>
	  	  	<div className={Tstyles.TimgBox} style={styles} />
					<h1>
						문 의 전 화<br />
						<a href="tel:1577-5709">1577-5709</a>
					</h1>
	  	  </div>
	  	)
	}
}
