export const sanitizeContent = (content) =>
	content
		.replaceAll('&nbsp;', ' ')
		.replaceAll('<br>', '\n\n')
		.replaceAll('<div>', '')
		.replaceAll('</div>', '');
// content
// 	.replaceAll('<div><br></div>', '\\n')
// 	.replaceAll('<div>', '\\n')
// 	.replaceAll('</div>', '');
