import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen selection:bg-primary/30 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}
