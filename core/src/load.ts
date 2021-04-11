import { readFileSync } from "fs";

import { Entity } from "./model/Entity";
import { parse } from "./parse";
import { parseBreadcrumbs } from "./parse/breadcrumbs";

const WEBSITE_NAME = "hansjovis.net";
const SEP = "•";

function read( path: string ): string {
	return readFileSync( path, { encoding: "utf-8"  } );
}

export default function load( path: string ): Entity {
	const breadcrumbs = parseBreadcrumbs( path );
	const entity = parse( read( path ) );

	return  {
		"@context": "https://schema.org/",
		"@type": "WebPage",
		"breadcrumbs": breadcrumbs,
		"name": `${ entity.name } ${ SEP } ${ WEBSITE_NAME }`,
		"description": entity.description,
		"mainEntity": entity,
	};
}
