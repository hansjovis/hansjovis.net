import { Entity } from "../model/Entity";
import { sep } from "path";

const PREFIX = "https://hansjovis.net";

function createBreadcrumb( pathPrefix: string, path: string[], index: number ): Entity {
	return {
		"@type": "ListItem",
		"position": index,
		"item": {
			"@id": `${ pathPrefix }/${ path.join( "/" ) }`,
			"name": path[ path.length - 1 ],
		}
	};
}

export function parseBreadcrumbs( path: string ): Entity {
	const breadcrumbList: Entity = {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		"itemListElement": [],
	};

	let pathElements = path.split( sep );
	pathElements[ pathElements.length - 1 ] = pathElements[ pathElements.length - 1 ].replace( /\.\w+$/, "" );

	let subPath = [];
	breadcrumbList.itemListElement = pathElements.map(
		( pathElement, index ) => {
			subPath.push( pathElement );
			return createBreadcrumb( PREFIX, subPath, index + 1 )
		}
	);

	return breadcrumbList;
}
