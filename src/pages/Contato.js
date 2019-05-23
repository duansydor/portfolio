import React from 'react';
import insta  from '../assets/img/insta.png';
import face  from '../assets/img/face.png';
import git  from '../assets/img/git.png';
import email  from '../assets/img/emaila.png';
import whatsapp  from '../assets/img/whatsappa.png';
import { Link } from 'react-router-dom';

function Contato(props){
	return(
		<div className="container">
			<center>
				<h1>Redes Sociais</h1>
			</center>
			<center>
				<div className="links">
					<a href="https://www.instagram.com/duan.webdesigner/" target="_blank"><img src={insta} alt=""/></a>
					<a href="https://www.facebook.com/duan.webdev/" target="_blank"><img src={face} alt=""/></a>
					<a href="https://github.com/duansydor/" target="_blank"><img src={git} alt=""/></a>
				</div>
			</center>
			<div className="center">
				<Link to="/" className="btn small">Início</Link>
			</div>
		</div>
	);
}
export default Contato;