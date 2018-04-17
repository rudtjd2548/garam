import React, {Component} from 'react'
import axios from 'axios'
import { NavLink, withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { normalizePhone, validate } from './validationComp.js'
import Estyles from "../../styles/components/contactUs.scss"
import DocumentMeta from 'react-document-meta';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome, faCheck } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faHome, faCheck);

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

class MaterialUiForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      isEmailSent: false
    }
  }

  handleSubmit = (values) => {
    axios.post('http://www.garamfood.org:8080/sendEmail', values)
    .then((res) => {
      //this.props.history.push('')
      this.setState({
        isEmailSent: true
      })
    })
    .catch((error) => {
      console.log(error)
    });
  }

  render() {
    const { pristine, submitting, handleSubmit } = this.props
    const isEmailSent = this.state.isEmailSent
    const button = isEmailSent ? (
      <p className={Estyles.emailSent}><FontAwesomeIcon icon="check"/> 성공적으로 전송되었습니다.</p>
    ) : (
      <div><button className={Estyles.Ebutton} type="submit" disabled={pristine || submitting}>제출하기</button></div>
    )
    const meta = {
      title: '참가람 견적문의하기',
      description: '참가람 고객문의 페이지입니다. 궁금하신점 참가람 이메일로 문의해주십시오. 빠른 고객문의는 1577-5709로 전화주시면 바로 상담하실 수 있습니다. 감사합니다.',
      canonical: 'http://garamfood.org/page/contactUs',
      meta: {
        charset: 'utf-8',
        name: {
          title: '참가람 견적문의하기'
        }
      }
    };

    return (
      <DocumentMeta {...meta}>
      <div className={Estyles.FormWrap}>
        <ScrollToTopOnMount/>
        <h4>
          <NavLink to="/" className={Estyles.Elink}>
            <FontAwesomeIcon icon="home"/>
          </NavLink>
          <strong> >> </strong><b>견적문의</b>
        </h4>
        <h2>견적 및 기타 문의하기</h2>
        <h5>
          고객들과의 최고의 파트너가 되기위해 끊임없이 노력하는 참가람에 문의해주셔서 감사합니다.
          고객님의 문의 사항은 바로 접수가 되며 확인 후 연락드리는 기간은 1~2일 정도 소요됩니다.
          더 궁금하거나 빠른 문의를 바라는 분들께서는 고객센터 1577-5709로 연락주시기 바랍니다. <br /><br />
          고객센터 운영시간 : <i>오후 4시 ~ 새벽 12시</i>
        </h5>
        <MuiThemeProvider>
          <form onSubmit={handleSubmit(this.handleSubmit)}>
              <div><Field name="Ename" component={renderTextField} label="이름"/></div>
              <div><Field name="Ecompany" component={renderTextField} label="회사명"/></div>
              <div><Field name="Ephone" component={renderTextField} normalize={normalizePhone} label="휴대전화"/></div>
              <div><Field name="Eemail" component={renderTextField} label="이메일"/></div>
              <div><Field name="Enotes" component={renderTextField} label="문의 사항" multiLine={true} rows={5}/></div>
              {button}
          </form>
        </MuiThemeProvider>
      </div>
    </DocumentMeta>
    )
  }
}

export default reduxForm({
  form: 'MaterialUiForm',  // a unique identifier for this form
  validate
})(MaterialUiForm)
