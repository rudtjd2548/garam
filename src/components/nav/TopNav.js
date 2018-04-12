import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {bootstrapUtils, Nav, Navbar, NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap';
import logo from '../../assets/images/logo.png'
import styles from "../../../styles/nav/TopNav.scss"
import DrawerUndocked from './DrawerNav'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUser, faIdCard, faGlobe, faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faUser, faIdCard, faGlobe, faMapMarkerAlt);

export default class TopNav extends Component {
  render() {
  	return (
  	  <div className={styles.NavFrame}>
  	  	<div className={styles.Navbar}>

  	  	  <div className={styles.logoBox}>
  	        <Link to="/">
  		        <img src={logo} className={styles.logo} />
            </Link>
  		    </div>

  	      <DrawerUndocked />

    		  <div className={styles.NavMenu}>
      	    <ul>
              <li><Link to="/page/about"><strong><FontAwesomeIcon icon="id-card"/></strong>회사소개</Link></li>
              <li><Link to="/page/partner"><strong><FontAwesomeIcon icon="id-card"/></strong>거래업종</Link></li>
        	   	  <li><Link to="/page/contactUs"><strong><FontAwesomeIcon icon="user"/></strong>견적문의</Link></li>
              <li><Link to="/page/findUs"><strong><FontAwesomeIcon icon="map-marker-alt"/></strong>찾아오시는 길</Link></li>
    		    </ul>
  		    </div>

  	  	</div>
	    </div>
  	)
  }
}
