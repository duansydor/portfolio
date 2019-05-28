    
import React from 'react';
import profile from '../assets/img/profile.png';
import Calculator from '../components/Calculator.js';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';

function Home(props){
	return(
		<div className="container">
			<h1 className="title home">Conheça me</h1>
			<div  className="row info">
				<center>
					<img className="col-md-8 profilepic" src={profile} alt="profile pic"/>
				</center>
				<p className="col-md-4 text">
					Olá, me chamo Duan, moro em
					Guarapuava - PR e tenho 19 anos.
					Aqui você encontrará alguns exemplos de projetos 
					feitos por mim. Caso tenha alguma duvida entre em contato.
                    <br/>
                    <br/>
                    <br/>
					<Link className="btn" to="projetos" >Meus Projetos</Link>
				</p>
			</div>
			<h1 className="title home">Algumas Habilidades</h1>
			<h2 style={{fontWeight:'400',fontSize:'20px',color:'darkred'}}>Altere as propriedades da calculadora usando o checkbox</h2>
			<Calculator/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<Footer/>
		</div>
	);
}
export default Home;