import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import EstoquePage from './pages/estoquePage/estoquePage';
import InicialPage from './pages/inicialPage/inicialPage';
import LoginPage from './pages/loginPage/loginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/pageLogin' element={<LoginPage />} />
        <Route path='/' element={<InicialPage />} />
        <Route path='/estoquePage' element={<EstoquePage />} />
      </Routes>
    </Router>
  );
}

export default App;
