import { useState } from 'react';
import homebar from '../../img/bar.png';
import Logo from '../../img/logo.png';
import Carrinho from '../../img/carrinho.png';
import User from '../../img/user.png';
import Sino from '../../img/sino.png';
import './homeBar.css';
import Button from '../botoes/botoes';

const HomeBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);


    return (
        <div className="mainBar">
            <div className='containerBar'>
                <img
                src={homebar}
                onClick={() => setIsNavExpanded(!isNavExpanded)}
                className='bar'
                alt='logo UniBay'/> 
            </div>
            <div className='containerLogo'>
                <img
                src={Logo}
                className='logo'
                alt='logo UniBay'/>
            </div>
            <div className='containerSearch'>
                <input
                type='search'
                placeholder="Digite o que você procura"
                className='search'/>
            </div>
            <div className='containerCarrinho'>
                <img
                src={Carrinho}
                className='carrinho'
                alt='logo UniBay'/>
            </div>
            <div className='containerUser'>
                <img
                src={User}
                className='user'
                alt='logo UniBay'/>
            </div>
            <div className='containerSino'>
                <img
                src={Sino}
                className='sino'
                alt='logo UniBay'/>
            </div>
            <p className='containerLogin'>
                Olá, <span className='entre'>Entre</span> ou <br />
                <span className='cadastre'>Cadastre-se</span>!
            </p>
            <div className={`menuList ${isNavExpanded ? 'show': ''}`}>
                   <Button currentPage={'estoquePage'} show={isNavExpanded}/>
                </div>
        </div>
    )
}

export default HomeBar;