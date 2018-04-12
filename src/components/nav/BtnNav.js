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
import { faHandHoldingUsd, faUtensils, faSmile } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faHandHoldingUsd, faUtensils, faSmile);

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
                      <span>
                        <FontAwesomeIcon icon="hand-holding-usd"/>
                      </span>
                      <strong>
                        정직한 단가
                      </strong>
                      <div>
                        참가람식자재는 종합식재료업체로 각종 농,수,축,공산품을 정직한
                        단가로 납품하고 있습니다.
                      </div>
                    </div>
                    <div className={Bstyles.ContentsBox}>
                      <span>
                        <FontAwesomeIcon icon="utensils"/>
                      </span>
                      <strong>
                        신선한 재료
                      </strong>
                      <div>
                        참가람식자재는 매일 새벽 가락동 농수산시장에 경매된 신선한 재료만을 유통,
                        납품합니다.
                      </div>
                    </div>
                    <div className={Bstyles.ContentsBox}>
                      <span>
                        <FontAwesomeIcon icon="smile"/>
                      </span>
                      <strong>
                        최상의 서비스
                      </strong>
                      <div>
                        참가람식자재는 믿을 수 있는 식자재와 더불어 직원들이
                        최상의 서비스를 약속드립니다.
                      </div>
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
