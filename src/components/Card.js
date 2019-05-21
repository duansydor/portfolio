import React from 'react';

function Card(props){
	return(
		<div className="card col-md-4" onClick={()=>{
			window.location = '/projeto/'+props.nome
		}}>
			<img src={props.prodimg}/>
		</div>
	);
}
export default Card;