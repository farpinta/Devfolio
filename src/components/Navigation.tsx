import { Home, Code } from 'lucide-react';
import styles from './Navigation.module.css';

interface NavigationProps {
  currentPage: 'home' | 'skills';
  onNavigate: (page: 'home' | 'skills') => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <button
          className={`${styles.navButton} ${currentPage === 'home' ? styles.active : ''}`}
          onClick={() => onNavigate('home')}
        >
          <Home size={20} />
          <span>Home</span>
        </button>
        <button
          className={`${styles.navButton} ${currentPage === 'skills' ? styles.active : ''}`}
          onClick={() => onNavigate('skills')}
        >
          <Code size={20} />
          <span>Skills & Experience</span>
        </button>
      </div>
    </nav>
  );
}
