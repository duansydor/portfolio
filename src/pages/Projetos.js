import React from 'react';
import Card from '../components/Card';
import cardimg from '../assets/img/projetos/card.jpg';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeProject } from '../actions';
import {Store} from '../store';



class Projetos extends React.Component{
	constructor(){
		super();
		this.clicked = this.clicked.bind(this);
	}
	state={

	}
	clicked(nome, img, objetivo, desafios, resultados){
		nome = nome;
		img = img;
		objetivo = objetivo;
		desafios = desafios;
		resultados = resultados;
		Store.dispatch(changeProject(nome,img,objetivo, desafios,resultados));
	}
	render(props){
		return(
			<div className="container">
				<div className="container cardcont">
					<h1>Meus Projetos</h1>
					<br/>
					<br/>
				<div className="row">
					<Card onClick={this.clicked('teste', 'tesasdfas', 'abc', 'oioi', 'oioi')} prodimg={cardimg} nome="demo"/>
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

export default connect(null)(Projetos);