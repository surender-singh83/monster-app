import React from 'react';
import {
  Link, useHistory
} from 'react-router-dom';
import {
  connect
} from 'react-redux';
import {
  LogoutAuthAction
} from '../../actions/authactions';

function NavBar(props) {
  const history=useHistory();
  //const {user = useSelector(state => state);
  //console.log(user.isLogged);

  const {
    logout,
    auth
  } = props;

  const logoStyle = {
    width: '100px',
    left: '0',
    right: '0',
    margin: 'auto'

  }

  const navStyle = {
    padding: '0 15px'

  }


  return ( <nav>
      <div className = "nav-wrapper" style={navStyle}>
      <Link to = "/" className = "brand-logo" style={logoStyle}> Logo </Link> 
      {auth.isLogged ? <ul className = "right hide-on-med-and-down" >
      <li> <Link to="/monster"> Monsters </Link></li>
      <li> <Link to="/users"> Users </Link></li>
      <li> <button className="waves-effect waves-light btn" onClick = {()=> {
             logout(history);
      }
   
      }> Logout </button>
      </li>
      </ul>:<ul className="right hide-on-med-and-down">
      <li> <Link to="/about" > About Us </Link></li>
      <li><Link to="/login">Login</Link></li> 
      </ul>}

    </div> </nav>
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