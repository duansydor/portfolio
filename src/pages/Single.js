import React from 'react';
import { Link } from 'react-router-dom';
import {Abilities} from '../components/Abilities.js';
import { connect } from 'react-redux';




class Single extends React.Component{

	render(){
		let { projectName,imgSrc,objetivo, resultados, previewp, used } = this.props;
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
					<ul style={{fontSize:'18px', width:'400px'}}>
						{ objetivo.map((item) => {
							return(
								<li key={item}>{item}</li>
							);
						}) }
					</ul>
				</div>

				<div>
					<h2>Resultados</h2>
					<ul style={{fontSize:'18px', width:'400px'}}>
					{ resultados.map((results) => {
							return(
								<li key={results}>{results}</li>
							);
						}) }
					</ul>
				</div>
				<div>
					<h2>Foi usado</h2>
					<div className="abilityContainer">
						{
							used.map((item) => {
								return(
									<div key={item.id}>
										<Abilities name={item.name} percentage={item.percentage}/>
									</div>
								);
							})
						}
					</div>
				</div>

				<div style={{display:'flex',justifyContent:'center', width:'100%', marginTop: '80px'}}>
					<a href={previewp} target="_blank" rel="noopener noreferrer" className="btn small">Live Preview</a>
				</div>
				<div style={{display:'flex',justifyContent:'center', width:'100%'}}>
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
	resultados:store.projectState.resultados,
	previewp:store.projectState.previewp,
	used:store.projectState.used
});

export default connect(mapStateToProps)(Single);