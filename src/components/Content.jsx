import React, { useEffect, useState } from 'react'
import { Markdownc } from "../components/Markdownc";
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
      <Markdownc md={content} />
    </div>
  )
}
