import styles from './Home.module.css'

export default function Engineering() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h1>Research for Engineering Application</h1>
        <div className={styles.articleIntro}>
          <p><strong>Duration:</strong> 3-hour session</p>
          <p><strong>Recommended age range:</strong> High Schoolers (ages 14-18)</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceBody}>
              <h2>Class Overview</h2>
              <p>
                From cleaner energy to safer transportation, engineers use creativity, research, and critical thinking to tackle challenges that affect our everyday lives. In this hands-on class, you'll learn how to break down complex problems, identify constraints, and brainstorm solutions just like real engineers. Work with a team to investigate a challenge, test ideas, and improve your designs using the engineering design process. No prior engineering experience required!
              </p>
              <div className={styles.divider} />
              <h2>Schedule</h2>
              <div className={styles.scheduleSection}>
                <h3>(15 min) What is Engineering Problem Solving?</h3>
                <ul>
                  <li>What do engineers actually do?</li>
                  <li>Examples of real-world engineering challenges</li>
                  <li>The engineering design process</li>
                  <li>Constraints, requirements, and trade-offs</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(45 min) The Basics: Thinking Like an Engineer</h3>
                <ul>
                  <li>Defining a problem statement</li>
                  <li>Identifying stakeholders and user needs</li>
                  <li>Researching existing solutions</li>
                  <li>Brainstorming multiple ideas</li>
                  <li>Evaluating pros and cons of different approaches</li>
                  <li>Iteration: testing, learning, and improving</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(15 min) Mini Problem-Solving Activity</h3>
                <ul>
                  <li>Small groups analyze an everyday engineering problem</li>
                  <li>Identify constraints and success criteria</li>
                  <li>Share possible solutions with the class</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(15 min) BREAK</h3>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(1.5 hr) Student Design Challenge</h3>
                <ul>
                  <li>Work in teams to tackle a real engineering challenge</li>
                  <li>Apply the engineering design process to develop and test solutions</li>
                  <li>Iterate and refine your designs based on feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
