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
          password: null
        }
      }

      login = async (e) => {
        e.preventDefault();
        //console.log("result", this.state.email, this.state.password);
    
        // fetch('https://reqres.in/api/login', {
        //   method: "POST"
        // }).then((response) => {
        //   response.json().then((result) => {
        //     console.log("result", result);
        //     this.setState({ isLogin: true });
        //     console.log("result", this.state.isLogin);
        //     localStorage.setItem('login', 'true')
        //   })
        // })
    
        // console.log("result", localStorage.getItem('login'));
    
        // try {
        //   await axios.post(`${this.apiURL}/login`, {
        //     email: this.state.email,
        //     password: this.state.password
        //   })
        //     .then(res => {
        //       const persons = res.data;
        //       this.setState({ persons });
        //       console.log("result", persons);
        //       this.setState({ isLogin: true })
        //       localStorage.setItem('auth-token', persons.token);
        //     })
        // } catch (err) {
        //   console.log(err.message);
        // }
    
        const loginData = this.state;
        const history = this.props.history
    
    
    
        this.props.loginData(loginData, history);
    
        //console.log(this.props.user)
      }
    render() {
        return (
            <PageComponent title="Login">
                  {this.props.user.user.token  ? (
          <Redirect to="/monster" />
        ) : (
            <div className="row">
              <form className="s12" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    <label>Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" className="validate" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                    <label>Password</label>
                  </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={(e) => { this.login(e) }}>
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
