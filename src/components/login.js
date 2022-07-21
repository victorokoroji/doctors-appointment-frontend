/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';

const LoginForm = () => {
  const initialValues = { email: '', password: '' };
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
      console.log(formValues); // eslint-disable-line no-console
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
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
    <section className="session-form">
      <div className="session-container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="text-center text-success mb-5">Account created successfully</div>
        ) : (
          null
        )}
        <div className="form-container">
          <form
       // style={{ width: '35%', background: '#f7f7f7' }}
        // className="mx-auto border border-2 p-5 rounded"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="heading">
              <h1>Login</h1>
              <hr />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="input_label"> Email </label>

              <input
                type="email"
                id="emailInput"
                className="input_field"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />

              <p className="text-danger">{formErrors.email}</p>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="input_label">  Password </label>

              <input
                type="password"
                in="passwordinput"
                className="input_field"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />

              <p className="text-danger">{formErrors.password}</p>
            </div>
            <div className="submit-btn">
              <button type="submit" className="btn btn-lg">Login</button>
            </div>
          </form>
        </div>
        <div>
          <p>
            Don&apos;t have an account yet?
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
