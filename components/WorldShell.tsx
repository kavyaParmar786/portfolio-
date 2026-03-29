'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('./three/Scene'), { ssr: false })

export default function WorldShell() {
  return (
    <motion.div
      className="relative w-full"
      style={{ background: 'var(--dark-bg)', minHeight: '100vh' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {/* 3D Canvas — fixed behind everything */}
      <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <Scene />
      </div>

      {/* Vignette */}
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(2,4,8,0.85) 100%)',
        }}
      />

      {/* HUD top nav */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-30 flex justify-between items-center px-8 py-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        style={{
          borderBottom: '1px solid rgba(0,245,255,0.07)',
          background: 'rgba(2,4,8,0.4)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <span
          className="glow-cyan"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.72rem',
            letterSpacing: '0.25em',
            color: 'var(--neon-cyan)',
          }}
        >
          KAVYA.DEV
        </span>

        <nav className="hidden md:flex gap-8">
          {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.58rem',
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.38)',
                textDecoration: 'none',
                transition: 'color 0.2s, text-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--neon-cyan)'
                e.currentTarget.style.textShadow = '0 0 12px var(--neon-cyan)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.38)'
                e.currentTarget.style.textShadow = 'none'
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.52rem',
            letterSpacing: '0.15em',
            color: 'rgba(0,245,255,0.32)',
          }}
        >
          SYS: ONLINE
        </span>
      </motion.header>

      {/* Hero section */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.58rem',
              letterSpacing: '0.35em',
              color: 'var(--neon-cyan)',
              opacity: 0.45,
              marginBottom: '1.5rem',
            }}
          >
            &gt; WORLD LOADED // EXPLORE THE ZONES
          </p>

          <h1
            className="glow-cyan"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 9vw, 7rem)',
              fontWeight: 900,
              color: 'var(--neon-cyan)',
              letterSpacing: '0.06em',
              lineHeight: 0.95,
            }}
          >
            WELCOME
          </h1>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.9rem, 3vw, 2rem)',
              fontWeight: 400,
              letterSpacing: '0.35em',
              color: 'rgba(255,255,255,0.45)',
              marginTop: '0.7rem',
            }}
          >
            TO MY UNIVERSE
          </h2>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-3"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.52rem',
                letterSpacing: '0.25em',
                color: 'rgba(0,245,255,0.38)',
              }}
            >
              SCROLL TO EXPLORE
            </span>
            <svg width="16" height="26" viewBox="0 0 16 26" fill="none">
              <rect x="6.5" y="5" width="3" height="7" rx="1.5" fill="rgba(0,245,255,0.6)" />
              <rect x="0.5" y="0.5" width="15" height="25" rx="7.5" stroke="rgba(0,245,255,0.28)" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Zone placeholder sections */}
      {[
        { id: 'about',    label: 'ABOUT ZONE',      sub: 'Identity & Story',      color: 'var(--neon-cyan)' },
        { id: 'skills',   label: 'SKILLS LAB',       sub: 'Tech & Abilities',      color: 'var(--neon-purple)' },
        { id: 'projects', label: 'PROJECTS ARENA',   sub: 'Interactive Showcase',  color: 'var(--neon-pink)' },
        { id: 'contact',  label: 'CONTACT PORTAL',   sub: 'Links & CTA',           color: 'var(--neon-cyan)' },
      ].map((zone, i) => (
        <section
          key={zone.id}
          id={zone.id}
          className="relative z-20 min-h-screen flex items-center justify-center px-4"
        >
          <motion.div
            className="glass text-center px-16 py-14 max-w-lg w-full"
            style={{ borderColor: `${zone.color}30` }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                color: zone.color,
                opacity: 0.5,
                marginBottom: '1rem',
              }}
            >
              // ZONE_{String(i + 1).padStart(2, '0')} — {zone.sub.toUpperCase()}
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 5vw, 3rem)',
                fontWeight: 700,
                color: zone.color,
                letterSpacing: '0.1em',
              }}
            >
              {zone.label}
            </h2>
            <div
              className="mx-auto mt-6 mb-6"
              style={{
                width: '40px',
                height: '1px',
                background: zone.color,
                opacity: 0.4,
                boxShadow: `0 0 8px ${zone.color}`,
              }}
            />
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.25)',
                letterSpacing: '0.12em',
              }}
            >
              FULL CONTENT — PHASE 4
            </p>
          </motion.div>
        </section>
      ))}
    </motion.div>
  )
}
