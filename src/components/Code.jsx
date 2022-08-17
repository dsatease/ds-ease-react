import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Code = (props) => {
    return (
    <div style={{width:'98%',margin:'auto',borderRadius:'20px',overflow:'hidden'}}>
        <SyntaxHighlighter language="javascript" style={atomDark}>
            {props.code}
        </SyntaxHighlighter>
    </div>
    )
}