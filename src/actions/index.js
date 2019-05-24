export const changeProject = (name,img,objective, challenge, results, previewp) => ({
	type:'TROCAR_PROJETO',
	projectName:name,
	imgSrc:img,
	objetivo:objective,
	desafios:challenge,
	resultados:results,
	previewp:previewp
});