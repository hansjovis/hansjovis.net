import Thing from "../model/Thing";

export default function parseFrontMatter( frontMatter ): Thing {
	const [ metadataString ] = frontMatter.split( /```\w*\n/g ).filter( str => str );
	return JSON.parse( metadataString );
}
