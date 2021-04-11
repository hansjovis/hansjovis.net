import parseMarkdown from "marked";


export default function parseContent( text: string ) {
	return parseMarkdown( text );
}
