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
					Aqui você encontrará alguns exemplos de projetos 
					feitos por mim. Caso tenha alguma duvida entre em contato.
                    
					<Link className="btn" to="projetos" >Meus Projetos</Link>
				</p>
			</div>
			
		</div>
	);
}
export default Home;