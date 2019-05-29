import React from 'react';
export const Abilities = (props) => {
	let style = {
        abcont:{
            marginRight:'80px'
        },
		abilityLevel:{
			width:'250px',
			border:'1px solid grey',
			borderRadius:'10px',
		}
	}
	return(
		<div style={style.abcont}>
			<p>{props.name}</p>
			<div style={style.abilityLevel}>
				<div style={{width:props.percentage+"%", height:'30px', background:'rgb(80,120,244', borderRadius:'10px'}}></div>
			</div>
		</div>
	);
}
