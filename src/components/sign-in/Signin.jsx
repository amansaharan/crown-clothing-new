import { useState } from 'react';
import {
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import './signin.styles.scss';

function Signin() {
  const defaultFormFields = {
    email: '',
    password: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const googleSignIn = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user);
  };
  return (
    <div className='sign-up-container'>
      <h2>I have an account</h2>
      <span>SignIn with your email and password or google account</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          onChange={onChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          name='password'
          onChange={onChange}
          value={password}
        />

        <div className='buttons-container'>
          <Button buttonType='inverted' type='submit'>
            SignIn
          </Button>
          <Button type='button' onClick={googleSignIn} buttonType='google'>
            Google SignIn
          </Button>
        </div>
      </form>
    </div>
  );
}
export default Signin;
