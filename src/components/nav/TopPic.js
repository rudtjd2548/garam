import React, {Component} from 'react';
import Tstyles from "../../../styles/nav/TopPic.scss"
import contactUsImg from '../../assets/images/contactUs.jpg'

const bg = {
  contactUsImg: {
    background: `url(${contactUsImg})` + "no-repeat center center",
    backgroundSize: "cover"
  }
}
export default class TopPic extends Component {
	render () {
		return (
	  	  <div className={Tstyles.Twrapper}>
	  	  	<div className={Tstyles.TimgBox} style={bg.contactUsImg}>
	  	  		아아
	  	  	</div>
	  	  </div>
	  	)
	}
}