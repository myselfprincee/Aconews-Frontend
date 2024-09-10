import './App.css'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Home';

function App() {

// const [language, setLanguage] = useState('en');
const [rerender, setRerender] = useState(0);

  return (
    <>
    <Navbar setRerender={setRerender}/>
    <Home rerender={rerender}/>
    </>
  )
}

export default App
