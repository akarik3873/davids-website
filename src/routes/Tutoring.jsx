import { Link } from 'react-router-dom'
import shared from '../components/shared.module.css'
import homeStyles from './Home.module.css'

const successRoadmap = [
  {
    step: '1',
    title: 'Intake Form',
    description: 'Start by filling out our parent-friendly intake form to share your student\'s academic history and needs.',
    cta: 'Complete the Intake Form',
    ctaLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdQjHRNLuEqbR0tuOREmgmqoUmgLiMA_jdovmssCTHE2B8veQ/viewform',
  },
  {
    step: '2',
    title: 'Goal Review',
    description: 'We review specific learning goals and your child\'s individual learning style to create a roadmap for success.',
  },
  {
    step: '3',
    title: 'Best-Fit Tutor Matching',
    description: 'We carefully match your student with a STEM tutor who aligns with their personality and academic requirements.',
  },
  {
    step: '4',
    title: 'Schedule Confirmation',
    description: 'Once matched, we confirm a recurring schedule that works for your family to maintain consistent progress.',
  },
]

const subjectsByLevel = [
  {
    level: 'Elementary & Middle School',
    subjects: ['Foundational Mathematics', 'Nature & Life Sciences', 'Reading & Writing', 'Social Studies', 'Study Skills & Homework Help'],
  },
  {
    level: 'High School',
    subjects: ['Algebra, Geometry, & Calculus', 'Biology, Chemistry, Physics', 'English Literature & Composition', 'Computer Science', 'Engineering Design'],
  },
  {
    level: 'College Prep',
    subjects: ['SAT/ACT Math Mastery', 'Advanced Placement (AP) Prep', 'Academic Research Methods', 'College Essay Coaching'],
  },
]

export default function Tutoring() {
  return (
    <div className={shared.page}>
      <section className={`${homeStyles.section} ${homeStyles.sectionAlt}`}>
        <h1 style={{ marginBottom: '24px' }}>Our Tutoring Services</h1>
        
        <h2 style={{ marginTop: '32px', marginBottom: '16px' }}>How We Work</h2>
        <p className={homeStyles.lead} style={{ marginBottom: '24px' }}>
          We make finding the right support simple and reassuring for parents. First, fill out our short intake form so we can understand your student's needs. Our academic team then reviews your goals and learning style. Finally, we match your child with a best-fit STEM tutor and confirm a schedule that works for your family.
        </p>
        
        <div style={{ background: '#e3f2fd', padding: '16px', borderRadius: '8px', marginTop: '24px', border: '2px solid #2196F3' }}>
          <p style={{ margin: 0, color: '#1565c0', fontWeight: '600', fontSize: '1.05rem' }}>
            ✨ <strong>First session is a free consultation/trial!</strong> Meet with your tutor to discuss goals and ensure it's the right fit.
          </p>
        </div>
      </section>

      <section className={`${homeStyles.section} ${homeStyles.sectionAlt}`}>
        <h2 style={{ marginBottom: '24px' }}>Subject Offerings</h2>
        {subjectsByLevel.map((category) => (
          <div key={category.level} style={{ marginBottom: '32px' }}>
            <h3 style={{ marginBottom: '12px', color: 'var(--text-h)', fontSize: '1.1rem', fontWeight: '600' }}>{category.level}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {category.subjects.map((subject) => (
                <span
                  key={subject}
                  style={{
                    border: '1px solid var(--border)',
                    background: 'var(--panel)',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    fontSize: '0.95rem',
                    color: 'var(--text)',
                  }}
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className={`${homeStyles.section} ${homeStyles.sectionAlt}`}>
        <h2 style={{ marginBottom: '24px' }}>Your Success Roadmap</h2>
        <p className={homeStyles.lead} style={{ marginBottom: '32px' }}>
          We follow a deliberate process to ensure every student is matched with the right expertise and a learning plan tailored to their unique goals.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          {successRoadmap.map((item) => (
            <div key={item.step} className={shared.card}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#2196F3',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  marginRight: '12px',
                }}>
                  {item.step}
                </div>
                <h3 className={shared.cardTitle} style={{ margin: 0 }}>{item.title}</h3>
              </div>
              <p className={shared.cardDesc}>{item.description}</p>
              {item.cta && (
                <a
                  href={item.ctaLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    display: 'inline-block',
                    marginTop: '12px',
                    padding: '8px 14px',
                    background: '#2196F3',
                    color: 'white',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                  }}
                >
                  {item.cta}
                </a>
              )}
            </div>
          ))}
        </div>

        <div style={{ background: 'var(--panel)', padding: '24px', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Want to know exactly who is teaching your student?</h3>
          <p style={{ marginBottom: '16px' }}>
            Visit our <Link to="/tutors" style={{ color: '#2196F3', fontWeight: '600', textDecoration: 'none' }}>About Us page</Link> to read detailed bios of our specialist tutors.
          </p>
        </div>
      </section>
    </div>
  )
}