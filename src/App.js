import { Content } from './components/Content'
import { Leftbar } from './components/Leftbar'
import { Navbar } from './components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './components/Home'
import { createContext } from 'react';
import { useState } from 'react';
import { Footer } from './components/Footer';
import { Help } from './components/Help';

export const AppContext = createContext();

function App() {
  const [showLeft, setShowLeft] = useState(false)
  const value = { showLeft, setShowLeft }
  return (
    <BrowserRouter>
      <AppContext.Provider value={value}>
        <div>
          <Navbar />
          <div className="box" >
            {showLeft && <Leftbar />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/help" element={<Help />} />
              <Route path="/:pageid" element={<Content />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
