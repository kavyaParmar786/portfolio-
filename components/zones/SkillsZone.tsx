'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const SKILLS = [
  { name: 'Next.js / React',  level: 88, color: 'var(--neon-cyan)' },
  { name: 'HTML / CSS',       level: 95, color: 'var(--neon-cyan)' },
  { name: 'JavaScript',       level: 82, color: 'var(--neon-purple)' },
  { name: 'Godot 4',          level: 75, color: 'var(--neon-purple)' },
  { name: 'Python / AI Tools',level: 70, color: 'var(--neon-pink)' },
  { name: 'Java / Plugins',   level: 65, color: 'var(--neon-pink)' },
  { name: 'UI/UX Design',     level: 80, color: 'var(--neon-cyan)' },
  { name: 'Discord Bots',     level: 85, color: 'var(--neon-purple)' },
]

const SOFT_SKILLS = [
  { icon: '⚡', label: 'Fast Learner',     desc: 'Picks up any tech in days' },
  { icon: '🎨', label: 'Creative',          desc: 'Unique ideas every time' },
  { icon: '🧩', label: 'Problem Solver',    desc: 'Breaks down complex issues' },
  { icon: '🔧', label: 'Builder Mindset',   desc: 'Ships and iterates fast' },
]

function SkillBar({ name, level, color, index }: {
  name: string; level: number; color: string; index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.6rem',
          letterSpacing: '0.12em',
          color: hovered ? color : 'rgba(255,255,255,0.6)',
          transition: 'color 0.2s',
        }}>
          {name}
        </span>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.58rem',
          color: color,
          opacity: hovered ? 1 : 0.5,
          transition: 'opacity 0.2s',
        }}>
          {level}%
        </span>
      </div>
      <div style={{
        width: '100%',
        height: '3px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <motion.div
          style={{
            height: '100%',
            background: color,
            boxShadow: `0 0 8px ${color}`,
            borderRadius: '2px',
          }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: level / 100 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  )
}

export default function SkillsZone() {
  return (
    <section
      id="skills"
      className="relative z-20 min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-4xl w-full">

        {/* Header */}
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
            color: 'var(--neon-purple)',
            opacity: 0.5,
            marginBottom: '0.6rem',
          }}>
            // ZONE_02 — ABILITIES
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            fontWeight: 900,
            color: 'white',
            letterSpacing: '0.06em',
            lineHeight: 1,
          }}>
            SKILLS <span className="glow-purple" style={{ color: 'var(--neon-purple)' }}>LAB</span>
          </h2>
          <div style={{
            marginTop: '1rem',
            width: '80px',
            height: '2px',
            background: 'linear-gradient(to right, var(--neon-purple), transparent)',
            boxShadow: '0 0 8px var(--neon-purple)',
          }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Skill bars */}
          <motion.div
            className="glass p-8 flex flex-col gap-6"
            style={{ borderColor: 'rgba(168,85,247,0.15)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.52rem',
              letterSpacing: '0.2em',
              color: 'var(--neon-purple)',
              opacity: 0.5,
              marginBottom: '0.5rem',
            }}>
              &gt; TECH_STACK.exe
            </p>
            {SKILLS.map((s, i) => (
              <SkillBar key={s.name} {...s} index={i} />
            ))}
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-6">

            {/* Soft skills */}
            <div className="grid grid-cols-2 gap-3">
              {SOFT_SKILLS.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="glass p-5"
                  style={{ borderColor: 'rgba(0,245,255,0.1)' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{
                    borderColor: 'rgba(0,245,255,0.35)',
                    scale: 1.04,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{s.icon}</div>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.1em',
                    color: 'var(--neon-cyan)',
                    marginBottom: '4px',
                  }}>
                    {s.label}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.35)',
                  }}>
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Hobbies */}
            <motion.div
              className="glass p-7"
              style={{ borderColor: 'rgba(255,0,128,0.12)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.52rem',
                letterSpacing: '0.2em',
                color: 'var(--neon-pink)',
                opacity: 0.5,
                marginBottom: '1rem',
              }}>
                &gt; HOBBIES.json
              </p>
              <div className="flex flex-wrap gap-3">
                {['CODING', 'GAMING', 'DEVELOPING', 'LEARNING'].map((h) => (
                  <motion.div
                    key={h}
                    whileHover={{ scale: 1.08 }}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.15em',
                      color: 'rgba(255,255,255,0.5)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '4px',
                      padding: '5px 12px',
                    }}
                  >
                    {h}
                  </motion.div>
                ))}
              </div>

              {/* Vision block */}
              <div style={{
                marginTop: '1.2rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.5rem',
                  letterSpacing: '0.2em',
                  color: 'var(--neon-pink)',
                  opacity: 0.5,
                  marginBottom: '0.5rem',
                }}>
                  &gt; VISION.txt
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.45)',
                }}>
                  Build tech that simplifies life, generate income, become a world-class
                  developer — and maybe explore where law meets technology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
