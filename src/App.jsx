import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import MusicPage from './pages/MusicPage'
import SearchBar from './components/Searchbar'
import './App.css'
import redHot from './assets/red-hot.png';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

 return (
    <div>
      <img
        src={redHot}
        alt="Red Hot Chili Peppers"
        className="top-right-image"
      />

      <Router>
        {/* Search bar */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Pages */}
        <Routes>
          <Route path="/" element={<MusicPage searchTerm={searchTerm} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
