import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dstyles from "../../../styles/nav/DrawerNav.scss"
import company from "../../assets/images/company.jpg"
import ceo from "../../assets/images/ceoface.jpg"


import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faBars);

const bars = 
  <strong style={{
  fontSize:"38px",
  color:"#444"
  }}><FontAwesomeIcon icon="bars"/>
  </strong>

export default class DrawerUndocked extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className={Dstyles.DWWrap}>
        <div className={Dstyles.Dwrap}>
          <MuiThemeProvider>
            <div>
                <RaisedButton
                  label= {bars}
                  onClick={this.handleToggle}
                  style= {{
                    borderRadius:"50px", 
                    height:"53px", 
                    minWidth:"65px", 
                    boxShadow:"0",
                    backgroundColor:"rgb(0,0,0)",
                    color:"#FFF"
                  }}
                />
                <Drawer
                  docked={false}
                  width={300}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
                >
                  <img src={company} style={{width:100+'%'}}/>
                  <div className={Dstyles.profileImg}><img src={ceo} /></div>
                  <h3 className={Dstyles.profileText}><a href="tel:031-1577-5709">1577-5709</a></h3>
                  <h3 className={Dstyles.profileName}>참가람식자재</h3>
                  <Divider />
                  <MenuItem onClick={this.handleClose}>견적문의</MenuItem>
                  <Divider />
                  <MenuItem onClick={this.handleClose}>회사소개</MenuItem>
                  <Divider />
                  <MenuItem onClick={this.handleClose}>찾아오시는 길</MenuItem>
                  <Divider />
                  <MenuItem onClick={this.handleClose}>ENGLISH</MenuItem>
                  <Divider />
                </Drawer>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}