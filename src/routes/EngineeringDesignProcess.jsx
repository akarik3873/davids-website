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
              <h2>Class Overview</h2>
              <p>
                Ready to think like an inventor? This high-energy, hands-on workshop introduces students to the Engineering Design Process (EDP) through real-world, rotating team challenges! Whether they are protecting an egg from a 10-foot drop, building a weight-bearing bridge from balsa wood, or launching a rubber band racer, students will step into the shoes of structural, mechanical, and aerospace engineers. Kids will learn that failure is just data in disguise as they brainstorm, prototype, test, and redesign their way to success.
              </p>
              <div className={styles.divider} />
              <h2>Schedule</h2>
              <div className={styles.scheduleSection}>
                <h3>(15 min) EDP Overview: What is Engineering?</h3>
                <ul>
                  <li><strong>The Big Question:</strong> What do engineers actually do? (Solving problems using science and math)</li>
                  <li><strong>The EDP Wheel:</strong> Introduction to the steps: Ask → Research → Imagine → Plan → Create → Test → Improve</li>
                  <li><strong>The Golden Rule:</strong> "Failure is just part of the process" — Show a quick, funny video compilation of engineering prototypes failing and then succeeding (e.g., SpaceX landings or Dyson vacuum prototypes)</li>
                  <li><strong>The Reveal:</strong> Introduce today's specific challenge (e.g., The Spaghetti Tower Challenge), the constraints (materials allowed), and the ultimate goal (highest tower that holds a marshmallow for 30 seconds)</li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(45 min) Skill-Building & Guided Planning</h3>
                <ul>
                  <li><strong>Materials Science Demo (15 min) — Hands-on mini-lessons tailored to the day's project:</strong>
                    <ul>
                      <li><em>If Bridges/Towers:</em> Discuss tension, compression, and why triangles are the strongest shape</li>
                      <li><em>If Rubber Band Cars:</em> Discuss potential vs. kinetic energy and friction</li>
                      <li><em>If Egg Drop:</em> Discuss impact force, deceleration, and shock absorption</li>
                    </ul>
                  </li>
                  <li><strong>The "Ask & Imagine" Phase (15 min):</strong>
                    <ul>
                      <li>Students form pairs or small teams</li>
                      <li>Teams are given 5 minutes to touch/examine the materials <em>without</em> building yet</li>
                    </ul>
                  </li>
                  <li><strong>The "Plan" Phase (15 min):</strong>
                    <ul>
                      <li><em>Strict Rule:</em> Teams must draw a blueprint of their design on paper/whiteboard and get it "approved" by the instructor before receiving their actual building materials</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(15 min) BREAK</h3>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(1.5 hr) Student Design & Prototype Activity (Creative Liberty)</h3>
                <ul>
                  <li><strong>The "Create" Phase (45 min):</strong> Teams receive their material kits and begin building based on their blueprints</li>
                  <li><strong>The "Ask 3 Before Me" Rule:</strong> To encourage independent problem-solving, students must ask 3 peers for help or ideas before asking the instructor</li>
                  <li><strong>The "Experiment & Improve" Phase (45 min):</strong>
                    <ul>
                      <li><em>Open up the "Testing Zone" early.</em> Students are <em>encouraged</em> to bring half-finished designs to test, fail, and figure out what went wrong</li>
                      <li>Teams use the remaining materials to iterate on, reinforce, and redesign their prototypes based on live test data</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.scheduleSection}>
                <h3>(15 min) Grand Final Showcase & Reflection</h3>
                <ul>
                  <li><strong>The "Official Test":</strong> Every team steps up to the testing station to officially put their creation to the test (e.g., dropping the egg, adding weights to the bridge, measuring the car's distance)</li>
                  <li><strong>The Debrief — Short wrap-up discussion:</strong>
                    <ul>
                      <li>What part of your design failed first?</li>
                      <li>What was the hardest part?</li>
                      <li>If you had $100 more and 2 more hours, what would you change?</li>
                      <li>Celebrate the most creative design and the "Best Failure/Redesign" award → Tentative</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
