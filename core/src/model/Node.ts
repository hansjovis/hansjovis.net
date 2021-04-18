import { Context } from "./Context";

export default interface Node {
	"@context"?: Context;
	"@type"?: string;
	"@id"?: string;
}
