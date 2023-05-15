import React, { useState } from 'react';

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (userName.trim() === '') {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }

    if (email.trim() === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (message.trim() === '') {
      setMessageError(true);
    } else {
      setMessageError(false);
    }

    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form4Example1"
            className="form-control"
            value={userName}
            name="userName"
            onChange={handleInputChange}
            onBlur={() => setUserNameError(userName.trim() === '')}
          />
          <label className="form-label" htmlFor="form4Example1">
            Name
          </label>
          {userNameError && <span className="error-message">Required</span>}
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form4Example2"
            className="form-control"
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={() => setEmailError(email.trim() === '')}
          />
          <label className="form-label" htmlFor="form4Example2">
            Email address
          </label>
          {emailError && <span className="error-message">Required</span>}
        </div>
        <div className="form-outline mb-4">
          <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={() => setMessageError(message.trim() === '')}
          ></textarea>
          <label className="form-label" htmlFor="form4Example3">
            Message
          </label>
          {messageError && <span className="error-message">Required</span>}
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          onClick={handleFormSubmit}
        >
          Send
        </button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;
