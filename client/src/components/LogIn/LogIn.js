import "./LogIn.css"
import React, { useState, useEffect } from 'react';
import { FETCH_API } from '../../services/api';
import { useNavigate, Link } from 'react-router-dom';

const handelLogin = {
  airline: { flage: '/airline/login', navigate: '/airline', api: 'airline/login' },
  admin: { flage: '/admin/login', navigate: '/admin', api: 'admin/login' },
  customer: { flage: '/login', navigate: '/', api: 'login' }
}

const Login = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [configLogin, setConfigLogin] = useState(handelLogin.customer);
  const nav = useNavigate()

  useEffect(() => {
    const pathname = window.location.pathname;
    switch (pathname) {
      case handelLogin.admin.flage:
        setConfigLogin(handelLogin.admin)
        break;
      case handelLogin.airline.flage:
        setConfigLogin(handelLogin.airline)
        break;
      default:
        setConfigLogin(handelLogin.customer)
        break;
    }
    console.log({ pathname })
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    const LogInPost = await FETCH_API({
      path: `${configLogin.api}`,
      _method: "POST",
      _body: {
        Username,
        Password
      }
    })
    console.log({ LogInPost })
    if (LogInPost && LogInPost.token) {
      localStorage.setItem(process.env.REACT_APP_TOKEN, LogInPost.token);
      nav(configLogin.navigate)
    }
  };

  return (
    <div>
      <div className="login-container">
        <h2 className="h22">Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input placeholder='Username' type="text" value={Username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <input placeholder='Password' type="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
        <span>You don't have an account yet ? </span>
        <br/>
        <span>Click here! </span><Link className="link" to="/signUp">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
