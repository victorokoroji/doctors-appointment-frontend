import React, { useState, useEffect } from 'react';

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
    <div className="container mt-5">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="text-center text-success mb-5">Account created successfully</div>
      ) : (
        null
      )}

      <form
        style={{ width: '35%', background: '#f7f7f7' }}
        className="mx-auto border border-2 p-5 rounded"
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
          <label htmlFor="emailInput" className="form-label"> Email </label>
            
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
          <label htmlFor="passwordInput" className="form-label">  Password </label>
           
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
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
