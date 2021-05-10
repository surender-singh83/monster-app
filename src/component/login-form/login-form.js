import React, { Component } from 'react';
import { LoginAuthAction } from '../../actions/authactions';
import { connect } from 'react-redux';
import PageComponent from '../common/pageComponent';
import { Redirect } from 'react-router-dom';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: null,
          password: null,
          formErrors: {
            email: "",
            password: ""
          }
        }

        
      }

      formValid = formError => {
        let valid = true;
        Object.values(formError).forEach(el=>{
          el.length > 0 && (valid = false);
        })

        return valid;
      }
      login = (e) => {
        e.preventDefault();    
   
        //console.log(this.props.user)

        if(this.formValid(this.state.formErrors)) {
         
          const loginData = this.state;
          const history = this.props.history
          this.props.loginData(loginData, history);
          console.log('submit', this.props.user)
          
        } else {
          console.error('error in submit')
        }
      }

      validateEmail = email => {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(email);
      }
      handleChange = e => {
        const { id, value} = e.target;
        this.setState({[id]: value});

        let formError = this.state.formErrors;
 

        switch(id) {
          case 'email':
            formError.email = !this.validateEmail(value) ? "Email is not valid" : "";
          break;

          case 'password':
            formError.password = value.length < 3 || value === "" ? "Password is empty" : "";
          break;

          default:
          break;
        }

        //console.log(value, value.match('/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/'));
      }
      
    render() {

        return (
            <PageComponent title="Login">
                  {this.props.user.user.token ? (
        
          <Redirect to="/monster" />
        ) : (
            <div className="row">
              {this.props.user.error && <div class="card-panel red white-text">Email or password is invalid</div>}
              <form className="s12" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" onChange={this.handleChange} />
                    <label>Email</label>

                    {this.state.formErrors.email.length > 0 && <span className="red-text text-darken-2">{this.state.formErrors.email}</span>}
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" onChange={this.handleChange} />
                    <label>Password</label>

                    {this.state.formErrors.password.length > 0 && <span className="red-text text-darken-2">{this.state.formErrors.password}</span>}
                  </div>
                </div>
                <button disabled={!this.state.email && !this.state.password? true: false} className="btn waves-effect waves-light" type="submit" name="action" onClick={(e) => { this.login(e) }}>
                    Login
                </button>
              </form>
            </div>
          )}
            </PageComponent>
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state
    }
  }
  
  const mapStateToDispatch = dispatch => {
    return {
      loginData: (userState, history) => {
        dispatch(LoginAuthAction(userState, history));
      }
    }
    
  }

  export default connect(mapStateToProps,mapStateToDispatch)(LoginForm);
