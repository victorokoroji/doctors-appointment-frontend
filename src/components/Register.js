import React, { useState, useEffect, useRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  // const initialValues = { name: '', email: '', password: '' };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const [error, setError] = useState('');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!nameRef.current.value || !emailRef.current.value || !passwordRef.current.value) {
      setError('Please fill out all the fields');
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError('The passwords do not match!');
    }
    return setError();
  };

  return (
    <section className="signup-section">
      <div className="section-container">
        <div className="heading">
          <h2 className="text-center">Sign Up</h2>
          <hr />
        </div>
        <div className="errors">
          <p style={{ color: 'red' }}>{error}</p>
        </div>
        <div className="form-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                ref={nameRef}
                className="input-field"
                required
              />
              <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
              <label htmlFor="name" className="input-label">Full Name</label>

            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="input-field"
                required
              />
              <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
              <label htmlFor="email" className="input-label">Email address</label>

            </div>
            <div className="form-group">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                ref={passwordRef}
                className="input-field"
                required
              />
              <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
              <label htmlFor="password" className="input-label">Password</label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye className="eye-icon" /> : <FaEyeSlash className="eye-icon" />}
              </button>

            </div>
            <div className="form-group">
              <input
                type={showPasswordConfirmation ? 'text' : 'password'}
                id="password-confirmation"
                ref={passwordConfirmRef}
                className="input-field"
                required
              />
              <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
              <label htmlFor="password-confirmation" className="input-label">
                Password Confirmation
              </label>
              <button
                type="button"
                onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
              >
                {showPasswordConfirmation
                  ? <FaEye className="eye-icon" />
                  : <FaEyeSlash className="eye-icon" />}
              </button>
            </div>
            <div className="submit-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div>
          <p>
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;

/** const handleChange = (e) => {
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
    if (!values.name) {
      errors.name = 'Name is required!';
    } else if (values.name.length < 3 || values.name.length > 20) {
      errors.name = 'The name must be between 3 and 20 characters';
    }
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
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="text-center text-success mb-5">Account created successfully</div>
      ) : (
        null
      )}

      <form
        style={{ width: '32%', background: '#f7f7f7' }}
        className="mx-auto border border-2 p-5 mt-5 rounded"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="register-img"
          className="rounded-circle mx-auto d-block mb-4"
          style={{ width: '35%', height: '35%' }}
        />
        <div className="mb-3">
          <>{ //eslint-disable-next-line jsx-a11y/label-has-associated-control //}</>
          <label htmlFor="nameInput" className="form-label">Name</label>
          <input
            type="text"
            id="nameInput"
            className="form-control"
            placeholder="Enter name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <p className="text-danger">{formErrors.name}</p>
        </div>
        <div className="mb-3">
          <>{ //eslint-disable-next-line jsx-a11y/label-has-associated-control // }</>
          <label htmlFor="emailInput" className="form-label">Email</label>
          <input
            type="email"
            id="emailInput"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="text-danger">{formErrors.email}</p>
        </div>
        <div className="mb-3">
          <>{ // eslint-disable-next-line jsx-a11y/label-has-associated-control // }</>
          <label htmlFor="passwordInput" className="form-label">Password</label>
          <input
            type="password"
            in="passwordinput"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p className="text-danger">{formErrors.password}</p>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
*/
