import React, { use, useContext } from 'react'
import { MyContext } from '../context/MyContext'

function Home() {
  const {name}=use(MyContext)
  return (
    <div style={{height:"400px"}}>

      <h1>Hello my name is: {name}</h1>
    </div>
  )
}

export default Home