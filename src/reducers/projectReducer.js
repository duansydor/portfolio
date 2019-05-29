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
    objetivo:"Criar um sistema onde deveriamos implementar um sistema de login, controlar as seções e criar uma área administrativa onde é possível inserir, atualizar, editar e excluir os dados de qualquer tabela . fazer as intereções entre as tabelas do banco de dados.",
    desafios:'Interação entre a tabela do carrinho e e de usuários do banco de dados, para atualizar os valores de todos as tabelas que utilizam esses dados quando qualquer edição fosse feita.',
    resultados:'Desenvolvi uma loja virtual para venda de gesso. no front end foi implementado alertas de feedback, validação de formulários, utilizando javascript. ja no backend foi feito todas as tabelas do banco de dados e o acesso aos dados foi feito utilizando o php. Tudo no padrão MVC. Necessita melhorias',
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
				desafios:action.desafios,
				resultados:action.resultados,
				previewp:action.previewp,
				used:action.used
			};
		default:
			return state;
	}
};