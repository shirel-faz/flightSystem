import { Link } from "react-router-dom";
import { FETCH_API } from "../../services/api";
import "./SignUp.css"
import React, { useState } from 'react';

const Signup = () => {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [newUser, setNewUser] = useState({
    Username: '',
    First_Name: '',
    Last_Name: '',
    Email: '',
    Password: ''
  })

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    console.log(newUser);
    const signUpPost = await FETCH_API({
      path: `signUp`,
      _method: "POST",
      _body: newUser
    })
    // *****************************************************
    const findUser = async (User_Name) => {
      const data = await FETCH_API({
        path: `customerByUserName/${User_Name}`
      })
      return data[0]?.Username || ''
    }

    const userName = await findUser(newUser.Username)
    console.log(newUser.Username)
    if (userName || signUpPost.newUser) {
      setIsRegistered(true);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div>
      {isRegistered ? (
        <div>
        <h2>Account created for {newUser.Username}!</h2>
        <Link to={"/"}>Go to home page</Link>
        </div>
      ) : (
        <div className='signUp-container'>
          <h2 className="h22">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div>
              <input type="text" value={newUser.First_Name} placeholder='First Name' onChange={(e) => setNewUser({ ...newUser, First_Name: e.target.value })} />
            </div>
            <div>
              <input type="text" value={newUser.Last_Name} placeholder='Last Name' onChange={(e) => setNewUser({ ...newUser, Last_Name: e.target.value })} />
            </div>
            <div>
              <input type="text" value={newUser.Username} placeholder='Username' onChange={(e) => setNewUser({ ...newUser, Username: e.target.value })} />
            </div>
            <div>
              <input type="email" value={newUser.Email} placeholder='Email' onChange={(e) => setNewUser({ ...newUser, Email: e.target.value })} />
            </div>
            <div>
              <input type="password" value={newUser.Password} placeholder='Password' onChange={(e) => setNewUser({ ...newUser, Password: e.target.value })} />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <span>You already have an account ? </span><Link className="link" to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Signup;
