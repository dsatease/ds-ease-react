import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import help from '../content/docs/help.md'
import { Markdownc } from './Markdownc'
import { AppContext } from '../App'

export const Help = () => {
    const [data, setData] = useState(``)
    const context = useContext(AppContext)

    useEffect(() => {
        fetch(help).then((res) => {
            return res.text()
        }).then((data) => {
            setData(data)
        }).catch(err => {
            console.log(err);
        })
        context.setShowLeft(false)
    }, [context])

    return (
        <div className='home left-align'>
            <Markdownc md={data} />
        </div>
    )
}
