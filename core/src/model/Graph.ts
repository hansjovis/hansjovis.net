import Node from "./Node";

export default interface Graph extends Node {
	"@graph": Node[]
}
