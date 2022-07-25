/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../css/login.module.css';
const LoginForm = () => {
  const initialValues = { name: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormErrors(formValues);
    }
  }, [formErrors]);
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
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  return (
    <section className={style.sessionForm}>
      <div className={style.sessionContainer}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="text-center text-success mb-5">Account created successfully</div>
        ) : null}
        <div className={style.formContainer}>
          <form onSubmit={handleSubmit} autoComplete="off" className={style.form}>
            <div className={style.heading}>
              <h1>Login</h1>
              <hr className={style.line} />
            </div>
            <div className={style.formGroup}>
              <input
                type="text"
                id={style.emailInput}
                className={style.inputField}
                name="name"
                value={formValues.name}
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
                name="password"
                value={formValues.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="password" className={style.inputLabel}>
                Password
              </label>
              <p className="text-danger">{formErrors.password}</p>
            </div>
            <div className={style.submitBtn}>
              <button type="submit">Login</button>
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