import ReactMarkdown from 'react-markdown'

export const Markdown = (props) => {
  return (
    <ReactMarkdown children={props.md}  />
  )
}
