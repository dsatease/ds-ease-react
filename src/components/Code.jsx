import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Code = (props) => {
    return (
    <div style={{borderRadius:'20px'}}>
        <SyntaxHighlighter language="javascript" style={atomDark}>
            {props.code}
        </SyntaxHighlighter>
    </div>
    )
}