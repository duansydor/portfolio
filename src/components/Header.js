import React from 'react';
import Logo from '../assets/img/logo.png'
function Header(props){
	return(
		<header className="row header">
			<img className="col-xl-9" src={Logo} alt="logo"/>
			<div className="col-xl-3 navbar-right">
				<div className="menu pull-right">
					<a>Projetos</a>
					<a>Contato</a>
					<a>Sobre</a>
				</div>
			</div>
		</header>
	);
}
export default Header;