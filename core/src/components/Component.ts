import Node from "../model/Node";

export default interface Component {
	toJsonLd( node: Node ): Node;

	render( node: Node ): string;
}
