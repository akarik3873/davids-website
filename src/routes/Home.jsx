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
      'Enrollment is simple. Visit our campus or complete our online inquiry form to schedule a personalized consultation with our academic advisors.',
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

        <div style={{ marginTop: '28px' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', textAlign: 'center' }}>FREE CLASS WEEK!</h3>
          <p className={styles.programCaption} style={{ fontSize: '1.1rem', marginBottom: '24px' }}><strong>July 12-18</strong> — All classes are FREE this week!</p>
          <div className={styles.scheduleGrid}>
            <div className={styles.scheduleHeader}>Sun 7/12</div>
            <div className={styles.scheduleHeader}>Mon 7/13</div>
            <div className={styles.scheduleHeader}>Tue 7/14</div>
            <div className={styles.scheduleHeader}>Wed 7/15</div>
            <div className={styles.scheduleHeader}>Thu 7/16</div>
            <div className={styles.scheduleHeader}>Fri 7/17</div>
            <div className={styles.scheduleHeader}>Sat 7/18</div>

            <div className={styles.scheduleCellClosed}>Closed</div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>12:00 PM</p>
              <p className={styles.scheduleClass}>Robotics</p>
              <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>11/12 seats</p>
              <div className={styles.scheduleDivider}></div>
              <p className={styles.scheduleTime}>4:00 PM</p>
              <p className={styles.scheduleClass}>3D Printing</p>
              <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>12:00 PM</p>
              <p className={styles.scheduleClass}>Digital Electronics</p>
              <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
              <div className={styles.scheduleDivider}></div>
              <p className={styles.scheduleTime}>4:00 PM</p>
              <p className={styles.scheduleClass}>Engineer Design</p>
              <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>12:00 PM</p>
              <p className={styles.scheduleClass}>Medicine</p>
              <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
              <div className={styles.scheduleDivider}></div>
              <p className={styles.scheduleTime}>4:00 PM</p>
              <p className={styles.scheduleClass}>Strawberry DNA</p>
              <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>12:00 PM</p>
              <p className={styles.scheduleClass}>Engineer Design</p>
              <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>8/12 seats</p>
              <div className={styles.scheduleDivider}></div>
              <p className={styles.scheduleTime}>4:00 PM</p>
              <p className={styles.scheduleClass}>3D Printing</p>
              <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>12:00 PM</p>
              <p className={styles.scheduleClass}>Microscopy</p>
              <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
              <div className={styles.scheduleDivider}></div>
              <p className={styles.scheduleTime}>4:00 PM</p>
              <p className={styles.scheduleClass}>Epidemiology</p>
              <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCellOpen}>
              <p style={{ fontWeight: '700', color: '#2196F3', marginBottom: '6px', fontSize: '1.05rem' }}>Open House</p>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>All Day</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '42px' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', textAlign: 'center' }}>Our Upcoming Classes</h3>
          <p className={styles.programCaption} style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '24px', lineHeight: '1.25' }}>
            Each class is <strong>$45</strong>, with each subsequent class <strong>10% off</strong>.
          </p>
          <div className={styles.scheduleGridSix}>
            <div className={styles.scheduleHeader}>Mon 7/20</div>
            <div className={styles.scheduleHeader}>Tue 7/21</div>
            <div className={styles.scheduleHeader}>Wed 7/22</div>
            <div className={styles.scheduleHeader}>Thu 7/23</div>
            <div className={styles.scheduleHeader}>Fri 7/24</div>
            <div className={styles.scheduleHeader}>Sat 7/25</div>
            <div className={styles.scheduleHeader}>Sun 7/26</div>

            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>12:00 PM</p>
              <p className={styles.scheduleClass}>Scratch Programming</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
              <div className={styles.scheduleDivider}></div>
              <p className={styles.scheduleTime}>4:00 PM</p>
              <p className={styles.scheduleClass}>Engineering Design</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>12:00 PM</p>
              <p className={styles.scheduleClass}>3D Printing</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
              <div className={styles.scheduleDivider}></div>
              <p className={styles.scheduleTime}>4:00 PM</p>
              <p className={styles.scheduleClass}>Digital Electronics</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>12:00 PM</p>
              <p className={styles.scheduleClass}>Digital Electronics</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
              <div className={styles.scheduleDivider}></div>
              <p className={styles.scheduleTime}>4:00 PM</p>
              <p className={styles.scheduleClass}>Scratch Programming</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>12:00 PM</p>
              <p className={styles.scheduleClass}>Robotics</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
              <div className={styles.scheduleDivider}></div>
              <p className={styles.scheduleTime}>4:00 PM</p>
              <p className={styles.scheduleClass}>Engineering Design</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>12:00 PM</p>
              <p className={styles.scheduleClass}>Medicine</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
              <div className={styles.scheduleDivider}></div>
              <p className={styles.scheduleTime}>4:00 PM</p>
              <p className={styles.scheduleClass}>Strawberry DNA</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCell}>
              <p className={styles.scheduleTime}>12:00 PM</p>
              <p className={styles.scheduleClass}>3D Printing</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
              <div className={styles.scheduleDivider}></div>
              <p className={styles.scheduleTime}>12:00 PM</p>
              <p className={styles.scheduleClass}>Strawberry DNA</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
              <div className={styles.scheduleDivider}></div>
              <p className={styles.scheduleTime}>4:00 PM</p>
              <p className={styles.scheduleClass}>Engineering Design</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
              <div className={styles.scheduleDivider}></div>
              <p className={styles.scheduleTime}>4:00 PM</p>
              <p className={styles.scheduleClass}>Microscopy</p>
              <p className={styles.scheduleSeats}>12/12 seats</p>
            </div>
            <div className={styles.scheduleCellClosed}>Closed</div>
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
