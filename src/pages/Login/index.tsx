import React from 'react';
import LoginForm from '../../components/LoginForm';

function Login() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(45deg, #8b5aed 0%, #78ebfc 100%)'
      }}
    >
      <LoginForm />
    </div>
  )
}

export default Login;