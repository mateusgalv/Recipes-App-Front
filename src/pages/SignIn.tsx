import { useState } from 'react';
import '../styles/signIn.css';
import { validateEmail, validatePassword } from '../utils/signInValidation';

interface Iuser {
  email: string,
  password: string,
};

export default function SignIn() {
  const [signIn, setSignIn] = useState<Iuser>({
    email: '',
    password: '',
  });
  const [signInError, setSignInError] = useState<string>('');

  const handleError = (): void => {
    const { email, password } = signIn;
    if (!validateEmail(email)) {
      setSignInError('Invalid email!');
    }
    if (!validatePassword(password)) {
      setSignInError('Password must have 5 characters or more!');
    }
  };

  const handleLogin = (): void => {
    setSignInError('');
  };

  const handleInputChange = ({ target }: any) => {
    setSignIn({
      ...signIn,
      [target.name]: target.value,
    });
  };

  const handleSignIn = (): void => {
    const { email, password } = signIn;
    const users = localStorage.getItem('users');
    if (users === null) {
      localStorage.setItem('users', JSON.stringify([signIn]));
      handleLogin();
    } else if (validateEmail(email) && validatePassword(password)) {
      const parsedUsers = JSON.parse(users);
      const newUsers = [...parsedUsers, signIn];
      localStorage.setItem('users', JSON.stringify(newUsers));
      handleLogin();
    } else {
      return handleError();
    }
    // adicionar lógica de logar e redirecionamento
    // criar estado global de login
  };


  return (
    <div className='sign-in-container'>
      <div className='sign-in-content'>
        <section>
          <h3>Create your account</h3>
        </section>
        <section>
          <form className='form'>
            <input
              placeholder='Email'
              type='email'
              name='email'
              value={ signIn.email }
              onChange={ (e) => handleInputChange(e) }
            />
            <input
              placeholder='Password'
              type='password'
              name='password'
              value={ signIn.password }
              onChange={ (e) => handleInputChange(e) }
            />
            {
              signInError.length > 0 && (
                <p className='sign-in-error'>{signInError}</p>
              )
            }
          </form>
        </section>
        <section>
          <button
            className='sign-in-btn'
            onClick={ handleSignIn }
          >
            Sing In
          </button>
        </section>
      </div>
    </div>
  )
}
