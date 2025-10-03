import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'

import Root from './pages/Root.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import AuthPage from "./pages/AuthPage"; 
import Services from './pages/Services.jsx'
import Contact from './pages/contact.jsx'
import GenerateResume from './pages/GenerateResume.jsx'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from "./pages/AuthContext.jsx"; // ✅ path sahi



 createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <Toaster/>
      <Routes>
        

      <Route path='/' element={<Root />}>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
     
      <Route path="/services" element={<Services />} />
      <Route path="Contact" element={<Contact/>}/>
      <Route path="login" element={<AuthPage/>}/>
      <Route path="GenerateResume" element={<GenerateResume/>}/>

     



      
      </Route>


      </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
