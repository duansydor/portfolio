import React from 'react';
import { Link } from 'react-router-dom';

function Card(props){
	return(
		<div className="card">
			<Link onClick={props.action} to="single"  >
				<img src={props.prodimg} alt=""/>
			</Link>
		</div>
	);
}
export default Card;