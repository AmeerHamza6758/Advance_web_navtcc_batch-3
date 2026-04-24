import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Sales from './pages/Sales'

function App() {
  const myName = "Ameer"
  console.log('Hello', myName)

  const name = 'Ameer Hamza'
  const contact = "03000000000"

  return (
    <div>
      <Navbar name={name} phone={contact}/>
      {/* <h1 className='xyz'>Hello {myName}</h1>
      <Navbar name="Arslan" phone="0909999999"/> */}
      <Sales/>  
      <Footer/>
    </div>
  )
}

export default App
