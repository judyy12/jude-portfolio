import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { ProjDetails } from './pages/ProjectDetails'
import { About } from './pages/About'
import { Contacts } from './pages/Contacts'
import { NotFound } from './pages/NotFound'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Portfolio } from './pages/Portfolio'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/project-details' element={<ProjDetails />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='*' element={<NotFound />}/>

          <Route path='/portfolio' element={<Portfolio />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
