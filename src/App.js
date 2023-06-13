import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import ContactUs from './components/contactUs/contactUs'
import PageNotFound from './components/pageNotFound/pageNotFound';
import Login from './components/LoginForm/login';
import Reg from './components/RegistrationForm/reg';




function App() {
  return(
    <>
    <Routes>
         <Route path='/contactUs' element={<ContactUs />} />
         <Route path='*' element={<PageNotFound/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Reg/>}/>
         
         
    </Routes>
    </>
  )
  
}

export default App;
