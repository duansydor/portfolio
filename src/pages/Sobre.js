import React from 'react';
import profile from '../assets/img/profile.png';
function Sobre(props){
	return(
		<div className="container">
			<div className="row">
				<center>
					<h1>Algumas Informações</h1>
				</center>
				<br/>
			</div>


			<center>
			<div>
				<div className="sobre">
					<div className="">
						<center>
						<img src={profile} alt=""></img>
						</center>
					</div>
					<div className="">
						<h2>Cursos</h2>
						<p>Técnico em Informática</p>
						<h2>Linguagens</h2>
						<p>
							Java;<br/>
							Javascript;<br/>
							Php.
						</p>
					</div>
				</div>
			</div>
			</center>







			<div className="center row">
				<a href="/" className="btn">Ínicio</a>
			</div>
		</div>
	);
}
export default Sobre;