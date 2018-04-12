import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Lstyles from "../../../styles/nav/LeftNav.scss"

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faPhoneSquare);

const activeStyle = {
				color: '#111',
        fontSize: '2rem',
				backgroundColor: '#FBFBFB'
    };

export default class LeftNav extends Component {
	render () {
		return (
	  	  <div className={Lstyles.Lwrapper}>
	  	  	<ul>
	  	  		<li>
		  	  		<NavLink
								to="/page/about"
								className={Lstyles.Llink}
								activeStyle={activeStyle}
							>
		  	  			회사소개
		  	  		</NavLink>
	  	  		</li>
	  	  		<li>
		  	  		<NavLink
								to="/page/partner"
								className={Lstyles.Llink}
								activeStyle={activeStyle}
							>
		  	  			거래업종
		  	  		</NavLink>
	  	  		</li>
	  	  		<li>
		  	  		<NavLink
								to="/page/contactUs"
								className={Lstyles.Llink}
								activeStyle={activeStyle}
							>
		  	  			견적 및 기타 문의
		  	  		</NavLink>
	  	  		</li>
	  	  		<li>
		  	  		<NavLink
								to="/page/findUs"
								className={Lstyles.Llink}
								activeStyle={activeStyle}
							>
		  	  			찾아오시는 길
		  	  		</NavLink>
	  	  		</li>
	  	  		<li className={Lstyles.Lcontact}>
	  	  			<h1>참가람 고객센터</h1>
  	  				<h2>
  	  					<FontAwesomeIcon icon="phone-square"/> 1577 - 5709 <FontAwesomeIcon icon="phone-square"/>
  	  				</h2>
	  	  		</li>
	  	  	</ul>
	  	  </div>
	  	)
	}
}
