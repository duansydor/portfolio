import React from 'react';
import insta  from '../assets/img/insta.png';
import face  from '../assets/img/face.png';
import git  from '../assets/img/git.png';
import { Link } from 'react-router-dom';

function Contato(props){
	return(
		<div className="container">
			<center>
				<h1>Redes Sociais</h1>
			</center>
			<center>
				<div className="links">
					<a href="https://www.instagram.com/duan.webdesigner/" target="_blank" rel="noopener noreferrer"><img src={insta} alt=""/></a>
					<a href="https://www.facebook.com/duan.webdev/" target="_blank"  rel="noopener noreferrer"><img src={face} alt=""/></a>
					<a href="https://github.com/duansydor/" target="_blank" rel="noopener noreferrer"><img src={git} alt=""/></a>
				</div>
			</center>
			<div  style={{display:'flex',justifyContent:'center', width:'100%'}}>
				<Link to="/" className="btn small">Início</Link>
			</div>
		</div>
	);
}
export default Contato;