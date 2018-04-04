import React, {Component} from 'react';

export default class IntroCompany extends Component {
  render () {
    return (
        <div>
          <form method="post" action="/sendEmail">
          	이름 : <input type="text" name="Ename" />
          	<button type="submit">버튼</button>
          </form>
        </div>
      )
  }
}