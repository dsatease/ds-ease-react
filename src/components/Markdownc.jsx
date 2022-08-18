import Markdown from "markdown-to-jsx"
import { Codec } from "./Codec";

export const Markdownc = (props) => {
  return (
    <Markdown options={{
      forceBlock: true,
      overrides: {
        c: {
          component: Codec,
          props: {
            className: 'foo',
          },
        },
      },
    }}>
      {props.md}
    </Markdown>
  )
}
