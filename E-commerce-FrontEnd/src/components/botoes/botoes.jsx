import { useNavigate } from 'react-router-dom';
import './botoes.css'

export default function Button (props) {
    const navigate = useNavigate();
    
    const estoquePage = () => {
        localStorage.removeItem('UserInfo');
        navigate('/estoquePage');
      };

    return(
        <div className={`list ${props?.show ? 'show' : ''}`}>
            <div id='estoque' onClick={(e) => estoquePage(e.target.id)} className={`list ${props?.show ? 'show' : ''}`}>
                <button className='buttonEstoque' id='estoque'>
                    {/* <img src={isPersonActive ? idActive : idNotActive} 
                    className='imgButton' 
                    id='cadastro'/> */}
                    <p className='textBotao' id='estoque'>Estoque</p> 
                </button>
            </div>
        </div>
    )
}