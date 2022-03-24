import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import { SiteContext } from './context/SiteData'

//Pages Imports
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import MyBlogPosts from './pages/MyBlogPosts.js';
import BlogPost from './pages/BlogPost.js';
import BlogPostEdit from './pages/BlogPostEdit.js';
import Blogs from './pages/Blogs.js';


//Componenet Imports
import Footer from './components/Footer.js';




function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const value = {currentUser, setCurrentUser}

  return (
    <SiteContext.Provider value={value}>
      <div className="App">

        <Routes>
          <Route path='/' element={<Blogs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blogpost' element={<BlogPost />} />
          <Route path='/blogpost/edit' element={<BlogPostEdit />} />
          <Route path='/myblogposts' element={<MyBlogPosts />} />
        </Routes>

        <Footer />

      </div>
    </SiteContext.Provider>
  );
}

export default App;
