import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Pages/Home/Projects/Projects';
import Blog from './components/Pages/Blog/Blog';
import Footer from './components/Shared/Footer';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
