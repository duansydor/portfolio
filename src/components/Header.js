import React from 'react';
import Logo from '../assets/img/logo.png'
function Header(props){
	return(
		<header className="row header">
			<a href="/"><img className="col-xl-9" src={Logo} alt="logo"/></a>
			<div className="col-xl-3 navbar-right">
				<div className="menu pull-right">
					<a href="/projetos">Projetos</a>
					<a href="/contato">Contato</a>
					<a href="/sobre">Sobre</a>
				</div>
			</div>
		</header>
	);
}
export default Header;