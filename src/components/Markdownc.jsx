import Markdown from "markdown-to-jsx"
import { Codec } from "./Codec";

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
      },
    }}>
      {props.md}
    </Markdown>
  )
}
