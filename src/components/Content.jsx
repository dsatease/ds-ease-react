import React, { useEffect, useState } from 'react'
import { Markdownc } from "../components/Markdownc";
import welcome from '../content/docs/ArrayList.md'

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
    <div className='content'>
      <div className="content-md" style={{width:'65%'}}>
        <Markdownc md={content} />
      </div>
      <div className="scrollview" style={{width:'30%'}}>

      </div>
    </div>
  )
}
