import React from 'react';
import Card from '../components/Card';
import { projeto1, projeto2, projeto3, projeto4, projeto5, projeto6 }  from './projetosinfo.js';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { changeProject } from '../actions';
import {Store} from '../store';

import p1icon from '../assets/img/projetos/projeto1/icon.png';


function Projetos(){
	function clicked(info){
		console.log(info.previewp)
		let {nome, img, objetivo, desafios, resultados, previewp, used} = info;
		Store.dispatch(changeProject(nome,img,objetivo, desafios,resultados, previewp, used));
	}
		return(
			<div className="container">
				<h1>Meus Projetos</h1>
			
				<div className="cardrow">
					<Card action={()=>{clicked(projeto1)}} prodimg={p1icon} />
					<Card action={()=>{clicked(projeto1)}} prodimg={p1icon} />
					<Card action={()=>{clicked(projeto1)}} prodimg={p1icon} />
					{/* <Card action={()=>{clicked(projeto2)}} prodimg={projeto2.img}/>
					<Card action={()=>{clicked(projeto3)}} prodimg={projeto3.img} /> */}
				</div>
				<div className="cardrow">
					<Card action={()=>{clicked(projeto1)}} prodimg={p1icon} />
					<Card action={()=>{clicked(projeto1)}} prodimg={p1icon} />
					<Card action={()=>{clicked(projeto1)}} prodimg={p1icon} />
					{/* <Card action={()=>{clicked(projeto4)}} prodimg={projeto4.img} />
					<Card action={()=>{clicked(projeto5)}} prodimg={projeto5.img} />
					<Card action={()=>{clicked(projeto6)}} prodimg={projeto6.img} /> */}
				</div>
				<div className="cardrow">
					<Card action={()=>{clicked(projeto1)}} prodimg={p1icon} />
					<Card action={()=>{clicked(projeto1)}} prodimg={p1icon} />
					<Card action={()=>{clicked(projeto1)}} prodimg={p1icon} />
					{/* <Card action={()=>{clicked(projeto4)}} prodimg={projeto4.img} />
					<Card action={()=>{clicked(projeto5)}} prodimg={projeto5.img} />
					<Card action={()=>{clicked(projeto6)}} prodimg={projeto6.img} /> */}
				</div>
				

				<div className="center row">
					<Link to="/" className="btn"  >Início</Link>
				</div>
			</div>
		);
}

export default connect(null)(Projetos);