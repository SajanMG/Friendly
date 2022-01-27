import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Detail from './pages/Detail'
import Home from './pages/Home'

const App = () => {
    return (
        <div className="container">
            <Header />
            <main className="main">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:id" element={<Detail />} />
                    </Routes>
                </Router>
            </main>
            <Footer />
        </div>
    )
}

export default App
