import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import AllProjects from './Pages/AllProjects';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Details from './Pages/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/projects/:id' element={<Details></Details>}></Route>
        <Route path='/all' element={<AllProjects></AllProjects>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
