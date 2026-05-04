import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Sales from './pages/Sales'
import StudentForm from './components/StudentForm'
import CRender from './components/conditional-rendering/CRender'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'

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

  const name = 'Ameer Hamza'
  const contact = "03000000000"


  // Use Effect
  console.log('Hello1', myName)

  useEffect(() => {
    console.log('Use Effect called')
  }, [count])
  console.log('Hello2', myName)

  // 
  return (
    <div>

      {/* <Navbar name={name} phone={contact} />
      <CRender/>
      <StudentForm/>  
      <Footer /> */}

      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App




{/* <h1 className='xyz'>Hello {myName}</h1>
      <Navbar name="Arslan" phone="0909999999"/> */}
{/* <Sales/>   */ }
{/* <h1>{teacherName}</h1>
      <button onClick={tNameChange}>Click me</button>
      <h2>Count: {count}</h2>
      <button onClick={counting}>Count++</button> */}

{/* <StudentForm/> */ }