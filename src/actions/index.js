export const changeProject = (name,img,objective, challenge, results, previewp) => ({
	type:'TROCAR_PROJETO',
	projectName:name,
	imgSrc:img,
	objetivo:objective,
	desafios:challenge,
	resultados:results,
	previewp:previewp
});
export const changeCss = (statusCss) => ({
	type: "CHANGE_CSS",
	withCss:statusCss
});
export const changeJs = (statusJS) => ({
	type: "CHANGE_JS",
	withJs:statusJS
})