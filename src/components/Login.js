/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import style from '../css/login.module.css';
import { isLoggedIn } from '../redux/login/login';

const LoginForm = () => {
  const initialValues = { name: '', password: '' };
  const [user, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const myData = useSelector((state) => state.loginReducer, shallowEqual);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required!';
    } else if (values.name.length < 3 || values.name.length > 20) {
      errors.name = 'The name must be between 3 and 20 characters';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6 || values.password.length > 40) {
      errors.password = 'The password must be between 6 and 40 characters';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(user));
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const userData = { user };
      dispatch(isLoggedIn(userData));

      console.log(userData);
      console.log(myData);

      setTimeout(() => {
        navigate('/doctors');
      }, 3000);
    }

    setIsSubmit(true);
  };
  return (
    <section className={style.sessionForm}>
      <div className={style.sessionContainer}>
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="text-center text-success mb-5">Account created successfully</div>
        ) : null} */}

        {myData.status === 200 && isSubmit ? (
          <div className={style.success}>Account created successfully</div>
        ) : (
          <p className={style.errorMsg}>{formErrors.message}</p>
        )}

        <div className={style.formContainer}>
          <form onSubmit={(e) => handleSubmit(e)} autoComplete="off" className={style.form}>
            <div className={style.heading}>
              <h1>Login</h1>
              <hr className={style.line} />
            </div>
            <div className={style.formGroup}>
              <input
                type="text"
                id={style.emailInput}
                ref={nameRef}
                className={style.inputField}
                name="name"
                value={user.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="nameInput" className={style.inputLabel}>
                Username
              </label>
              <p className="text-danger">{formErrors.name}</p>
            </div>
            <div className={style.formGroup}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <input
                type="password"
                id="passwordinput"
                className={style.inputField}
                ref={passwordRef}
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="password" className={style.inputLabel}>
                Password
              </label>
              <p className="text-danger">{formErrors.password}</p>
            </div>
            <div className={style.submitBtn}>
              <button
                type="submit"
                // onClick={() => dispatch(isLoggedIn(formValues))}
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div>
          <p>
            Don&apos;t have an account yet?
            <Link to="/register" className={style.link}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default LoginForm;
