import Node from "./Node";

export default interface Thing extends Node {
	"@context": "https://schema.org";
	name: string;
	description: string;
	_content: string;
}
