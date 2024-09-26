import Navbar from './Component/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {
  // function toggleTheme() {
  //   document.documentElement.classList.toggle("dark");
  // }

  return (
    // <div className="w-screen h-screen dark:bg-black dark:text-white">
    //   <button
    //     onClick={toggleTheme}
    //     className='bg-black text-white px-5 py-2 rounded hover:bg-stone-100'
    //   >
    //     Dark Mode
    //   </button>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </>
  );
}

export default App;
