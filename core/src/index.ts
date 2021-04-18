import yargs from "yargs";

import loadGraph from "./load";

const argv = yargs( process.argv.slice( 2 ) ).argv;

const { src } = argv;

loadGraph( src as string );
