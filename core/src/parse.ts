import { Entity } from "./model/Entity";
import parseFrontMatter from "./parse/frontmatter";
import parseContent from "./parse/content";

export function parse( contents: string ): Entity {
	const [ frontMatter, text ] = contents.split( /-+\n/g ).filter( str => str );

	const entity = parseFrontMatter( frontMatter );
	entity._content = parseContent( text );

	return entity;
}
