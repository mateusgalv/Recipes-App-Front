import React from 'react';
import '../styles/signIn.css';

export default function SignIn() {
  return (
    <div className='sign-in-container'>
      <section className='sign-in-content'>
        <div>
          <h3>Create your account</h3>
        </div>
        <div>
          <form className='form'>
            <input />
            <input />
            <input />
          </form>
        </div>
        <div>
          <button>Sing In</button>
        </div>
      </section>
    </div>
  )
}
