import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism';


export const Codec = (props) => {
    const [state] = useState(props.children[0])
    return (
        <div style={{fontSize:'12.72px'}}>
            <SyntaxHighlighter language='java' style={oneDark}>
                {state}
            </SyntaxHighlighter>
        </div>
    )
}
