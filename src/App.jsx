import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MusicPage from './pages/MusicPage'
import './App.css'

function App() {

  return (
     <div>
 <Router>
      <Routes>
        <Route path="/" element={<MusicPage />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
