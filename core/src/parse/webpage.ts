import Thing from "../model/Thing";
import { parseBreadcrumbs } from "./breadcrumbs";

const WEBSITE_NAME = "hansjovis.net";
const SEP = "•";

export default function createWebPage( thing: Thing, path: string ) {
	const breadcrumbs = parseBreadcrumbs( path );
	return {
		"@context": "https://schema.org/",
		"@type": "WebPage",
		"breadcrumbs": breadcrumbs,
		"name": `${ thing.name } ${ SEP } ${ WEBSITE_NAME }`,
		"description": thing.description,
		"mainEntity": {
			"@id": thing[ "@id" ]
		},
	};
}
