import styles from './Home.module.css'

export default function APBiologyJumpstart() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h1>AP Biology Jumpstart</h1>
        <div className={styles.articleIntro}>
          <p><strong>Duration:</strong> 3-hour session</p>
          <p><strong>Recommended age range:</strong> High Schoolers (ages 14-17)</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceBody}>
              <h2>Class Overview</h2>
              <p>
                Get a headstart on one of the most information-heavy classes in high school! This workshop introduces students to AP Biology Unit 1, exploring the properties of water and biological macromolecules (carbohydrates, lipids, proteins, nucleic acids). Students will learn how to read AP style questions, interpret graphs and error bars, and understand how College Board formats the exam. No prior biology or chemistry knowledge required.
              </p>
              <div className={styles.divider} />
              <h2>Schedule</h2>
              <div className={styles.scheduleSection}>
                <h3>(45 min) Chemistry in Biology and Importance of Water</h3>
                <ul>
                  <li>Introduction and refreshing understanding of polarity and hydrogen bonding</li>
                  <li>Cohesion, adhesion, high specific heat, and why ice floats</li>
                  <li>Penny drop challenge: how many drops can fit on a penny due to hydrogen bonding and surface tension?</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(45 min) Macromolecule Structure and Function</h3>
                <ul>
                  <li>Carbohydrates, Lipids, Proteins, and Nucleic Acids</li>
                  <li>Monomers vs Polymers, Dehydration Synthesis vs. Hydrolysis</li>
                  <li>Practice identifying molecular shapes, dehydration synthesis, hydrolysis, nucleotides, and amino acids using interactive activities</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(15 min) BREAK</h3>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(1 hr) AP Style Questions & FRQ Strategy</h3>
                <ul>
                  <li>Tips on how to read AP style questions efficiently</li>
                  <li>How to interpret AP Biographs, error bars, and understand map meanings</li>
                  <li>Identifying focus of FRQs: identify vs describe vs justify and how to write effective sentences</li>
                  <li>Analyze real past AP Exam data set regarding protein folding</li>
                  <li>Break down prompts, interpret graphs, and draft practice FRQ responses</li>
                  <li>Review actual College Board grading rubric so you can grade your own work</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(30 min) More Practice Time</h3>
                <ul>
                  <li>Additional practice with FRQs and exam-style questions</li>
                  <li>Q&A and clarification on challenging concepts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
