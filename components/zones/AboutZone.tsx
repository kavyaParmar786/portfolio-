'use client'
import { motion } from 'framer-motion'

const STATS = [
  { label: 'AGE',      value: '17+' },
  { label: 'CLASS',    value: 'XI' },
  { label: 'BOARD',    value: 'ICSE' },
  { label: 'PROJECTS', value: '10+' },
]

const TRAITS = ['CREATIVE', 'CURIOUS', 'FAST LEARNER', 'BUILDER', 'PROBLEM SOLVER']

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function AboutZone() {
  return (
    <section
      id="about"
      className="relative z-20 min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-4xl w-full">

        {/* Section header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.58rem',
            letterSpacing: '0.35em',
            color: 'var(--neon-cyan)',
            opacity: 0.5,
            marginBottom: '0.6rem',
          }}>
            // ZONE_01 — IDENTITY
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            fontWeight: 900,
            color: 'white',
            letterSpacing: '0.06em',
            lineHeight: 1,
          }}>
            ABOUT <span className="glow-cyan" style={{ color: 'var(--neon-cyan)' }}>ME</span>
          </h2>
          {/* Underline */}
          <div style={{
            marginTop: '1rem',
            width: '80px',
            height: '2px',
            background: 'linear-gradient(to right, var(--neon-cyan), transparent)',
            boxShadow: '0 0 8px var(--neon-cyan)',
          }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left — bio */}
          <div className="flex flex-col gap-6">
            <motion.div
              className="glass p-8"
              style={{ borderColor: 'rgba(0,245,255,0.15)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.52rem',
                letterSpacing: '0.2em',
                color: 'var(--neon-cyan)',
                opacity: 0.55,
                marginBottom: '1rem',
              }}>
                &gt; BIO.txt
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.03em',
              }}>
                I&apos;m <strong style={{ color: 'white' }}>Kavya Parmar</strong>, a 17-year-old developer
                from <strong style={{ color: 'var(--neon-cyan)' }}>Rajkot, India</strong> — building
                at the intersection of web, games, and AI. Currently in Class XI Commerce at
                Saint Paul&apos;s School ICSE, I code not because I have to — but because I
                can&apos;t stop.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.5)',
                marginTop: '1rem',
                letterSpacing: '0.03em',
              }}>
                My vision: become a world-class web developer and game creator, build tech that
                simplifies life, and explore where law meets technology.
              </p>
            </motion.div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="glass p-4 text-center"
                  style={{ borderColor: 'rgba(0,245,255,0.1)' }}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ borderColor: 'rgba(0,245,255,0.4)', scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                    fontWeight: 700,
                    color: 'var(--neon-cyan)',
                  }}
                    className="glow-cyan"
                  >
                    {s.value}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.48rem',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.3)',
                    marginTop: '4px',
                  }}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — roles + traits */}
          <div className="flex flex-col gap-6">

            {/* Roles */}
            <motion.div
              className="glass p-8"
              style={{ borderColor: 'rgba(168,85,247,0.15)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.52rem',
                letterSpacing: '0.2em',
                color: 'var(--neon-purple)',
                opacity: 0.55,
                marginBottom: '1.2rem',
              }}>
                &gt; ROLES.exe
              </p>
              {[
                { role: 'WEB DEVELOPER',  desc: 'Next.js · HTML/CSS · JS',      color: 'var(--neon-cyan)' },
                { role: 'GAME DEVELOPER', desc: 'Godot 4 · 3D · Mobile',        color: 'var(--neon-purple)' },
                { role: 'AI DEVELOPER',   desc: 'Tools · Automation · Bots',    color: 'var(--neon-pink)' },
                { role: 'FREELANCER',     desc: 'Open for projects',             color: 'var(--neon-cyan)' },
              ].map((r, i) => (
                <motion.div
                  key={r.role}
                  className="flex items-center gap-4 py-3"
                  style={{
                    borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: r.color,
                    boxShadow: `0 0 8px ${r.color}`,
                    flexShrink: 0,
                  }} />
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      color: 'white',
                    }}>
                      {r.role}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.35)',
                      marginTop: '2px',
                    }}>
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Traits */}
            <motion.div
              className="glass p-6"
              style={{ borderColor: 'rgba(255,0,128,0.12)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.52rem',
                letterSpacing: '0.2em',
                color: 'var(--neon-pink)',
                opacity: 0.55,
                marginBottom: '1rem',
              }}>
                &gt; PERSONALITY.json
              </p>
              <div className="flex flex-wrap gap-2">
                {TRAITS.map((t, i) => (
                  <motion.span
                    key={t}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08 }}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.52rem',
                      letterSpacing: '0.15em',
                      color: 'var(--neon-pink)',
                      border: '1px solid rgba(255,0,128,0.25)',
                      borderRadius: '4px',
                      padding: '5px 10px',
                      background: 'rgba(255,0,128,0.04)',
                      cursor: 'default',
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
