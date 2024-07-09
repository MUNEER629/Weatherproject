import Auth from './Auth'
import './App.css'
import { Routes,Route} from 'react-router-dom'
import Weather from './weather'
function App() {
  
  return (
    <>
    <Routes>
      <Route path='/weather' element={<Weather/>}/>
      <Route path='/' element={<Auth/>}/>
    </Routes>
  
    </>
  )
}

export default App
