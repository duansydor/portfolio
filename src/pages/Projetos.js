import React from 'react';
import Card from '../components/Card';
import cardimg from '../assets/img/projetos/card.jpg'

export default class Projetos extends React.Component{
	
	render(props){
		return(
			<div className="container">
				<div className="container cardcont">
					<h1 className="title">Meus Projetos</h1>
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
					<a href="/" style={{width:'250px', height:'50px', fontSize:'24px'}} className="btn"  >Início</a>
				</div>
			</div>
		);
	}
}