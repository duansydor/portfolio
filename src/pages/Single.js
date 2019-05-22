import React from 'react';
import card from '../assets/img/projetos/card.jpg';
import { Link } from 'react-router-dom';

export default class Single extends React.Component{
	states = {
		
	}
	render(){
		return(
			<div className="container">
				<center>
					<h1>	
						Nome do projeto
					</h1>
				</center>
				<div className="pimage">
					<img className="projimg" src={card}/>
				</div>
				<br/>
				<br/>

				<div>
					<h2>Objetivo</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu libero hendrerit, rutrum orci a, pulvinar sapien.
					 Nullam pulvinar ipsum libero, cursus fermentum est accumsan id.
					</p>
				</div>

				<div>
					<h2>Objetivo</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu libero hendrerit, rutrum orci a, pulvinar sapien.
					 Nullam pulvinar ipsum libero, cursus fermentum est accumsan id.
					</p>
				</div>

				<div className="center">
					<a href="www.google.com.br" target="_blank" className="btn small">Ver no github</a>
				</div>
				<br/>
				<br/>
				<br/>
				<br/>
				<div className="center">
					<Link to="/projetos" className='btn secondary'>Voltar</Link>
				</div>
			</div>
		);
	}
}