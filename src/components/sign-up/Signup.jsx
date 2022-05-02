import { useState } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import './signup.styles.scss';

function Signup() {
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password should match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      }
      console.log('User creation encounter an error', error);
    }
  };
  return (
    <div className='sign-up-container'>
      <h2>I don't have an account</h2>
      <span>SignUp with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          name='displayName'
          id='displayName'
          onChange={onChange}
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          id='email'
          onChange={onChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          name='password'
          id='password'
          onChange={onChange}
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          name='confirmPassword'
          id='confirmPassword'
          onChange={onChange}
          value={confirmPassword}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}
export default Signup;
