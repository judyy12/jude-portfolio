import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { Contacts } from './pages/Contacts'
import { NotFound } from './pages/NotFound'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Portfolio } from './pages/Portfolio'
import { Prototype } from './pages/Prototype'
import { EDTR } from './pages/EDTR'
import { Inventory } from './pages/Inventory'
import { Bearer } from './pages/Bearer'
import { Admin } from './pages/Admin'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='*' element={<NotFound />}/>

          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/mobile-app-prototype' element={<Prototype />}/>
          <Route path='/interns-edtr' element={<EDTR />}/>
          <Route path='/inventory-tracker' element={<Inventory />}/>
          <Route path='/gate-pass-user' element={<Bearer />}/>
          <Route path='/gate-pass-admin' element={<Admin />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
