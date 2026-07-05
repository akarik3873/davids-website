import styles from './Home.module.css'

export default function EngineeringDesignProcess() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h1>Engineering Design Process</h1>
        <div className={styles.articleIntro}>
          <p><strong>Duration:</strong> 3-hour session</p>
          <p><strong>Recommended age range:</strong> Elementary & Middle School (Grades K-8)</p>
          <p><strong>Group Size:</strong> ~12 students (4 groups of 3 or 3 groups of 4)</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceBody}>
              <div className={styles.divider} />
              <h2>Schedule</h2>
              <div className={styles.scheduleSection}>
                <h3>(15 min) EDP Overview</h3>
                <ul>
                  <li>Introduction to the Engineering Design Process steps</li>
                  <li>Overview of today's challenge and constraints</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(45 min) Planning & Preparation</h3>
                <ul>
                  <li>Materials science basics related to today's challenge</li>
                  <li>Examine materials and sketch design blueprints</li>
                  <li>Instructor approval before building begins</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(15 min) BREAK</h3>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(1.5 hr) Build & Test</h3>
                <ul>
                  <li>Teams build their prototypes using approved designs</li>
                  <li>Test designs and iterate based on results</li>
                  <li>Refine and improve before final showcase</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(15 min) Final Showcase & Reflection</h3>
                <ul>
                  <li>Test all designs and celebrate results</li>
                  <li>Discuss what worked, what didn't, and what they'd improve</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
