import React from 'react';
import Card from '../components/Card';
import cardimg from '../assets/img/projetos/card.jpg';
import { Link } from 'react-router-dom';
export default class Projetos extends React.Component{
	
	render(props){
		return(
			<div className="container">
				<div className="container cardcont">
					<h1>Meus Projetos</h1>
					<br/>
					<br/>
				<div className="row">
					<Card prodimg={cardimg} nome="demo"/>
					<Card prodimg={cardimg} nome="demo"/>
					<Card prodimg={cardimg} nome="demo"/>
				</div>
				<div className="row">
					<Card prodimg={cardimg} nome="demo"/>
					<Card prodimg={cardimg} nome="demo"/>
					<Card prodimg={cardimg} nome="demo"/>
				</div>
				</div>
				<div className="center">
					<Link to="/" className="btn small"  >Início</Link>
				</div>
			</div>
		);
	}
}