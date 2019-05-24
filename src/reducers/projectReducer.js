const initialState = {
	projectName:'',
	imgSrc:'',
	objetivo:'',
	desafios:'',
	resultados:'',
	previewp:''
}
export const projectReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'TROCAR_PROJETO':
			return {
				...state,
				projectName:action.projectName,
				imgSrc:action.imgSrc,
				objetivo:action.objetivo,
				desafios:action.desafios,
				resultados:action.resultados,
				previewp:action.previewp
			};
		default:
			return state;
	}
};