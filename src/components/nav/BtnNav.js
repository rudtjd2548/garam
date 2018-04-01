import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Bstyles from "../../../styles/nav/BtnNav.scss"

import nong from "../../assets/images/nongsan.jpg"
import gong from "../../assets/images/gong.jpg"
import wang from "../../assets/images/garak.jpg"


import fadeIn from 'react-animations/lib/fade-in'
import Radium, {StyleRoot} from 'radium';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTruck, faCircle } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faTruck, faCircle);
fontawesome.icon({ prefix: 'far', iconName: 'circle' })

const styles = {
  nong: {
    background: `url(${nong})` + "no-repeat center center",
    backgroundSize: "cover"
  },
  gong: {
    background: `url(${gong})` + "no-repeat center center",
    backgroundSize: "cover"
  },
  wang: {
    background: `url(${wang})` + "no-repeat center center",
    backgroundSize: "cover"
  },
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className={Bstyles.Cover}>
        <MuiThemeProvider>
          <div>
            <div className={Bstyles.BnavbarCover}>
              <div className={Bstyles.BNavbar}>
                <Tabs
                  onChange={this.handleChange}
                  value={this.state.slideIndex}
                  inkBarStyle={{background: '#444'}}
                  tabItemContainerStyle={{background: '#FFD13E'}}
                >
                  <Tab style={{color:"#444", fontWeight:"bold", letterSpacing:"1px"}} label="농, 수, 축산물" value={0} />
                  <Tab style={{color:"#444", fontWeight:"bold", letterSpacing:"1px"}} label="공산품" value={1} />
                  <Tab style={{color:"#444", fontWeight:"bold", letterSpacing:"1px"}} label="왕도매" value={2} />
                </Tabs>
              </div>
            </div>
            <div className={Bstyles.ContentsCover}>
              <div className={Bstyles.SwipeContents}>
                <div className={Bstyles.bottomBox}>
                  <div className={Bstyles.Bwidth}>
                    <div className={Bstyles.ContentsBox}>
                      <div className={Bstyles.iconBox}>
                        <strong className={Bstyles.strong1}><FontAwesomeIcon icon="truck"/></strong>
                        <strong className={Bstyles.strong2}><FontAwesomeIcon icon="circle"/></strong>
                      </div>
                    </div>
                    <div className={Bstyles.ContentsBox}>
                      b
                    </div>
                    <div className={Bstyles.ContentsBox}>
                      c
                    </div>
                    <div className={Bstyles.ContentsBox}>
                      d
                    </div>
                  </div>
                </div>
                <SwipeableViews
                  index={this.state.slideIndex}
                  onChangeIndex={this.handleChange}
                >
                  <div style={styles.nong} className={Bstyles.nong}>
                    <div className={Bstyles.Bwidth}>
                      <div className={Bstyles.HalfLeftBox}>
                        <StyleRoot>
                        <h2 style={styles.fadeIn} className={Bstyles.headline}>당일 가락시장 및 구리시장에서 경매된</h2>
                        <h2 style={styles.fadeIn} className={Bstyles.subline}>다양한 품목의 신선한 농, 수, 축산물을</h2>
                        <h2 style={styles.fadeIn} className={Bstyles.bigline}><span>가장 저렴한 가격</span>에</h2>
                        <h2 style={styles.fadeIn} className={Bstyles.bottomline}>제공해 드리고 있습니다.</h2>
                        </StyleRoot>
                      </div>
                    </div>
                  </div>
                  <div style={styles.gong} className={Bstyles.nong}>
                    <div className={Bstyles.Bwidth}>
                      <div className={Bstyles.HalfLeftBox}>
                        <StyleRoot>
                        <h2 style={styles.fadeIn} className={Bstyles.headline}>가람푸드는 제조공장 및 도매업체로부터</h2>
                        <h2 style={styles.fadeIn} className={Bstyles.subline}>가장 저렴한 가격에 식자재를 매입하여</h2>
                        <h2 style={styles.fadeIn} className={Bstyles.bigline}><span>정직한 유통</span>을 하며</h2>
                        <h2 style={styles.fadeIn} className={Bstyles.bottomline}>다양한 품목을 취급합니다.</h2>
                        </StyleRoot>
                      </div>
                    </div>
                  </div>
                  <div style={styles.wang} className={Bstyles.nong}>
                    <div className={Bstyles.Bwidth}>
                      <div className={Bstyles.HalfLeftBox}>
                        <StyleRoot>
                        <h2 style={styles.fadeIn} className={Bstyles.headline}></h2>
                        <h2 style={styles.fadeIn} className={Bstyles.subline}>가람푸드의 다양한 왕도매 식자재로</h2>
                        <h2 style={styles.fadeIn} className={Bstyles.bigline}><span>식자재 매입고민</span>을</h2>
                        <h2 style={styles.fadeIn} className={Bstyles.bottomline}>한방에 해결해드리겠습니다.</h2>
                        </StyleRoot>
                      </div>
                    </div>
                  </div>
                </SwipeableViews>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}