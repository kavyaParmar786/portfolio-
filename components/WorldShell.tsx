'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { usePlayer } from '@/hooks/usePlayer'
import MiniMap from './MiniMap'
import AboutZone from './zones/AboutZone'
import SkillsZone from './zones/SkillsZone'
import ProjectsZone from './zones/ProjectsZone'
import ContactZone from './zones/ContactZone'

const Scene = dynamic(() => import('./three/Scene'), { ssr: false })

export default function WorldShell() {
  const player = usePlayer()

  const maxScroll =
    typeof window !== 'undefined'
      ? document.documentElement.scrollHeight - window.innerHeight
      : 1
  const scrollProgress = maxScroll > 0 ? player.scrollY / maxScroll : 0

  return (
    <motion.div
      className="relative w-full"
      style={{ background: 'var(--dark-bg)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {/* 3D Canvas */}
      <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <Scene />
      </div>

      {/* Vignette */}
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(2,4,8,0.88) 100%)',
        }}
      />

      {/* HUD Nav */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-30 flex justify-between items-center px-8 py-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        style={{
          borderBottom: '1px solid rgba(0,245,255,0.07)',
          background: 'rgba(2,4,8,0.5)',
          backdropFilter: 'blur(14px)',
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="glow-cyan"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.72rem',
            letterSpacing: '0.25em',
            color: 'var(--neon-cyan)',
            background: 'none',
            border: 'none',
            cursor: 'none',
          }}
        >
          KAVYA.DEV
        </button>

        <nav className="hidden md:flex gap-8">
          {['about', 'skills', 'projects', 'contact'].map((id) => {
            const active = player.zone === id
            return (
              <a
                key={id}
                href={`#${id}`}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.2em',
                  color: active ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.32)',
                  textDecoration: 'none',
                  textShadow: active ? '0 0 12px var(--neon-cyan)' : 'none',
                  transition: 'all 0.25s',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--neon-cyan)'
                  e.currentTarget.style.textShadow = '0 0 12px var(--neon-cyan)'
                }}
                onMouseLeave={e => {
                  if (!active) {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.32)'
                    e.currentTarget.style.textShadow = 'none'
                  }
                }}
              >
                {id}
              </a>
            )
          })}
        </nav>

        {/* Zone indicator */}
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.5rem',
          letterSpacing: '0.15em',
          color: 'rgba(0,245,255,0.32)',
        }}>
          ZONE: {player.zone.toUpperCase()}
        </span>
      </motion.header>

      {/* Mini Map */}
      <MiniMap currentZone={player.zone} scrollProgress={scrollProgress} />

      {/* WASD movement hint — shows briefly on load */}
      <motion.div
        className="fixed bottom-8 left-8 z-30 glass px-4 py-3"
        style={{ borderColor: 'rgba(0,245,255,0.12)' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.48rem',
          letterSpacing: '0.15em',
          color: 'rgba(0,245,255,0.4)',
        }}>
          ↑ W / S ↓ &nbsp;·&nbsp; SCROLL TO NAVIGATE
        </p>
      </motion.div>

      {/* ── HERO ── */}
      <div
        id="hero"
        className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.58rem',
            letterSpacing: '0.35em',
            color: 'var(--neon-cyan)',
            opacity: 0.45,
            marginBottom: '1.5rem',
          }}>
            &gt; WORLD LOADED // EXPLORE THE ZONES BELOW
          </p>

          <h1 className="glow-cyan" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 9vw, 7rem)',
            fontWeight: 900,
            color: 'var(--neon-cyan)',
            letterSpacing: '0.06em',
            lineHeight: 0.95,
          }}>
            WELCOME
          </h1>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.9rem, 3vw, 2rem)',
            fontWeight: 400,
            letterSpacing: '0.35em',
            color: 'rgba(255,255,255,0.42)',
            marginTop: '0.7rem',
          }}>
            TO MY UNIVERSE
          </h2>

          {/* Scroll bounce */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-3"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          >
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.52rem',
              letterSpacing: '0.25em',
              color: 'rgba(0,245,255,0.35)',
            }}>
              SCROLL TO EXPLORE
            </span>
            <svg width="16" height="26" viewBox="0 0 16 26" fill="none">
              <rect x="6.5" y="5" width="3" height="7" rx="1.5" fill="rgba(0,245,255,0.55)" />
              <rect x="0.5" y="0.5" width="15" height="25" rx="7.5" stroke="rgba(0,245,255,0.25)" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* ── ZONES ── */}
      <AboutZone />
      <SkillsZone />
      <ProjectsZone />
      <ContactZone />
    </motion.div>
  )
}
