import React, { use, useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/MyContext'

function Home() {
  const [data, setData] = useState()

  // Get Data
  function fetchData() {
    const response = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((res) => console.log('API KA RESPONSE', setData(res)))
      .catch((err) => console.log(err))
  }

  // useEffect
  useEffect(() => {
    fetchData()
  }, [])

  const { name } = use(MyContext)
  return (
    <div style={{ height: "400px" }}>

      <h1>Hello my name is: {name}</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: "200px 200px 200px",
        backgroundColor: 'lightblue'
      }}>
        <strong>ID</strong>
        <strong>USERID</strong>
        <p>Title</p>
      </div>

      {data.map((item, index) => (
        <div key={index || item.id} style={{
          display: 'grid',
          gridTemplateColumns: "200px 200px 200px",
          backgroundColor: 'lightcyan'
        }}>
          <strong>{item.id}</strong>
          <strong>{item.userId}</strong>
          <p>{item.title}</p>
        </div>
      ))
      }


    </div>
  )
}

export default Home