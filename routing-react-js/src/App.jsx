import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import NavigationBar from './component/NavigationBar'
function App() {

  return (
    <>
    <NavigationBar/>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
