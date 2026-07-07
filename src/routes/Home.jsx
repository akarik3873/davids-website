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
            <Link className={styles.bookBtn} to="/about">
              Meet Our Tutors
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>FREE CLASS WEEK!</h2>
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
            <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
            <p style={{ marginBottom: '6px', fontWeight: '600', fontSize: '0.9rem', marginTop: '6px' }}>4:00 PM</p>
            <p className={styles.scheduleClass}>3D Printing</p>
            <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
          </div>
          <div className={styles.scheduleCell}>
            <p className={styles.scheduleTime}>12:00 PM</p>
            <p className={styles.scheduleClass}>DE + Arduino</p>
            <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
            <p style={{ marginBottom: '6px', fontWeight: '600', fontSize: '0.9rem', marginTop: '6px' }}>4:00 PM</p>
            <p className={styles.scheduleClass}>Engineer Design</p>
            <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
          </div>
          <div className={styles.scheduleCell}>
            <p className={styles.scheduleTime}>12:00 PM</p>
            <p className={styles.scheduleClass}>Medicine</p>
            <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
            <p style={{ marginBottom: '6px', fontWeight: '600', fontSize: '0.9rem', marginTop: '6px' }}>4:00 PM</p>
            <p className={styles.scheduleClass}>Strawberry DNA</p>
            <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
          </div>
          <div className={styles.scheduleCell}>
            <p className={styles.scheduleTime}>12:00 PM</p>
            <p className={styles.scheduleClass}>Engineer Design</p>
            <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
            <p style={{ marginBottom: '6px', fontWeight: '600', fontSize: '0.9rem', marginTop: '6px' }}>4:00 PM</p>
            <p className={styles.scheduleClass}>3D Printing</p>
            <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
          </div>
          <div className={styles.scheduleCell}>
            <p className={styles.scheduleTime}>12:00 PM</p>
            <p className={styles.scheduleClass}>Microscopy</p>
            <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
            <p style={{ marginBottom: '6px', fontWeight: '600', fontSize: '0.9rem', marginTop: '6px' }}>4:00 PM</p>
            <p className={styles.scheduleClass}>Epidemiology</p>
            <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>12/12 seats</p>
          </div>
          <div className={styles.scheduleCellOpen}>
            <p style={{ fontWeight: '700', color: '#2196F3', marginBottom: '6px', fontSize: '1.05rem' }}>Open House</p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>All Day</p>
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
              <Link to="/about" className={styles.secondaryBtn}>
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

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>Class Cancellation Policy</h3>
            <p><strong>100% refund</strong> up to one week before class</p>
            <p><strong>50% refund</strong> up to 48 hours before class</p>
            <p><strong>0% refund</strong> after 48 hours</p>
          </div>

          <div className={styles.faqItem}>
            <h3>Low Enrollment</h3>
            <p>In the event that Praxis cancels a class due to low enrollment, 100% of the ticket price including fees will be promptly refunded.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>Discounts</h3>
            <p><strong>10% discount</strong> for siblings</p>
            <p><strong>10% discount</strong> for multi-class registration</p>
          </div>

          <div className={styles.faqItem}>
            <h3>Can I Sit In Class With My Child?</h3>
            <p>Yes, as space allows! Please be mindful not to be a distraction. We reserve the right to ask you to step out if needed.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>How Do I Enroll?</h3>
            <p>Three ways to enroll:</p>
            <p>• Complete the <strong>tutoring intake form</strong></p>
            <p>• Fill out the <strong>class registration form</strong></p>
            <p>• <strong>Contact us directly</strong></p>
          </div>

          <div className={styles.faqItem}>
            <h3>Advantages of Group Classes</h3>
            <p>• Learn from your peers</p>
            <p>• Build collaboration and teamwork skills</p>
            <p>• Engage in group problem-solving activities</p>
          </div>

          <div className={styles.faqItem}>
            <h3>In-Person / Online Options</h3>
            <p>For non-hands-on classes and tutoring, we offer both in-person and online options. We recommend coming in-person for better learning outcomes and more personalized guidance.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>What Subjects Do You Tutor?</h3>
            <p>We tutor K-12 students in a wide range of subjects, including specialized test prep. Visit our <Link to="/about">About Us page</Link> to meet our tutors and learn about their specialties.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>Why Praxis?</h3>
            <p>Our dedicated team of high-achieving UMD students brings top-down learning approaches that inspire and engage. We focus on hands-on, practical education that empowers students to think critically and solve real-world problems.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>Have Other Questions?</h3>
            <p><strong>Contact us anytime!</strong></p>
            <p>📧 Email: praxiscenteredu@gmail.com</p>
            <p>📍 Visit us: 9066 Baltimore Ave Unit A, College Park, MD 20740, USA</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.contact}`}>
        <h2>Get In Touch</h2>
        <p>9066 Baltimore Ave Unit A, College Park, MD 20740, USA</p>
        <p>Phone: 240-389-4611</p>
        <p>Email: praxiscenteredu@gmail.com</p>
        <p>Opening Hours: Mon-Sat 12pm to 8 pm · Sun Closed (closed on July 4th)</p>
      </section>
    </div>
  )
}
