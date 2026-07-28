import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import classroomPhoto from '../assets/skec/NRG2025-1.JPG'
import printerPhoto from '../assets/IMG_3275.jpg'
import elevatingLearning from '../assets/skec/elevating_learning_stem_projects_for_high_school_students.webp.jpeg'
import tutoringBanner from '../assets/tutoring-banner-1600x686.jpg'
import umdPhoto from '../assets/85.jpeg'

const whyUsItems = [
  {
    title: 'Expert Hands-On Classes',
    description:
      'Interactive coding labs, advanced science experiments, and real-world project work give students practical experience they can apply beyond the classroom.',
  },
  {
    title: 'Personalized Learning',
    description:
      'One-on-one tutoring, customized study plans, and individualized pacing help every student build confidence and make steady progress.',
  },
]

const programCards = [
  {
    title: 'Hands-On STEM Classes',
    image: elevatingLearning,
    description:
      'Instructors guide a classroom full of students to enable them to apply STEM knowledge beyond academics.',
    link: '/classes',
    linkLabel: 'View Classes',
  },
  {
    title: 'Personalized Tutoring',
    image: tutoringBanner,
    description:
      'Personalized tutoring sessions designed to support learning goals, improve confidence, and build academic skills one student at a time.',
    link: '/tutoring',
    linkLabel: 'Book Tutoring',
  },
]

const faqs = [
  {
    question: 'How do I enroll?',
    answer:
      'Explore the website to see our team of tutors and browse our classes for a better understanding. When you would like to enroll, click Register under the classes tab!',
  },
  {
    question: 'What is the process?',
    answer:
      'We begin with an assessment to identify your specific learning goals. Our curriculum is designed to provide a structured path to mastery in STEM subjects.',
  },
  {
    question: 'Are classes hands-on?',
    answer:
      'Absolutely. Our academy emphasizes experiential learning, allowing students to build physical models and solve real-world problems through coding and science.',
  },
  {
    question: 'How long are sessions?',
    answer:
      'Our tutoring sessions typically last 60 minutes. These sessions are designed to be intensive and focused, ensuring maximum academic engagement and retention.',
  },
  {
    question: 'Do you offer tutoring?',
    answer:
      'Yes, we provide comprehensive tutoring services for students of all levels. Our expert tutors are dedicated to helping you overcome academic challenges and excel.',
  },
]

export default function Home() {
  return (
    <div className={styles.wixPage}>
      <section className={styles.wixHero}>
        <h1 className={styles.wixHeroTitle}>Discover Praxis Enrichment Center</h1>
        <p className={styles.wixHeroTagline}>
          pra·xis (noun) — the process of putting a theory, lesson, or abstract idea into practical action
        </p>
        <div className={styles.wixButtonRow}>
          <Link to="/classes" className={styles.wixPrimaryButton}>
            Explore Our Upcoming Classes!
          </Link>
        </div>
        <div className={styles.wixHeroGallery}>
          <img
            className={styles.wixHeroImage}
            src={classroomPhoto}
            alt="Praxis Enrichment Center classroom"
          />
          <img
            className={styles.wixHeroImage}
            src={printerPhoto}
            alt="3D printer in the Praxis classroom"
          />
        </div>
      </section>

      <section className={styles.wixSection}>
        <h2 className={styles.wixSectionTitle}>Why Us?</h2>
        <p className={styles.wixIntro}>
          We combine academic rigor with hands-on experimentation to prepare students for the future of technology and science.
        </p>
        <div className={styles.wixGridTwo}>
          {whyUsItems.map((item) => (
            <article key={item.title} className={styles.wixFeatureCard}>
              <h3 className={styles.wixFeatureTitle}>{item.title}</h3>
              <p className={styles.wixFeatureText}>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.wixSection} ${styles.wixSectionAlt}`}>
        <h2 className={styles.wixSectionTitle}>Class Calendars</h2>
        <p className={styles.wixIntro}>
          See the current weekly class schedule and the upcoming July 12-20 calendar below.
        </p>

        

        <div style={{ marginTop: '42px' }}>
          <p className={styles.programCaption} style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '24px', lineHeight: '1.25' }}>
            Each class is <strong>$45</strong>, with each subsequent class <strong>10% off</strong>.
          </p>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', textAlign: 'center' }}>Week of 7/27-8/2</h3>
          <div className={styles.scheduleGridSix}>
            <div className={styles.scheduleHeader}>Mon 7/27</div>
            <div className={styles.scheduleHeader}>Tue 7/28</div>
            <div className={styles.scheduleHeader}>Wed 7/29</div>
            <div className={styles.scheduleHeader}>Thu 7/30</div>
            <div className={styles.scheduleHeader}>Fri 7/31</div>
            <div className={styles.scheduleHeader}>Sat 8/1</div>
            <div className={styles.scheduleHeader}>Sun 8/2</div>

            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>3:00 PM</p>
              <p className={styles.scheduleClass}>Robotics</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>3:00 PM</p>
              <p className={styles.scheduleClass}>3D Printing</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>3:00 PM</p>
              <p className={styles.scheduleClass}>Medicine</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>3:00 PM</p>
              <p className={styles.scheduleClass}>3D Printing</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>3:00 PM</p>
              <p className={styles.scheduleClass}>Engineering Design Process</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>12:00 PM</p>
              <p className={styles.scheduleClass}>DNA (TBD)</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCellClosed}>Closed</div>
          </div>

          <div style={{ marginTop: '32px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', textAlign: 'center' }}>Week of 8/3-8/9</h3>
            <div className={styles.scheduleGridSix}>
              <div className={styles.scheduleHeader}>Mon 8/3</div>
              <div className={styles.scheduleHeader}>Tue 8/4</div>
              <div className={styles.scheduleHeader}>Wed 8/5</div>
              <div className={styles.scheduleHeader}>Thu 8/6</div>
              <div className={styles.scheduleHeader}>Fri 8/7</div>
              <div className={styles.scheduleHeader}>Sat 8/8</div>
              <div className={styles.scheduleHeader}>Sun 8/9</div>

              <div className={styles.scheduleCell}>
                <p className={styles.scheduleTime}>3:00 PM</p>
                <p className={styles.scheduleClass}>3D Printing</p>
                <p className={styles.scheduleSeats}>12/12 seats</p>
              </div>
              <div className={styles.scheduleCell}>
                <p className={styles.scheduleTime}>3:00 PM</p>
                <p className={styles.scheduleClass}>Engineering Design Process</p>
                <p className={styles.scheduleSeats}>12/12 seats</p>
              </div>
              <div className={styles.scheduleCell}>
                <p className={styles.scheduleTime}>3:00 PM</p>
                <p className={styles.scheduleClass}>Medicine</p>
                <p className={styles.scheduleSeats}>12/12 seats</p>
              </div>
              <div className={styles.scheduleCell}>
                <p className={styles.scheduleTime}>3:00 PM</p>
                <p className={styles.scheduleClass}>Digital Electronics</p>
                <p className={styles.scheduleSeats}>12/12 seats</p>
              </div>
              <div className={styles.scheduleCell}>
                <p className={styles.scheduleTime}>3:00 PM</p>
                <p className={styles.scheduleClass}>Robotics</p>
                <p className={styles.scheduleSeats}>12/12 seats</p>
              </div>
              <div className={styles.scheduleCell}>
                <p className={styles.scheduleTime}>12:00 PM</p>
                <p className={styles.scheduleClass}>DNA (TBD)</p>
                <p className={styles.scheduleSeats}>12/12 seats</p>
              </div>
              <div className={styles.scheduleCellClosed}>Closed</div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.wixSection} ${styles.wixSectionAlt}`}>
        <h2 className={styles.wixSectionTitle}>Our Programs</h2>
        <div className={styles.wixGridTwo}>
          {programCards.map((card) => (
            <article key={card.title} className={styles.wixProgramCard}>
              <img className={styles.wixProgramImage} src={card.image} alt={card.title} />
              <div className={styles.wixProgramBody}>
                <h3 className={styles.wixFeatureTitle}>{card.title}</h3>
                <p className={styles.wixFeatureText}>{card.description}</p>
                <Link className={styles.wixProgramLink} to={card.link}>
                  {card.linkLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.wixSection}>
        <h2 className={styles.wixSectionTitle}>Common Questions</h2>
        <div className={styles.wixFaqGrid}>
          {faqs.map((faq) => (
            <article key={faq.question} className={styles.wixFaqCard}>
              <h3 className={styles.wixFeatureTitle}>{faq.question}</h3>
              <p className={styles.wixFeatureText}>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.wixSection} ${styles.wixSectionAlt}`}>
        <div className={styles.wixSplit}>
          <div className={styles.wixSplitText}>
            <h2 className={styles.wixSectionTitle}>Looking for a personalized tutor for your child?</h2>
            <p className={styles.wixIntro}>
              Give your child the advantage of learning from a tutor who is actively studying at the University of Maryland, one of the nation's leading public research universities.
            </p>
            <div className={styles.wixButtonRow}>
              <Link to="/about" className={styles.wixSecondaryButton}>
                View Tutors
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdQjHRNLuEqbR0tuOREmgmqoUmgLiMA_jdovmssCTHE2B8veQ/viewform?usp=publish-editor"
                className={styles.wixPrimaryButton}
                target="_blank"
                rel="noreferrer noopener"
              >
                Sign Up!
              </a>
            </div>
          </div>
          <img className={styles.wixSplitImage} src={umdPhoto} alt="University of Maryland" />
        </div>
      </section>

      <section className={styles.wixSection}>
        <h2 className={styles.wixSectionTitle}>Get In Touch</h2>
        <p className={styles.wixContactLine}>praxiscenteredu@gmail.com</p>
        <p className={styles.wixContactLine}>9066 Baltimore Ave Unit A, College Park, MD 20740, USA</p>
        <p className={styles.wixContactLine}>Opening Hours: Mon-Sat 12pm to 8 pm · Sun Closed</p>
        <p className={styles.wixContactLine}>
          Empowering the next generation of innovators through hands-on STEM education and personalized academic support.
        </p>
      </section>
    </div>
  )
}
