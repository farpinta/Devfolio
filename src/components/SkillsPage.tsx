import { Monitor, Server, Wrench, Heart, Github, Linkedin, Mail, Briefcase } from 'lucide-react';
import { skills, experience, personalInfo } from '../data/portfolioData';
import styles from './SkillsPage.module.css';

export default function SkillsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.skillsSection}>
        <h2 className={styles.pageTitle}>Skills & Expertise</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <Monitor size={24} />
              <h3 className={styles.skillTitle}>Frontend</h3>
            </div>
            <ul className={styles.skillList}>
              {skills.frontend.map((skill) => (
                <li key={skill.name} className={styles.skillItem}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillLevel}>{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <Server size={24} />
              <h3 className={styles.skillTitle}>Backend</h3>
            </div>
            <ul className={styles.skillList}>
              {skills.backend.map((skill) => (
                <li key={skill.name} className={styles.skillItem}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillLevel}>{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <Wrench size={24} />
              <h3 className={styles.skillTitle}>Tools & Tech</h3>
            </div>
            <ul className={styles.skillList}>
              {skills.tools.map((skill) => (
                <li key={skill.name} className={styles.skillItem}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillLevel}>{skill.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <Heart size={24} />
              <h3 className={styles.skillTitle}>Soft Skills</h3>
            </div>
            <ul className={styles.skillList}>
              {skills.soft.map((skill) => (
                <li key={skill} className={styles.softSkillItem}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <h2 className={styles.pageTitle}>Experience</h2>
        <div className={styles.timeline}>
          {experience.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineDot}>
                <Briefcase size={20} />
              </div>
              <div className={styles.experienceCard}>
                <div className={styles.experienceHeader}>
                  <h3 className={styles.experienceTitle}>{exp.title}</h3>
                  <span className={styles.experiencePeriod}>{exp.period}</span>
                </div>
                <p className={styles.experienceCompany}>{exp.company}</p>
                <p className={styles.experienceDescription}>{exp.description}</p>
                <div className={styles.techTags}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {index < experience.length - 1 && <div className={styles.timelineLine} />}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.contactSection}>
        <h2 className={styles.pageTitle}>Let's Connect</h2>
        <div className={styles.contactLinks}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a href={`mailto:${personalInfo.email}`} className={styles.contactLink}>
            <Mail size={24} />
            <span>Email</span>
          </a>
        </div>
      </section>
    </div>
  );
}
