import React from 'react';
import Logo from '../assets/img/logo.png';
import {Link} from 'react-router-dom';
function Header(props){
	return(
		<header className="row header">
			<Link to="/"><img className="col-xl-9" src={Logo} alt="logo"/></Link>
			<div className="col-xl-3 navbar-right">
				<div className="menu pull-right">
					<Link to="projetos">Projetos</Link>
					<Link to="contato">Contato</Link>
					<Link to="sobre">Sobre</Link>
				</div>
			</div>
		</header>
	);
}
export default Header;