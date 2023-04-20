import React from 'react';
import {Container} from '@material-ui/core';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
//Switch and components was replaced by Routes and element 
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return(
    
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        {/* Switch was replaced */}
        <Routes>
          <Route path= "/"  element={<Home /> } />
          <Route path= "/posts" element={<Home />}/>
          <Route path= "/posts/search" element={<Home />}/>
          <Route path= "/posts/:id" element={<PostDetails />} />
          <Route path= "/auth" element={(!user? <Auth /> : <Home /> )} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
export default App;