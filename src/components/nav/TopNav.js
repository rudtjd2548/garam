import React, {Component} from 'react';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';
import {bootstrapUtils, Nav, Navbar, NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap';
import logo from '../../assets/images/logo.png'
import styles from "../../../styles/nav/TopNav.scss"
import DrawerUndocked from './DrawerNav'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUser, faIdCard, faGlobe, faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faUser, faIdCard, faGlobe, faMapMarkerAlt);

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import IMenuItem from 'material-ui/MenuItem';


const IconMenuScrollable = () => (
  <MuiThemeProvider>
  <IconMenu
    iconButtonElement={<a href="#"><strong><FontAwesomeIcon icon="globe"/></strong>Langauge</a>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    maxHeight={272}
  >
    <IMenuItem value="kr" primaryText="한국어" />
    <IMenuItem value="en" primaryText="Engish" />
  </IconMenu>
  </MuiThemeProvider>
)


export default class TopNav extends Component {
  render() {
  	return (
  	  <div className={styles.NavFrame}>
  	  	<div className={styles.Navbar}>
  	  	  <div className={styles.logoBox}>
  	        <a href="#logo">
  		      <img src={logo} className={styles.logo} />
  		    </a>
  		  </div>

	      <DrawerUndocked />

  		  <div className={styles.NavMenu}>
    	    <ul>
    	   	  <li><a href="#"><strong><FontAwesomeIcon icon="user"/></strong>견적문의</a></li>
  	  	      <li><a href="#"><strong><FontAwesomeIcon icon="id-card"/></strong>회사소개</a></li>
  	  	  	  <li><a href="#"><strong><FontAwesomeIcon icon="map-marker-alt"/></strong>찾아오시는 길</a></li>
  	  	  	  <li><IconMenuScrollable /></li>
  		    </ul>
  		  </div>
  		</div>
	  </div>
  	)
  }
  
}