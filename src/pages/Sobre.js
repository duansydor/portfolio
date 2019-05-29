import React from 'react';
import profile from '../assets/img/profile.png';
import {Abilities} from '../components/Abilities.js';

import {Link} from 'react-router-dom';

function Sobre(props){
	return(
		<div className="container">
			<div className="row">
				<center>
					<h1>Algumas Informações</h1>
				</center>
				<br/>
			</div>


				<div>
					<div>
						<h2>Tecnologias</h2>
						<div className="abilityContainer"> 
							<Abilities name="Javascript" percentage={80}/>
							<Abilities name="Css" percentage={80}/>
							<Abilities name="Php" percentage={60}/>
							
						</div>
						<h2>UI/UX</h2>
						<div className="abilityContainer"> 
							<Abilities name="Figma" percentage={60}/>		
							<Abilities name="Photoshop" percentage={70}/>		
							<Abilities name="Gimp" percentage={70}/>		
						</div>
						<h2>Linguas</h2>
						<div className="abilityContainer"> 
							<Abilities name="Inglês" percentage={80}/>		
						</div>
					</div>
				</div>
				<br/>
				<br/>
				<br/>
				<div className="center row">
					<Link to="/" className="btn">Ínicio</Link>
				</div>
		</div>
	);
}
export default Sobre;