import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import MusicPage from './pages/MusicPage'
import SearchBar from './components/Searchbar'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
     <div>
 <Router>
          <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        />
      <Routes>
        <Route path="/" element={<MusicPage searchTerm={searchTerm} />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
