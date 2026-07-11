import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const successRoadmap = [
  {
    step: '1',
    title: 'Intake Form',
    description: 'Start by filling out our parent-friendly intake form to share your student\'s academic history and needs.',
    cta: 'Complete the Intake Form',
    ctaLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdQjHRNLuEqbR0tuOREmgmqoUmgLiMA_jdovmssCTHE2B8veQ/viewform',
  },
  {
    step: '2',
    title: 'Goal Review',
    description: 'We review specific learning goals and your child\'s individual learning style to create a roadmap for success.',
  },
  {
    step: '3',
    title: 'Best-Fit Tutor Matching',
    description: 'We carefully match your student with a STEM tutor who aligns with their personality and academic requirements.',
  },
  {
    step: '4',
    title: 'Schedule Confirmation',
    description: 'Once matched, we confirm a recurring schedule that works for your family to maintain consistent progress.',
  },
]

const subjectsByLevel = [
  {
    level: 'Elementary & Middle School',
    subjects: ['Foundational Mathematics', 'Nature & Life Sciences', 'Reading & Writing', 'Social Studies', 'Study Skills & Homework Help'],
  },
  {
    level: 'High School',
    subjects: ['Algebra, Geometry, & Calculus', 'Biology, Chemistry, Physics', 'English Literature & Composition', 'Computer Science', 'Engineering Design'],
  },
  {
    level: 'College Prep',
    subjects: ['SAT/ACT Math Mastery', 'Advanced Placement (AP) Prep', 'Academic Research Methods', 'College Essay Coaching'],
  },
]

export default function Tutoring() {
  return (
    <div className={styles.wixPage}>
      <section className={styles.wixHero}>
        <h1 className={styles.wixHeroTitle}>Our Tutoring Services</h1>
        <p className={styles.wixHeroTagline}>
          Personalized learning support designed to match your student with the right STEM tutor.
        </p>
        <p className={styles.wixHeroSub}>
          We make finding the right support simple and reassuring for parents. First, fill out our short intake form so we can understand your student's needs. Our academic team then reviews your goals and learning style. Finally, we match your child with a best-fit STEM tutor and confirm a schedule that works for your family.
        </p>
        <div className={styles.wixButtonRow}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdQjHRNLuEqbR0tuOREmgmqoUmgLiMA_jdovmssCTHE2B8veQ/viewform"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.wixPrimaryButton}
          >
            Complete the Intake Form
          </a>
          <Link to="/about" className={styles.wixSecondaryButton}>
            View Tutors
          </Link>
        </div>
      </section>

      <section className={styles.wixSection}>
        <div className={styles.wixSplit}>
          <div>
            <h2 className={styles.wixSectionTitle}>Get in Touch</h2>
            <p className={styles.wixIntro}>
              Praxis Enrichment Center provides in-person tutoring sessions and hands-on classes from our College Park location.
            </p>
            <div className={styles.wixContactPanel}>
              <p className={styles.wixContactLine}>praxiscenteredu@gmail.com</p>
              <p className={styles.wixContactLine}>9066 Baltimore Ave</p>
              <p className={styles.wixContactLine}>College Park, Maryland 20740</p>
              <p className={styles.wixContactLine}>Operating Hours: Monday to Saturday 12:00 PM - 8:00 PM · Sunday Closed</p>
              <div className={styles.wixButtonRow} style={{ justifyContent: 'flex-start' }}>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdQjHRNLuEqbR0tuOREmgmqoUmgLiMA_jdovmssCTHE2B8veQ/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.wixPrimaryButton}
                >
                  Sign Up!
                </a>
                <Link to="/about" className={styles.wixSecondaryButton}>
                  Meet Our Tutors
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.wixMapCard}>
            <div>
              <h3 className={styles.wixFeatureTitle}>Find Us in College Park</h3>
              <p className={styles.wixFeatureText}>
                Directions and map details are available for families who want to visit before scheduling tutoring.
              </p>
              <div className={styles.wixButtonRow}>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=9066+Baltimore+Ave%2C+College+Park%2C+MD+20740%2C+USA"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles.wixSecondaryButton}
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.wixSection} ${styles.wixSectionAlt}`}>
        <h2 className={styles.wixSectionTitle}>How We Work</h2>
        <p className={styles.wixIntro}>
          We follow a deliberate process to ensure every student is matched with the right expertise and a learning plan tailored to their unique goals.
        </p>
        <div className={styles.wixRoadmapGrid}>
          {successRoadmap.map((item) => (
            <article key={item.step} className={styles.wixRoadmapCard}>
              <div className={styles.wixStepCircle}>{item.step}</div>
              <h3 className={styles.wixFeatureTitle}>{item.title}</h3>
              <p className={styles.wixFeatureText}>{item.description}</p>
              {item.cta ? (
                <a href={item.ctaLink} target="_blank" rel="noreferrer noopener" className={styles.wixProgramLink}>
                  {item.cta}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.wixSection}>
        <h2 className={styles.wixSectionTitle}>Subject Offerings</h2>
        <div className={styles.wixSubjectGrid}>
          {subjectsByLevel.map((category) => (
            <article key={category.level} className={styles.wixSubjectCard}>
              <h3 className={styles.wixFeatureTitle}>{category.level}</h3>
              <ul className={styles.wixSubjectList}>
                {category.subjects.map((subject) => (
                  <li key={subject}>{subject}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
