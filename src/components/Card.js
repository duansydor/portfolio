import React from 'react';
import { Link } from 'react-router-dom';

function Card(props){
	return(
		<Link to="single" className="card col-md-4">
			<img src={props.prodimg}/>
		</Link>
	);
}
export default Card;