import React from 'react';
import profile from '../assets/img/profile.png';

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
					<div className="container">
						<a className="btn" href="/#/projetos" >Meus Projetos</a>
					</div>
				</p>
			</div>
			
		</div>
	);
}
export default Home