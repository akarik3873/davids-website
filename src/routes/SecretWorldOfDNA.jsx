import styles from './Home.module.css'

export default function SecretWorldOfDNA() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h1>The Secret World of DNA: Strawberry DNA Extraction Lab</h1>
        <div className={styles.articleIntro}>
          <p><strong>Duration:</strong> 3-hour session</p>
          <p><strong>Recommended age range:</strong> Elementary or Middle School (Ages 8-14)</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceBody}>
              <h2>Class Overview</h2>
              <p>
                Students become genetic detectives and discover that every living thing has instructions called DNA. Through games, crafts, and simple laboratory activities, students learn how traits are inherited, build edible DNA models, extract DNA from strawberries, and solve a "Who Ate the Cookies?" mystery using trait clues. No prior biology knowledge required.
              </p>
              <div className={styles.divider} />
              <h2>Skills Learned</h2>
              <ul>
                <li>Scientific observation</li>
                <li>Comparing and classifying</li>
                <li>Following experimental procedures</li>
                <li>Measuring liquids</li>
                <li>Making predictions</li>
                <li>Recording observations</li>
                <li>Understanding inherited traits</li>
                <li>Basic laboratory safety</li>
              </ul>
              <div className={styles.divider} />
              <h2>Schedule</h2>
              <div className={styles.scheduleSection}>
                <h3>(20 min) What is DNA?</h3>
                <ul>
                  <li>Every living thing has DNA</li>
                  <li>DNA is an instruction book for how your body grows</li>
                  <li>Traits are characteristics passed from parents</li>
                  <li>Everyone is unique because of their DNA</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(40 min) Build Your Own DNA</h3>
                <ul>
                  <li>Create a simple DNA model using candy or beads</li>
                  <li>Learn how DNA letters A, T, C, and G pair together</li>
                  <li>Build and twist your DNA into a double helix shape</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(15 min) BREAK</h3>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(45 min) Strawberry DNA Extraction Lab</h3>
                <ul>
                  <li>Mash strawberries and add soap and salt solution</li>
                  <li>Filter the mixture and pour cold rubbing alcohol</li>
                  <li>Watch DNA appear as white cloudy strands</li>
                  <li>Use a wooden stick to spool and observe your DNA</li>
                  <li>Discuss why DNA is normally invisible and why strawberries have so much DNA</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(30 min) Genetic Detective Challenge</h3>
                <ul>
                  <li>Solve a classroom mystery: "Who Ate the Cookies?"</li>
                  <li>Use trait clues like hair type, freckles, and earlobe shape</li>
                  <li>Compare suspect cards and use scientific reasoning to find the culprit</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(15 min) Wrap-Up</h3>
                <ul>
                  <li>Discuss where DNA is found in your body</li>
                  <li>Explore careers that use DNA: doctors, veterinarians, crime labs, biologists</li>
                  <li>Fun facts: Your DNA would be 6 feet long if stretched out!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
