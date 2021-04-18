import parseFrontMatter from "./parse/frontmatter";
import parseContent from "./parse/content";
import Thing from "./model/Thing";
import { getPermalink } from "./helpers/url";

export function parse( contents: string, path: string ): Thing {
	const [ frontMatter, text ] = contents.split( /-+\n/g ).filter( str => str );

	const thing = parseFrontMatter( frontMatter );
	thing[ "@id" ] = getPermalink( path ) + "#entity";

	if ( text ) {
		thing._content = parseContent( text );
	}

	return thing;
}
