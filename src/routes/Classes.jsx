import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import microscopeLab from '../assets/microscope-lab-hero.jpg'
import brushBot from '../assets/3d-printed-brush-bots-MRRF-scaled.jpg.webp'
import scratchDashboard from '../assets/scratch-dashboard.png'
import mycgMy from '../assets/MyvgMY57Z7DNYqQctU6cKMETCvSPVUWriLULyKKz.jpeg'
import jpegImage from '../assets/jpeg.jpeg'
import researcherAtWork from '../assets/skec/AdobeStock_171882033.jpeg'
import elevatingLearning from '../assets/skec/elevating_learning_stem_projects_for_high_school_students.webp.jpeg'
import apBiologyImage from '../assets/Researcher_at_work_in_her_laboratory.jpg'
import engineeringImage from '../assets/Tom-Lauerman-2-color-clay-printer-in-use.jpg'

export default function Classes() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '24px' }}>
          <h1>Browse Our Upcoming Classes and Explore All Our Classes!</h1>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe2W7oZR381m2yMYk5QTfKyGmm0wWKougezfApOemPGVkIb0Q/viewform?usp=publish-editor" target="_blank" rel="noreferrer noopener" className={styles.bookBtn}>
            Register Here
          </a>
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
            <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>15/20 seats</p>
            <div className={styles.scheduleDivider}></div>
            <p className={styles.scheduleTime}>4:00 PM</p>
            <p className={styles.scheduleClass}>3D Printing</p>
            <p style={{ fontSize: '0.8rem', color: '#2196F3', fontWeight: '700', marginTop: '4px', paddingTop: '4px', borderTop: '1px solid #eee' }}>19/20 seats</p>
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
      </section>

      <section className={styles.section}>
        <h2>Explore Our Classes</h2>
        <div className={styles.serviceCards}>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImg} src={microscopeLab} alt="Microscopy workshop" />
            <div className={styles.serviceBody}>
              <h3>Introduction to Microscopy Class</h3>
              <div className={styles.divider} />
              <p className={styles.serviceDesc}><strong>Duration:</strong> 3-hour session</p>
              <p className={styles.serviceDesc}><strong>Recommended age range:</strong> Grades 6-8 / Ages 11-14</p>
              <p className={styles.serviceDesc}><strong>Class description:</strong></p>
              <p className={styles.serviceDesc}>
                This hands-on workshop introduces middle school students to microscopy through activities that relate to real world application. Students will learn the parts of a microscope, how to use a microscope, and how to identify organisms from their own local freshwater ponds. No prior experience is needed. However, students will be asked to bring a small sample from their own local freshwater ponds that includes sediment, water, and aquatic plant life.
              </p>
              <Link className={styles.bookBtn} to="/classes/microscopy">
                Explore
              </Link>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImg} src={brushBot} alt="3D-printed brush bot" />
            <div className={styles.serviceBody}>
              <h3>Intro to Computer Aided Design + 3D Printing for Engineering Applications</h3>
              <div className={styles.divider} />
              <p className={styles.serviceDesc}><strong>Duration:</strong> 3-hour session</p>
              <p className={styles.serviceDesc}><strong>Recommended age range:</strong> High schoolers (ages 14-18)</p>
              <p className={styles.serviceDesc}><strong>Class description:</strong></p>
              <p className={styles.serviceDesc}>
                This hands‑on workshop introduces high school students to the world of Computer‑Aided Design (CAD) through fun, challenge‑based modeling activities. Students learn how engineers turn ideas into 3D digital models and practice creative problem‑solving skills such as testing and iteration. By the end of the session, each student will have designed a simple functional model and have their own 3D-printed creation ready to take home. No prior experience needed. Students will be asked to bring their own laptop.
              </p>
              <Link className={styles.bookBtn} to="/classes/cad">
                Explore
              </Link>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImg} src={scratchDashboard} alt="Scratch dashboard" />
            <div className={styles.serviceBody}>
              <h3>Intro to Scratch Programming</h3>
              <div className={styles.divider} />
              <p className={styles.serviceDesc}><strong>Duration:</strong> 3-hour session</p>
              <p className={styles.serviceDesc}><strong>Recommended age range:</strong> Middle Schoolers (ages 11-14)</p>
              <p className={styles.serviceDesc}><strong>Class description:</strong></p>
              <p className={styles.serviceDesc}>
                Ready to turn your imagination into code? This hands-on workshop invites kids of all ages to step into the developer’s shoes and dive into the colorful world of game design! Scratch is an amazing way for beginners to be introduced to coding, letting you learn by snapping blocks together like digital puzzle pieces to bring your own game to life. Students will be able to learn, create, and showcase the games they make, using skills learned in class.
              </p>
              <Link className={styles.bookBtn} to="/classes/scratch">
                Explore
              </Link>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImg} src={jpegImage} alt="Outbreak class" />
            <div className={styles.serviceBody}>
              <h3>Introduction to Epidemiology/Disease Outbreak and Laboratory Techniques</h3>
              <div className={styles.divider} />
              <p className={styles.serviceDesc}><strong>Duration:</strong> 3-hour session</p>
              <p className={styles.serviceDesc}><strong>Recommended age range:</strong> Middle School & Early High School (Ages 12–16)</p>
              <p className={styles.serviceDesc}><strong>Class description:</strong></p>
              <p className={styles.serviceDesc}>
                Students become medical laboratory scientists investigating a mysterious disease outbreak. Through hands-on activities, students learn how doctors and scientists use dilution techniques, diagnostic testing, and data analysis to identify illnesses. Students will perform serial dilutions, create mock diagnostic tests, analyze patient samples, and determine the source of an outbreak. No prior biology or chemistry experience required.
              </p>
              <Link className={styles.bookBtn} to="/classes/epidemiology">
                Explore
              </Link>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImg} src={mycgMy} alt="MycgMY Arduino" />
            <div className={styles.serviceBody}>
              <h3>Intro to Digital Electronics with Arduinos</h3>
              <div className={styles.divider} />
              <p className={styles.serviceDesc}><strong>Duration:</strong> 3-hour session</p>
              <p className={styles.serviceDesc}><strong>Recommended age range:</strong> High Schoolers (ages 14-17)</p>
              <p className={styles.serviceDesc}><strong>Class description:</strong></p>
              <p className={styles.serviceDesc}>
                Want to learn how to design and build circuits? We live surrounded by smart gadgets, but few people know how they’re made. Stay away from the screens and get your hands on real hardware! In this hands-on class, you’ll learn the basics of digital electronics from simple gates to Ohm’s Law. Let's build mini circuits that reflect real-world technology! No prior programming or electronics experience required. Just bring your curiosity, and get ready to code it, wire it, and watch it come alive!
              </p>
              <Link className={styles.bookBtn} to="/classes/digital-electronics">
                Explore
              </Link>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImg} src={researcherAtWork} alt="Researcher at work in a laboratory" />
            <div className={styles.serviceBody}>
              <h3>The Science of Medicines: Build Your Own Drug Trial</h3>
              <div className={styles.divider} />
              <p className={styles.serviceDesc}><strong>Duration:</strong> 3-hour session</p>
              <p className={styles.serviceDesc}><strong>Recommended age range:</strong> Ages 13-18</p>
              <p className={styles.serviceDesc}><strong>Class description:</strong></p>
              <p className={styles.serviceDesc}>
                Students act as pharmaceutical researchers to design a real-world style drug trial, compare treatment and placebo groups, and analyze mock patient data. They learn how scientists decide whether a new medicine is effective, what side effects matter, and how evidence leads to approval decisions.
              </p>
              <Link className={styles.bookBtn} to="/classes/science-of-medicines">
                Explore
              </Link>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImg} src={jpegImage} alt="Science classroom laboratory" />
            <div className={styles.serviceBody}>
              <h3>DNA to Disease: The Genetics Behind Human Health</h3>
              <div className={styles.divider} />
              <p className={styles.serviceDesc}><strong>Duration:</strong> 3-hour session</p>
              <p className={styles.serviceDesc}><strong>Age Range:</strong> Middle School & High School (Ages 12-18)</p>
              <p className={styles.serviceDesc}><strong>Class description:</strong></p>
              <p className={styles.serviceDesc}>
                Students explore how DNA holds the instructions for life and how changes in those instructions can lead to genetic disorders. Through modeling, role-play, and case studies, they learn how DNA is copied, translated into proteins, inherited through families, and used in modern medicine to diagnose disease.
              </p>
              <Link className={styles.bookBtn} to="/classes/dna-to-disease">
                Explore
              </Link>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImg} src={mycgMy} alt="Arduino robotics kit" />
            <div className={styles.serviceBody}>
              <h3>Intro to Robotics</h3>
              <div className={styles.divider} />
              <p className={styles.serviceDesc}><strong>Duration:</strong> 3-hour session</p>
              <p className={styles.serviceDesc}><strong>Recommended age range:</strong> High Schoolers (ages 14-18)</p>
              <p className={styles.serviceDesc}><strong>Class description:</strong></p>
              <p className={styles.serviceDesc}>
                This workshop will introduce high school aged students to the inner and outer workings of robotics. Students will learn how to wire and assemble electronic components using an Elegoo Arduino Kit. Students with and without programming backgrounds are highly encouraged to sign up, as programming will be supported through guided templates and AI assistance, allowing students to focus on understanding how hardware components connect and interact in a working robotic system. By the end of the workshop, students will understand how to use common robotic components such as sensors, LEDs, motors and servos.
              </p>
              <Link className={styles.bookBtn} to="/classes/robotics">
                Explore
              </Link>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImg} src={elevatingLearning} alt="Engineering design challenge" />
            <div className={styles.serviceBody}>
              <h3>Research for Engineering Application</h3>
              <div className={styles.divider} />
              <p className={styles.serviceDesc}><strong>Duration:</strong> 3-hour session</p>
              <p className={styles.serviceDesc}><strong>Recommended age range:</strong> High Schoolers (ages 14-18)</p>
              <p className={styles.serviceDesc}><strong>Class description:</strong></p>
              <p className={styles.serviceDesc}>
                From cleaner energy to safer transportation, engineers use creativity, research, and critical thinking to tackle challenges that affect our everyday lives. In this hands-on class, you'll learn how to break down complex problems, identify constraints, and brainstorm solutions just like real engineers. Work with a team to investigate a challenge, test ideas, and improve your designs using the engineering design process. No prior engineering experience required!
              </p>
              <Link className={styles.bookBtn} to="/classes/engineering">
                Explore
              </Link>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImg} src={researcherAtWork} alt="DNA extraction lab" />
            <div className={styles.serviceBody}>
              <h3>The Secret World of DNA: Strawberry DNA Extraction Lab</h3>
              <div className={styles.divider} />
              <p className={styles.serviceDesc}><strong>Duration:</strong> 3-hour session</p>
              <p className={styles.serviceDesc}><strong>Recommended age range:</strong> Elementary or Middle School (Ages 8-14)</p>
              <p className={styles.serviceDesc}><strong>Class description:</strong></p>
              <p className={styles.serviceDesc}>
                Students become genetic detectives and discover that every living thing has instructions called DNA. Through games, crafts, and simple laboratory activities, students learn how traits are inherited, build edible DNA models, extract DNA from strawberries, and solve a "Who Ate the Cookies?" mystery using trait clues. No prior biology knowledge required.
              </p>
              <Link className={styles.bookBtn} to="/classes/secret-world-of-dna">
                Explore
              </Link>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImg} src={apBiologyImage} alt="AP Biology study materials" />
            <div className={styles.serviceBody}>
              <h3>AP Biology Jumpstart</h3>
              <div className={styles.divider} />
              <p className={styles.serviceDesc}><strong>Duration:</strong> 3-hour session</p>
              <p className={styles.serviceDesc}><strong>Recommended age range:</strong> High Schoolers (ages 14-17)</p>
              <p className={styles.serviceDesc}><strong>Class description:</strong></p>
              <p className={styles.serviceDesc}>
                Get a headstart on one of the most information-heavy classes in high school! This workshop introduces students to AP Biology Unit 1, exploring the properties of water and biological macromolecules (carbohydrates, lipids, proteins, nucleic acids). Students will learn how to read AP style questions, interpret graphs and error bars, and understand how College Board formats the exam. No prior biology or chemistry knowledge required.
              </p>
              <Link className={styles.bookBtn} to="/classes/ap-biology">
                Explore
              </Link>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <img className={styles.serviceImg} src={engineeringImage} alt="Engineering Design Process challenge" />
            <div className={styles.serviceBody}>
              <h3>Engineering Design Process</h3>
              <div className={styles.divider} />
              <p className={styles.serviceDesc}><strong>Duration:</strong> 3-hour session</p>
              <p className={styles.serviceDesc}><strong>Recommended age range:</strong> Elementary & Middle School (Grades K-8)</p>
              <p className={styles.serviceDesc}><strong>Class description:</strong></p>
              <p className={styles.serviceDesc}>
                Ready to think like an inventor? This high-energy, hands-on workshop introduces students to the Engineering Design Process (EDP) through real-world, rotating team challenges! Whether they are protecting an egg from a 10-foot drop, building a weight-bearing bridge from balsa wood, or launching a rubber band racer, students will step into the shoes of structural, mechanical, and aerospace engineers. Kids will learn that failure is just data in disguise as they brainstorm, prototype, test, and redesign their way to success.
              </p>
              <Link className={styles.bookBtn} to="/classes/engineering-design-process">
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
