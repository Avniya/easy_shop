import React from 'react';
import styles from './LoginRegister.module.css'

const Register = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.formConatiner}>
        <h1>Register to Shop now</h1>
        <form>
          <div className={styles.inputField}>
            <label>Email</label>
            <input type='email' />
          </div>
          <div className={styles.inputField}>
            <label>Password</label>
            <input type='password' />
          </div>
          <div className={styles.inputField}>
            <label>Confirm Password:</label>
            <input type='password' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register