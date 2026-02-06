import { useState } from 'react';
import MouseSpotlight from './components/MouseSpotlight';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import SkillsPage from './components/SkillsPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'skills'>('home');

  const handleNavigate = (page: 'home' | 'skills') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MouseSpotlight>
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {currentPage === 'home' ? (
        <HomePage onNavigate={handleNavigate} />
      ) : (
        <SkillsPage />
      )}
    </MouseSpotlight>
  );
}

export default App;
