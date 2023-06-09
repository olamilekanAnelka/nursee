import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import ContactUs from './components/contactUs';
import PageNotFound from './components/pageNotFound';




function App() {
  return(
    <>
    <Routes>
         <Route path='/contactUs' element={<ContactUs />} />
         <Route path='*' element={<PageNotFound/>}/>
         
         
    </Routes>
    </>
  )
  
}

export default App;
