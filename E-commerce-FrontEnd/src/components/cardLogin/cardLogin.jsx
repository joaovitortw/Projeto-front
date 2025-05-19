import { useState } from 'react';
import './cardLogin.css';
import api from '../../api';

const CardLoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post('/auth/login', {
      login: username,
      senha: password
    });

    setMessage(response.data.message || 'Login realizado com sucesso!');
    localStorage.setItem('accessToken', response.data.accessToken);
    onClose();
  } catch (error) {
    setMessage(error.response?.data?.error || 'Erro ao realizar login');
  }
};


  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="cardLogin">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="cardUser" htmlFor="username">Usuário</label>
              <input
                type="text"
                id="username"
                name="username"
                className="inputUser"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="off"
              />

              <label className="cardUser" htmlFor="password">Senha</label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  className="inputUser"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="off"
                />
                <button
                  type="button"
                  className="eyeLogin"
                  onClick={toggleShowPassword}
                  aria-label="Show/Hide Password"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="button">
              <button type="submit" className="buttoLogin">
                <p className="textButtonLogin">Entrar</p>
              </button>
            </div>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default CardLoginModal;
