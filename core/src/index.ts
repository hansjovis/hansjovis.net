import yargs from "yargs";
import { glob } from "glob";

import load from "./load";

const argv = yargs( process.argv.slice( 2 ) ).argv;

const { src } = argv;

glob( src + "/**/*.md", ( error, filepaths ) => {
	if ( error ) {
		console.error( error );
		return;
	}

	const entities = filepaths.map( load );

	const graph = {
		"@context": "https://schema.org/",
		"@graph": entities
	}

	// @ts-ignore
	console.log( graph );
} );
