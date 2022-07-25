import React, { useState, useEffect, useRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/register.module.css';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef();

  useEffect(() => {
    // nameRef.current.focus();

    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log('Operation successful'); // eslint-disable-line no-console
    }
  }, [errors]);

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!regex.test(emailRef.current.value)) {
      errors.message = 'This is not a valid email format!';
      emailRef.current.focus();
    }
    if (passwordRef.current.value.length < 6 || passwordRef.current.value.length > 40) {
      errors.message = 'The password must be between 6 and 40 characters';
      passwordRef.current.focus();
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      errors.message = 'The passwords do not match!';
      passwordConfirmRef.current.focus();
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate);
    setIsSubmit(true);
  };

  return (
    <section className="signup-section">
      <div className="section-container">
        <div className="heading">
          <h2 className="text-center">Sign Up</h2>
          <hr />
        </div>
        <div className="errors">
          {Object.keys(errors).length === 0 && isSubmit ? (
            <div className="text-success mb-4 text-center">Account created successfully</div>
          ) : (
            <p className="text-danger mb-4">{errors.message}</p>
          )}
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
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
                style={{ border: 'none', outline: 'none', background: '#fff' }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword
                  ? <FaEye className="eye-icon" />
                  : <FaEyeSlash className="eye-icon" />}
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
                style={{ border: 'none', outline: 'none', background: '#fff' }}
                onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
              >
                {showPasswordConfirmation
                  ? <FaEye className="eye-icon" />
                  : <FaEyeSlash className="eye-icon" />}
              </button>
            </div>
            <div className="submit-btn">
              <button type="submit">
                <Link to="/doctors" style={{ color: '#fff', textDecoration: 'none' }}>Submit</Link>
              </button>
            </div>
          </form>
        </div>
        <div>
          <p>
            Already have an account?
            <Link to="/login" style={{ color: '#44522e', textDecoration: 'none' }}> Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
