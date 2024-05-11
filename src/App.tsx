import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EpisodesPage from "./pages/EpisodesPage";
import CharactersPage from "./pages/CharactersPage";
import LocationsPage from "./pages/LocationsPage";
import Footer from "./components/Footer";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Episodes</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<EpisodesPage />} />

          <Route path="/characters" element={<CharactersPage />} />

          <Route path="/locations" element={<LocationsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
