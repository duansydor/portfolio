export const changeProject = (name,img,objective, results, previewp, used) => ({
	type:'TROCAR_PROJETO',
	projectName:name,
	imgSrc:img,
	objetivo:objective,
	resultados:results,
	previewp:previewp,
	used:used
});
export const changeCss = (statusCss) => ({
	type: "CHANGE_CSS",
	withCss:statusCss
});
export const changeJs = (statusJS) => ({
	type: "CHANGE_JS",
	withJs:statusJS
})