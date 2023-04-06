import React, { useState } from 'react';
import styles from './LoginRegister.module.css';

const Login = () => {
  const [fieldState, setFieldState] = useState({
    email: '',
    password: ''
  });
  
  const handleSubmit = (e: HTMLFormElement) => {
    e.preventDefault();
  }
  
  return (
    <div className={styles.formWrapper}>
      <div className={styles.formConatiner}>
        <h1>Login</h1>
        <form
          onSubmit={e => handleSubmit}
        >
          <div className={styles.inputField}>
            <label>Email: </label>
            <input 
              type='email' 
              placeholder='sam@mail.com'
            />
          </div>
          <div className={styles.inputField}>
            <label>Password: </label>
            <input type='password' />
          </div>
          <button type='submit'>
            Login
          </button>
        </form>
        <hr />
        <div className={styles.toSignUp}>
          Not yet register? <span> Sign up </span>
        </div>
      </div>
    </div>
  )
}

export default Login