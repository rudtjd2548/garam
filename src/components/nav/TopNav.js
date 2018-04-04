import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
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
  	        <a href="/">
  		      <img src={logo} className={styles.logo} />
  		    </a>
  		  </div>

	      <DrawerUndocked />

  		  <div className={styles.NavMenu}>
    	    <ul>
    	   	  <li><NavLink to="/page/emailForm"><strong><FontAwesomeIcon icon="user"/></strong>견적문의</NavLink></li>
            <li><NavLink to="/page/IntroCompany"><strong><FontAwesomeIcon icon="id-card"/></strong>회사소개</NavLink></li>
            <li><NavLink to="/page"><strong><FontAwesomeIcon icon="map-marker-alt"/></strong>찾아오시는 길</NavLink></li>
  	  	  	<li><a href="#"><strong><FontAwesomeIcon icon="globe"/></strong>English</a></li>
  		    </ul>
  		  </div>
  		</div>
	  </div>
  	)
  }
  
}