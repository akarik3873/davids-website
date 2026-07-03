import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import heroCountry from '../assets/skec/hero-country.jpg'
import istockphotoLab from '../assets/istockphoto-1498506722-612x612.jpg'
import smartKids from '../assets/skec/smart-kids.jpg'
import classroomPhoto from '../assets/skec/NRG2025-1.JPG'
import elevatingLearning from '../assets/skec/elevating_learning_stem_projects_for_high_school_students.webp.jpeg'
import outdoorPlay from '../assets/3d-printed-brush-bots-MRRF-scaled.jpg.webp'
import tutoringBanner from '../assets/tutoring-banner-1600x686.jpg'
import artLessons from '../assets/skec/art-lessons.jpg'
import imaginativePlay from '../assets/skec/imaginative-play.jpg'
import umdPhoto from '../assets/85.jpeg'

/**
 * Public landing page. The header (logo top-left, Log in / Sign up top-right)
 * comes from the shared Layout/Nav. Copy and imagery below are pulled from the
 * Smart Kids Enrichment Center site as starting content — David can edit it.
 */
export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Discover Praxis Enrichment Center
        </h1>
        <p className={styles.heroTagline}>
          Hands-On STEM Classes That Kids Actually Love
        </p>
        <p className={styles.heroSub}>
          <strong>pra·xis</strong> <em>(noun)</em> — the process of putting a theory, lesson, or abstract idea into practical action
        </p>
        <img
          className={styles.missionImg}
          src={classroomPhoto}
          alt="Praxis Enrichment Center mission"
        />
      </section>

      {/* Our Mission moved to Tutoring page */}

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <h2>Educational Offerings</h2>
        <div className={styles.cards}>
          <div className={styles.programCard}>
            <div className={styles.programHeader}>
              <h3>STEM-focused Day Program</h3>
            </div>
            <img
              className={styles.programImg}
              src={elevatingLearning}
              alt="Elevating learning"
            />
            <p className={styles.programCaption}>
              Instructors guide a classroom full of students to enable them to
              apply STEM knowledge beyond academics.
            </p>
            <Link className={styles.bookBtn} to="/classes">
              View Classes
            </Link>
          </div>
          <div className={styles.programCard}>
            <div className={styles.programHeader}>
              <h3>1-on-1 Tutoring</h3>
            </div>
            <img
              className={styles.programImg}
              src={tutoringBanner}
              alt="Tutoring banner"
            />
            <p className={styles.programCaption}>
              Personalized tutoring sessions designed to support learning goals,
              improve confidence, and build academic skills one student at a time.
            </p>
            <Link className={styles.bookBtn} to="/tutors">
              Meet Our Tutors
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <h2>Class Schedule</h2>
        <p className={styles.programCaption}><strong>Cost:</strong> $45 per class (3-hour session)</p>
        <div className={styles.scheduleGrid}>
          <div className={styles.scheduleDay}>
            <h3>Tuesday, 6/30</h3>
            <ul>
              <li>3D Printing + CAD - 12:00 PM</li>
              <li>Scratch Programming - 4:00 PM</li>
            </ul>
          </div>
          <div className={styles.scheduleDay}>
            <h3>Wednesday, 7/1</h3>
            <ul>
              <li>Microscopy - 12:00 PM</li>
              <li>Epidemiology - 4:00 PM</li>
            </ul>
          </div>
          <div className={styles.scheduleDay}>
            <h3>Thursday, 7/2</h3>
            <ul>
              <li>3D Printing + CAD - 12:00 PM</li>
              <li>Digital Electronics + Arduino - 4:00 PM</li>
            </ul>
          </div>
          <div className={styles.scheduleDay}>
            <h3>Friday, 7/3</h3>
            <ul>
              <li>Intro to Epidemiology and Disease Outbreak - 12:00 PM</li>
              <li><em>Closes early</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <h2>FREE CLASS WEEK!</h2>
        <p className={styles.programCaption}><strong>July 12-18</strong> — All classes are FREE this week!</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: '12px', maxWidth: '1200px', margin: '24px auto 0', fontSize: '0.9rem' }}>
          <div style={{ textAlign: 'center', fontWeight: 'bold', padding: '12px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>Sun 7/12</div>
          <div style={{ textAlign: 'center', fontWeight: 'bold', padding: '12px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>Mon 7/13</div>
          <div style={{ textAlign: 'center', fontWeight: 'bold', padding: '12px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>Tue 7/14</div>
          <div style={{ textAlign: 'center', fontWeight: 'bold', padding: '12px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>Wed 7/15</div>
          <div style={{ textAlign: 'center', fontWeight: 'bold', padding: '12px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>Thu 7/16</div>
          <div style={{ textAlign: 'center', fontWeight: 'bold', padding: '12px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>Fri 7/17</div>
          <div style={{ textAlign: 'center', fontWeight: 'bold', padding: '12px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>Sat 7/18</div>
          
          <div style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '4px', textAlign: 'center', color: '#999' }}>Closed</div>
          <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #ddd' }}>
            <p style={{ marginBottom: '8px', fontWeight: '500' }}>12:00 PM</p>
            <p style={{ fontSize: '0.85rem', marginBottom: '8px' }}>Robotics</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '12px' }}>Minh</p>
            <p style={{ marginBottom: '8px', fontWeight: '500' }}>4:00 PM</p>
            <p style={{ fontSize: '0.85rem', marginBottom: '4px' }}>3D Printing</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '12px' }}>Minh / Thanh</p>
            <p style={{ fontSize: '0.75rem', color: '#2196F3', fontWeight: '600', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #eee' }}>8/12 seats</p>
          </div>
          <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #ddd' }}>
            <p style={{ marginBottom: '8px', fontWeight: '500' }}>12:00 PM</p>
            <p style={{ fontSize: '0.85rem', marginBottom: '8px' }}>DE + Arduino</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '12px' }}>Minh</p>
            <p style={{ marginBottom: '8px', fontWeight: '500' }}>4:00 PM</p>
            <p style={{ fontSize: '0.85rem', marginBottom: '4px' }}>Engineer Design</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '12px' }}>Minh / Thanh / Dillon</p>
            <p style={{ fontSize: '0.75rem', color: '#2196F3', fontWeight: '600', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #eee' }}>10/12 seats</p>
          </div>
          <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #ddd' }}>
            <p style={{ marginBottom: '8px', fontWeight: '500' }}>12:00 PM</p>
            <p style={{ fontSize: '0.85rem', marginBottom: '8px' }}>Medicine</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '12px' }}>Tien / Vy</p>
            <p style={{ marginBottom: '8px', fontWeight: '500' }}>4:00 PM</p>
            <p style={{ fontSize: '0.85rem', marginBottom: '4px' }}>Strawberry DNA</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '12px' }}>Tien / Vy</p>
            <p style={{ fontSize: '0.75rem', color: '#2196F3', fontWeight: '600', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #eee' }}>9/12 seats</p>
          </div>
          <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #ddd' }}>
            <p style={{ marginBottom: '8px', fontWeight: '500' }}>12:00 PM</p>
            <p style={{ fontSize: '0.85rem', marginBottom: '8px' }}>Engineer Design</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '12px' }}>Minh + Brandon</p>
            <p style={{ marginBottom: '8px', fontWeight: '500' }}>4:00 PM</p>
            <p style={{ fontSize: '0.85rem', marginBottom: '4px' }}>3D Printing</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '12px' }}>Minh / Thanh / Dillon</p>
            <p style={{ fontSize: '0.75rem', color: '#2196F3', fontWeight: '600', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #eee' }}>11/12 seats</p>
          </div>
          <div style={{ padding: '16px', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #ddd' }}>
            <p style={{ marginBottom: '8px', fontWeight: '500' }}>12:00 PM</p>
            <p style={{ fontSize: '0.85rem', marginBottom: '8px' }}>Microscopy</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '12px' }}>Tien / Vy</p>
            <p style={{ marginBottom: '8px', fontWeight: '500' }}>4:00 PM</p>
            <p style={{ fontSize: '0.85rem', marginBottom: '4px' }}>Epidemiology</p>
            <p style={{ fontSize: '0.8rem', color: '#666', marginBottom: '12px' }}>Tien / Vy</p>
            <p style={{ fontSize: '0.75rem', color: '#2196F3', fontWeight: '600', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #eee' }}>7/12 seats</p>
          </div>
          <div style={{ padding: '16px', backgroundColor: '#e8f4f8', borderRadius: '4px', textAlign: 'center', border: '2px solid #2196F3' }}>
            <p style={{ fontWeight: '600', color: '#2196F3', marginBottom: '4px' }}>Open House</p>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>All Day</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.split}>
          <div className={styles.splitText}>
            <h2>Looking for a personalized tutor for your child?</h2>
            <p>
              Give your child the advantage of learning from a tutor who is actively studying at the <strong>University of Maryland</strong>, one of the nation's leading public research universities. More than just academic support, our tutors serve as relatable role models who can inspire confidence, curiosity, and a love of learning!
            </p>
            <div className={styles.ctaRow}>
              <Link to="/tutors" className={styles.secondaryBtn}>
                View Tutors
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdQjHRNLuEqbR0tuOREmgmqoUmgLiMA_jdovmssCTHE2B8veQ/viewform?usp=publish-editor"
                className={styles.primaryBtn}
                target="_blank"
                rel="noreferrer noopener"
              >
                Sign Up!
              </a>
            </div>
          </div>
          <img
            className={styles.missionImg}
            src={umdPhoto}
            alt="University of Maryland"
          />
        </div>
      </section>


      {/* Mission and Goals moved to hero area */}

      <section className={`${styles.section} ${styles.contact}`}>
        <h2>Get In Touch</h2>
        <p>9066 Baltimore Ave Unit A, College Park, MD 20740, USA</p>
        <p>Email: praxiscenteredu@gmail.com</p>
        <p>Opening Hours: Mon-Sat 12pm to 8 pm · Sun Closed (closed on July 4th)</p>
      </section>
    </div>
  )
}
