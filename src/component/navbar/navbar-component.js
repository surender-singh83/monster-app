import React from 'react';
//import { useSelector } from "react-redux";
import {
  Link,
  useHistory
} from 'react-router-dom';
import {
  connect
} from 'react-redux';
import {
  LogoutAuthAction
} from '../../actions/authactions';

function NavBar(props) {
  //const history=useHistory();
  //const {user = useSelector(state => state);
  //console.log(user.isLogged);

  const {
    logout,
    auth
  } = props;

  const navStyle = {
    width: '100px',
    left: '0',
    right: '0',
    margin: 'auto'

  }


  console.log(auth)


  return ( <
    nav >
    <
    div className = "nav-wrapper" >
    <
    Link to = "/"
    className = "brand-logo"
    style = {
      navStyle
    } > Logo < /Link> {
      auth.isLogged ?
        <
        ul className = "right hide-on-med-and-down" >
        <
        li > < Link to = "/monster" > Monsters < /Link></li >
        <
        li > < Link to = "/about" > About Us < /Link></li >
        <
        li > < Link to = "/"
      onClick = {
          logout
        } > Logout < /Link></li >
        <
        /ul>:

        <
        ul className = "right hide-on-med-and-down" >
        <
        li > < Link to = "/" > Login < /Link></li > < /ul>
    }

    <
    /div> <
    /nav>
  )

}

const mapStateToProps = state => {
  return {
    auth: state
  }
}

const mapStateToDispatch = dispatch => {
  return {
    logout: (history) => {
      dispatch(LogoutAuthAction(history));

    }
  }

}
export default connect(mapStateToProps, mapStateToDispatch)(NavBar);