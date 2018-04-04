import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Lstyles from "../../../styles/nav/LeftNav.scss"
import Radium, {StyleRoot} from 'radium';
import pulse from 'react-animations/lib/pulse'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faPhoneSquare);

const styles = {
  pulse: {
    animation: 'x 5s',
	animationName: Radium.keyframes(pulse, 'pulse')
  }
};

export default class LeftNav extends Component {
	render () {
		return (
	  	  <div className={Lstyles.Lwrapper}>
	  	  	<ul>
	  	  		<li>
		  	  		<NavLink to="/page/IntroCompany" className={Lstyles.Llink}>
		  	  			회사소개
		  	  		</NavLink>
	  	  		</li>
	  	  		<li>
		  	  		<NavLink to="/page/emailForm" className={Lstyles.Llink}>
		  	  			견적 및 기타 문의
		  	  		</NavLink>
	  	  		</li>
	  	  		<li>
		  	  		<NavLink to="/page" className={Lstyles.Llink}>
		  	  			찾아오시는 길
		  	  		</NavLink>
	  	  		</li>
	  	  		<li className={Lstyles.Lcontact}>
	  	  			<h1>가람푸드 고객센터</h1>
    				<StyleRoot>
	  	  				<h2 style={styles.pulse}>
	  	  					<FontAwesomeIcon icon="phone-square"/> 1577 - 5709 <FontAwesomeIcon icon="phone-square"/>
	  	  				</h2>
    				</StyleRoot>
	  	  		</li>
	  	  	</ul>
	  	  </div>
	  	)
	}
}