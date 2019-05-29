import React from 'react';
import { Link } from 'react-router-dom';
import {Abilities} from '../components/Abilities.js';
import { connect } from 'react-redux';




class Single extends React.Component{

	render(props){
		let { projectName,imgSrc,objetivo, desafios, resultados, previewp, used } = this.props;
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

				<div style={{display:'flex',justifyContent:'center', width:'100%'}}>
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
	desafios:store.projectState.desafios,
	resultados:store.projectState.resultados,
	previewp:store.projectState.previewp,
	used:store.projectState.used
});

export default connect(mapStateToProps)(Single);