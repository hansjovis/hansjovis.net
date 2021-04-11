
export default function parseFrontMatter( frontMatter ): Record<string, unknown> {
	const [ metadataString ] = frontMatter.split( /```\w*\n/g ).filter( str => str );
	return JSON.parse( metadataString );
}
