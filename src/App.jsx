import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './componets/Layout'
import Home from './componets/Home'
import Portfolio from './componets/Portfolio'
import ContactUs from './componets/ContactUs'
import AboutUs from './componets/AboutUs'

function App() {

     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Layout />}>
                         <Route index element={<Home />} />
                         <Route path="portfolio" element={<Portfolio />} />
                         <Route path="contact-us" element={<ContactUs />} />
                         <Route path="about" element={<AboutUs />} />
                    </Route>
               </Routes>
          </BrowserRouter>
     )
}

export default App
