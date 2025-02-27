import { useState } from 'react';
import './cardRegister.css';
import api from '../../api';

const CardRegisterModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState(''); 
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(''); 

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await api.post('/register', {
        name,
        username,
        password,
        confirmPassword,
      });
      setMessage(response.data.message);
      onClose();
    } catch (error) {
      setMessage(error.response?.data?.error || 'Erro ao registrar');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="cardRegister">
          <form onSubmit={handleSubmit}>
            <div>

              <label className="cardUserRegister" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="inputUserRegister"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="off"
              />

              <label className="cardUserRegister" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="inputUserRegister"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="off"
              />

              <label className="cardUserRegister" htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className="inputUserRegister"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="off"
                />
                <button
                  type="button"
                  className="eyeLoginRegister"
                  onClick={toggleShowPassword}
                  aria-label="Show/Hide Password"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>

              <label className="cardUserRegister" htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="inputUserRegister"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  autoComplete="off"
                />
                <button
                  type="button"
                  className="eyeLoginRegister"
                  onClick={toggleShowPassword}
                  aria-label="Show/Hide Confirm Password"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="buttonRegister">
              <button type="submit" className="buttoLoginRegister">
                <p className="textButtonLogin">Register</p>
              </button>
            </div>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default CardRegisterModal;