import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import welcome from '../content/docs/welcome.md'
import { Markdownc } from './Markdownc'
import { AppContext } from '../App'

export const Home = () => {
  const [data, setData] = useState(``)
  const context=useContext(AppContext)

  useEffect(() => {
    fetch(welcome).then((res) => {
      return res.text()
    }).then((data) => {
      setData(data)
    }).catch(err => {
      console.log(err);
    })
    context.setShowLeft(false)
  }, [context])
  return (
    <div className='home'>
      <Markdownc md={data} />
    </div>
  )
}
