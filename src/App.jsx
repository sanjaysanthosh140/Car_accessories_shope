

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Componets/Header'
import Hero from './Componets/Hero'
import CategorySection from './Componets/CategorySection'
import Locations from './Componets/Location'
import Contact from './Componets/Contact'
import Footer from './Componets/Footer'
function App() {

  return (
    <>
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Hero/>} />
      </Routes>
      <CategorySection/>
      <Locations/>
      <Contact/>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
