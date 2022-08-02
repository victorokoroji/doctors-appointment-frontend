/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import style from '../css/login.module.css';
import { loginUser } from '../redux/login/login';
import Button from '../components/Button';
import Input from '../components/Input';

const LoginForm = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loader, setLoader] = useState('Please wait...')
  const emailRef = useRef()
  const passwordRef = useRef();

  const myData = useSelector((state) => state.loginReducer, shallowEqual);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.name = 'Email is required!';
    } else if (!regex.test(values.email)) {
			errors.name = 'This is not a valid email format!';
			 emailRef.current.focus()
    }
    if (!values.password) {
			errors.password = 'Password is required';
			 passwordRef.current.focus()
    } else if (values.password.length < 6 || values.password.length > 40) {
			errors.password = 'The password must be between 6 and 40 characters';
			 passwordRef.current.focus()
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);

    const userData = { user };
    dispatch(loginUser(userData));
  };

  if (myData.status === 200) {
    setTimeout(() => {
      navigate('/doctors');
    }, 3000);
  }
	const handleText = () => {
		if (myData.status !== 200) {
			let text = loader

			setTimeout(() => {
				text = setLoader('Try Again')
			}, 1000)
			 text = loader
			return text
		}
	}

	const handleFailure = () => {
		if (myData.status === 401) {
			let text = 'Something went wrong'
			return text
		}
	}


  return (
		<section className={style.sessionForm}>
			<div className={style.sessionContainer}>
				{myData.status === 200 && isSubmit ? (
					<div className={style.success}>Login Successful!</div>
				) : (
					<p className={style.errorMsg}>
						{formErrors.message ? formErrors.message : handleFailure()}
					</p>
				)}

				<div className={style.formContainer}>
					<form onSubmit={e => handleSubmit(e)} autoComplete='off' className={style.form}>
						<div className={style.heading}>
							<h1>Login</h1>
							<hr className={style.line} />
						</div>
						<div className={style.formGroup}>
							<input
								type='email'
								id={style.emailInput}
								innerRef={emailRef}
								className={style.inputField}
								name='email'
								value={user.name}
								onChange={handleChange}
								required
							/>
							<label htmlFor='nameInput' className={style.inputLabel}>
								Email
							</label>
							<p className='text-danger'>{formErrors.name}</p>
						</div>
						<div className={style.formGroup}>
							{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
							<Input
								type='password'
								id='passwordinput'
								className={style.inputField}
								innerRef={passwordRef}
								name='password'
								value={user.password}
								onChange={handleChange}
								required
							/>
							<label htmlFor='password' className={style.inputLabel}>
								Password
							</label>
							<p className='text-danger'>{formErrors.password}</p>
						</div>
						<div className={style.submitBtn}>
							{isSubmit ? (
								<Button type='submit' className={style.submitBtn}>
									{handleText()}
								</Button>
							) : (
								<Button type='submit' className={style.submitBtn}>
									{myData.status === 200 && isSubmit ? 'Please wait...' : 'Login'}
								</Button>
							)}
						</div>
					</form>
				</div>
				<div>
					<p>
						Don&apos;t have an account yet?
						<Link to='/register' className={style.link}>
							Register
						</Link>
					</p>
				</div>
			</div>
		</section>
	)
};
export default LoginForm;
