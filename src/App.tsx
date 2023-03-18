import './App.css';
import './index.css';
import { Route, Routes } from "react-router-dom";
import { Home } from './Pages/Home/Organoids/Home';
import { Header } from './Common/Header/Organoids/Header';
import { Footer } from './Common/Footer/Organoids/Footer';
import { Portfolio } from './Pages/Portfolio/Organoids/Portfolio';
import { Snippet } from './Pages/Snippet/Organoids/Snippet';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="App__Actual">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Snippet" element={<Snippet />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
