
import Header from './header.jsx'
import Home from './Home.jsx'
import Contacts from './Contacts.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './footer.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-wrapper">
      <Header />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  )
}
export default App
