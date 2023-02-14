import './App.css';
import './index.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { Home } from './Pages/Home/Organoids/Home';
import { Header } from './Common/Header/Organoids/Header';
import { Footer } from './Common/Footer/Organoids/Footer';
import { Components } from './Pages/Components/Organoids/Components';
import { Projects } from './Pages/Projects/Organoids/Projects';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  //  "homepage": "https://cyrilstrone.github.io/OV/",
  return (
    <div className="App">
      <Header />
      <div className="App__Actual">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Components" element={<Components />}></Route>
          <Route path="Projects" element={<Projects />}></Route>

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
