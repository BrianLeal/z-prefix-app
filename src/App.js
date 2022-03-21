import './App.css';
import { Routes, Route } from 'react-router-dom';

//Pages Imports
import Login from './pages/Login.js'
import MyBlogPosts from './pages/MyBlogPosts.js';
import BlogPost from './pages/BlogPost.js';
import BlogPostEdit from './pages/BlogPostEdit.js';
import Blogs from './pages/Blogs.js';
import Home from './pages/Home.js'

//Componenet Imports
import Header from './components/Header.js';
import Footer from './components/Footer.js';




function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogpost' element={<BlogPost />} />
        <Route path='/blogpost/edit' element={<BlogPostEdit />} />
        <Route path='/myblogposts' element={<MyBlogPosts />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
