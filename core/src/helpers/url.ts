
function removeFileType( url ) {
	return url.replace( /.\w+$/, "" );
}

export function getPermalink( url ) {
	return removeFileType( url );
}
