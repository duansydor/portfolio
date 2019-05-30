import projeto1img from '../assets/img/projetos/projeto1/header.png';

// const initialState = {
// 	projectName:'',
// 	imgSrc:'',
// 	objetivo:'',
// 	desafios:'',
// 	resultados:'',
// 	previewp:''
// }
const initialState = {
    nome:'Gesso Store',
    img:projeto1img,
	objetivo:[
		"Criar um sistema que tivesse Login para salvar as informações do usuário e recuperar essas informações por meio de sessões;",
		"Realizar as operações basicas do banco de dados: Criar, Visualisar, Editar, Excluir as informações",
	 ],
	 resultados:[
		"Implementação de um login e de cadastro de novos usuários com algumas verificações,",
		"Página de carrinho de compras que mostra apenas os items de um usuário que esta logado",
		"Área administrativa onde apenas o usúario que tem permissão pode fazer as operações de alteração no banco de dados"
	 ],
	previewp:'https://gessostorepreview.000webhostapp.com/',
	used:[
		{
			id:1,
			name:'Javascript',
			percentage:65
		},
		{
			id:2,
			name:'CSS',
			percentage:100
		},
		{
			id:3,
			name:'Php',
			percentage:100
		}
	]
}
export const projectReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'TROCAR_PROJETO':
			return {
				...state,
				projectName:action.projectName,
				imgSrc:action.imgSrc,
				objetivo:action.objetivo,
				resultados:action.resultados,
				previewp:action.previewp,
				used:action.used
			};
		default:
			return state;
	}
};