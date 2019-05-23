import React from 'react';
import card from '../assets/img/projetos/card.jpg';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeProject } from '../actions';
import {Store} from '../store';



class Single extends React.Component{

	render(){
		let { projectName,imgSrc,objetivo, desafios, resultados } = this.props;
		return(
			<div className="container">
				<center>
					<h1>	
						{ projectName }
					</h1>
					{imgSrc}
				</center>
				<div className="pimage">
					<img className="projimg" src={card}/>
				</div>
				<br/>
				<br/>

				<div>
					<h2>Objetivo</h2>
					<p>
						{ objetivo }
					</p>
				</div>

				<div>
					<h2>Desafios</h2>
					<p>
						{ desafios }
					</p>
				</div>

				<div>
					<h2>Resultados</h2>
					<p>
						{ resultados }
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
const mapStateToProps = store => ({
	projectName:store.projectState.projectName,
	imgSrc:store.projectState.imgSrc,
	objetivo:store.projectState.objetivo,
	desafios:store.projectState.desafios,
	resultados:store.projectState.resultados
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({changeProject  }, dispatch);
export default connect(mapStateToProps)(Single);