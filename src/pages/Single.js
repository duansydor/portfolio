import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';




class Single extends React.Component{

	render(){
		let { projectName,imgSrc,objetivo, desafios, resultados, previewp } = this.props;
		return(
			<div className="container single">
				<center>
					<h1>	
						{ projectName }
					</h1>
					
				</center>
				<div className="pimage">
					<img className="projimg" src={imgSrc} alt={projectName}/>
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
					<a href={previewp} target="_blank" rel="noopener noreferrer" className="btn small">Live Preview</a>
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
	resultados:store.projectState.resultados,
	previewp:store.projectState.previewp
});

export default connect(mapStateToProps)(Single);