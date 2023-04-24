import {Routes, Route} from 'react-router-dom'
import Main from './Main/Main'
import PassKnight from './Passknight/Passknight'
import Strength from './StrengthChecker/Strength'
import Generator from './Generator/Generator'
import Home from './Home/Home'



function App(){
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/main' element={<Main/>}/>
      <Route path='/passknight' element={<PassKnight/>}/>
      <Route path='/generator' element={<Generator />}/>
      <Route path='/strength' element={<Strength />}/>
      

    </Routes>
    
  )
}

export default App