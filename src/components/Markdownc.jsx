import Markdown from "markdown-to-jsx"
import { Codec } from "./Codec";
import {Redirect} from './Redirect'

export const Markdownc = (props) => {
  return (
    <Markdown options={{
      forceBlock: true,
      overrides: {
        code: {
          component: Codec,
          props: {
            className: 'foo',
          },
        },
        a:{
          component:Redirect
        }
      },
    }}>
      {props.md}
    </Markdown>
  )
}
