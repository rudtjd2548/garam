import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { normalizePhone, validate } from './validationComp.js'
import Estyles from "../../styles/components/contactUs.scss"
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(faHome);

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

const MaterialUiForm = props => {
  const { pristine, reset, submitting, handleSubmit } = props

  return (
    <div className={Estyles.FormWrap}>
      <h4>
        <NavLink to="/" className={Estyles.Elink}>
          <FontAwesomeIcon icon="home"/>
        </NavLink>
        <strong> >> </strong><b>견적문의</b>
      </h4>
      <h2>견적 및 기타 문의하기</h2>
      <h5>
        고객들과의 최고의 파트너가 되기위해 끊임없이 노력하는 참가람에 문의해주셔서 감사합니다. 
        고객님의 문의 사항은 바로 접수가 되며 확인 후 답변드리는 기간은 1~2일 정도 소요됩니다. 
        더 궁금하거나 빠른 문의를 바라는 분들께서는 고객센터 1577-5709로 연락주시기 바랍니다. <br /><br />
        고객센터 운영시간 : <i>오후 4시 ~ 새벽 12시</i>
      </h5>
      <MuiThemeProvider>
        <form onSubmit={handleSubmit((props) => {
          axios.post('http://www.garamfood.org:8081/sendEmail', props)
          .then(res => {
            console.log("Response from Server");
            console.log(res);
          })
            .catch(function (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
            })
        })}>
            <div><Field name="Ename" component={renderTextField} label="이름"/></div>
            <div><Field name="Ecompany" component={renderTextField} label="회사명"/></div>
            <div><Field name="Ephone" component={renderTextField} normalize={normalizePhone} label="휴대전화"/></div>
            <div><Field name="Eemail" component={renderTextField} label="이메일"/></div>
            <div><Field name="Enotes" component={renderTextField} label="문의 사항" multiLine={true} rows={5}/></div>
            <div><button className={Estyles.Ebutton} type="submit" disabled={pristine || submitting}>제출하기</button></div>
        </form>
      </MuiThemeProvider>
    </div>
  )
}

export default reduxForm({
  form: 'MaterialUiForm',  // a unique identifier for this form
  validate
})(MaterialUiForm)