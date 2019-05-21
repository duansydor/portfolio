import React from 'react';
import profile from '../assets/img/profile.png';

function Home(props){
	var style={

		button:{
			background:'508AF4',

		},
		h1:{
			marginBottom:'60px',
			fontSize:'36px',
		},
		info:{
			fontSize:'20px',
			textAlign: 'justify',
			img:{
				width:'250px',
				height:'200px'
			}
		}
	}
	return(
		<div style={{position:'absolute'}} className="container">
			<h1 style={style.h1}>Conheça me</h1>
			<div style={style.info} className="row">
				<img className="col-md-8" style={style.info.img} src={profile} alt="profile pic"/>
				<p className="col-md-4">
					Olá, me chamo Duan, moro em
					Guarapuava - PR e tenho 19 anos.
					esse é meu portfolio com alguns 
					projetos realizados durante meu
					curso técnico e nas horas vagas.
					<div className="btn">
					<a href="#" >Meus Projetos</a>
					</div>
				</p>
			</div>
			
		</div>
	);
}
export default Home