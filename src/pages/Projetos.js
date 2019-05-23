import React from 'react';
import Card from '../components/Card';
import cardimg from '../assets/img/projetos/card.jpg';
import { projeto1, projeto2, projeto3, projeto4, projeto5, projeto6 }  from './projetosinfo.js';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeProject } from '../actions';
import {Store} from '../store';



function Projetos(){
	function clicked(info){
		console.log(info.nome)
		let {nome, img, objetivo, desafios, resultados} = info;
		Store.dispatch(changeProject(nome,img,objetivo, desafios,resultados));
	}
		return(
			<div className="container">
				<div className="container cardcont">
					<h1>Meus Projetos</h1>
					<br/>
					<br/>
				<div className="row">
					<Card action={()=>{clicked(projeto1)}} prodimg={projeto1.img} />
					<Card action={()=>{clicked(projeto2)}} prodimg={projeto2.img} />
					<Card action={()=>{clicked(projeto3)}} prodimg={projeto3.img} />
				</div>
				<div className="row">
					<Card action={()=>{clicked(projeto4)}} prodimg={projeto4.img} />
					<Card action={()=>{clicked(projeto5)}} prodimg={projeto5.img} />
					<Card action={()=>{clicked(projeto6)}} prodimg={projeto6.img} />
				</div>
				</div>
				<div className="center">
					<Link to="/" className="btn small"  >Início</Link>
				</div>
			</div>
		);
}

export default connect(null)(Projetos);