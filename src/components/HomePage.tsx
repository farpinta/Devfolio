import { Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import styles from './HomePage.module.css';

interface HomePageProps {
  onNavigate: (page: 'skills') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{personalInfo.name}</h1>
          <h2 className={styles.heroSubtitle}>{personalInfo.title}</h2>
          <p className={styles.heroTagline}>{personalInfo.tagline}</p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.glassCard}>
          <h3 className={styles.sectionTitle}>About Me</h3>
          <p className={styles.aboutText}>{personalInfo.about}</p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <button className={styles.primaryButton} onClick={() => window.open(personalInfo.resumeUrl, '_blank')}>
          <Download size={20} />
          <span>Download Resume</span>
        </button>
        <button className={styles.secondaryButton} onClick={() => onNavigate('skills')}>
          <span>View My Work</span>
          <ArrowRight size={20} />
        </button>
      </section>
    </div>
  );
}
