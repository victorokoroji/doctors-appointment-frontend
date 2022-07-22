/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/login.css';

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
    <section className="session-form">
      <div className="session-container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="text-center text-success mb-5">Account created successfully</div>
        ) : (
          null
        )}
        <div className="form-container">
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="heading">
              <h1>Login</h1>
              <hr />
            </div>

            <div className="form-group">
              <label htmlFor="nameInput" className="input_label"> Username</label>

              <input
                type="text"
                id="emailInput"
                className="input_field"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />

              <p className="text-danger">{formErrors.name}</p>
            </div>
            <div className="form-group">
              { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
            <Link to="/register" style={{ color: '#44522e', textDecoration: 'none' }}> Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
