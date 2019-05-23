const initialState = {
	projectName:'A project',
	imgSrc:'project image',
	objetivo:'Loreajsdhasjkdhamsndm',
	desafios:'Alot of challenges',
	resultados:'bem loko aksdjalskdj'
}
export const projectReducer = (state = initialState, action) => {
	console.log(initialState);
	switch(action.type) {
		case 'TROCAR_PROJETO':
			return {
				...state,
				projectName:action.projectName,
				imgSrc:action.imgSrc,
				objetivo:action.objetivo,
				desafios:action.desafios,
				resultados:action.resultados
			};
		default:
			return state;
	}
};