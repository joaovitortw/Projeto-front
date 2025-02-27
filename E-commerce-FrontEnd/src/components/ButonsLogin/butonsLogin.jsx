import { useState } from 'react';
import './butonsLogin.css';
import CardLoginModal from '../cardLogin/cardLogin'; // Componente do modal de login
import CardRegisterModal from '../cardRegister/cardRegister'; // Componente do modal de registro

const ButonsLogin = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Estado para controlar o modal de login
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // Estado para controlar o modal de registro

  // Funções para controlar a abertura e fechamento dos modais
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false); // Fecha o modal de registro ao abrir o de login
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false); // Fecha o modal de login ao abrir o de registro
  };

  return (
    <div className="login">
      <div className="butons">
        <button className="butonLogin" onClick={openLoginModal} aria-label="Abrir modal de login">
          <p className="titleButon">Login</p>
        </button>

        <button className="butonRegister" onClick={openRegisterModal} aria-label="Abrir modal de registro">
          <p className="titleRegister">Registrar</p>
        </button>
      </div>

      {/* Renderizando modais com base nos estados */}
      <CardLoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <CardRegisterModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} />
    </div>
  );
};

export default ButonsLogin;
