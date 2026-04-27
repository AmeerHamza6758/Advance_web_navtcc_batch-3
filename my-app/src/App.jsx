import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Sales from './pages/Sales'

function App() {
  // Define Hooks
  const [teacherName, setTeacherName] = useState("MEER HAMZA")
  const [count, setCount] = useState(0)
  // let teacherName = "Ameer Hamza"

  function tNameChange() {
    console.log('first')
    // teacherName = "Ali Hamza"

    if (teacherName == "MEER HAMZA") {
      setTeacherName("Ali Hamza")
    }
    if (teacherName == "Ali Hamza") {
      setTeacherName("MEER HAMZA")
    }
    console.log(teacherName)
  }


  // Count

  function counting() {
    setCount(count + 1)
  }
  // Baki kaam

  const myName = "Ameer"
  console.log('Hello', myName)

  const name = 'Ameer Hamza'
  const contact = "03000000000"

  return (
    <div>
      <Navbar name={name} phone={contact} />
      {/* <h1 className='xyz'>Hello {myName}</h1>
      <Navbar name="Arslan" phone="0909999999"/> */}
      {/* <Sales/>   */}

      <h1>{teacherName}</h1>

      <button onClick={tNameChange}>Click me</button>

      <h2>Count: {count}</h2>
      <button onClick={counting}>Count++</button>
      <Footer />
    </div>
  )
}

export default App
