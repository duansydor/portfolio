import React from 'react';
import profile from '../assets/img/profile.png';
import {Link} from 'react-router-dom';

function Home(props){
	return(
		<div className="container">
			<h1 className="title home">Conheça me</h1>
			<div  className="row info">
				<center>
					<img className="col-md-8 profilepic" src={profile} alt="profile pic"/>
				</center>
				<p className="col-md-4">
					Olá, me chamo Duan, moro em
					Guarapuava - PR e tenho 19 anos.
					esse é meu portfolio com alguns 
					projetos realizados durante meu
					curso técnico e nas horas vagas.
					<Link className="btn" to="projetos" >Meus Projetos</Link>
				</p>
			</div>
			
		</div>
	);
}
export default Home