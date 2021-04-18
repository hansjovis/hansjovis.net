import { readFileSync } from "fs";
import { glob } from "glob";

import { parse } from "./parse";
import Thing from "./model/Thing";
import createWebPage from "./parse/webpage";
import Node from "./model/Node";

function read( path: string ): string {
	return readFileSync( path, { encoding: "utf-8" } );
}

function loadThing( path: string ): Thing {
	return parse( read( path ), path );
}

export default function loadGraph( srcFolder: string ) {
	glob( srcFolder + "/**/*.md", ( error, filePaths ) => {
		if ( error ) {
			console.error( error );
			return;
		}

		const webpages = [];
		const things: Node[] = [];

		filePaths.forEach( path => {
			const thing = loadThing( path );
			things.push( thing );
			webpages.push( createWebPage( thing, path ) );
		} );

		const graph = {
			"@context": "https://schema.org/",
			"@graph": [ ...things, ...webpages ]
		}

		// @ts-ignore
		console.log( graph );
	} );
}
