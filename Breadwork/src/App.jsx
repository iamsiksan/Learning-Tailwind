import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import HireTalent from './pages/HireTalent'
import GetHired from './pages/GetHired'
import Community from './pages/Community'
import Facebook from './pages/Facebook'
import Microsoft from './pages/Microsoft'
import Apple from './pages/Apple'
import FlexGrid from './pages/FlexGrid'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-4 sm:px-[7vw] lg:px-[9vw]'>
      <Navbar/>

      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/hiretalent' element={<HireTalent />} />
        <Route path='/gethired' element={<GetHired />} />
        <Route path='/community' element={<Community />} />




        <Route path='/explore/facebook' element={<Facebook />} />
        <Route path='/explore/microsoft' element={<Microsoft />} />
        <Route path='/explore/apple' element={<Apple />} />
        <Route path='/explore/flexgrid' element={<FlexGrid />} />





      </Routes>

    </div>
  )
}

export default App
