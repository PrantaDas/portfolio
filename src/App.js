import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import AllProjects from './Pages/AllProjects';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}>
          <Route index element={<AllProjects></AllProjects>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
