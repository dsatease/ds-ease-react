import React, { useEffect, useState } from 'react'
import { Code } from "../components/Code";
import { Markdown } from "../components/Markdown";
import welcome from '../content/docs/welcome.md'


export const Content = () => {
  const [content, setContent] = useState(``)
  useEffect(() => {
    fetch(welcome).then((res) => {
      return res.text()
    }).then((data) => {
      console.log(data);
      setContent(data)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div className='mid'>
      <Markdown md={content} />
      <Code code="System.out.println('hello')" />
    </div>
  )
}
