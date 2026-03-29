'use client'
import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface StartScreenProps {
  onEnter: () => void
}

const ROLES = ['WEB DEVELOPER', 'GAME CREATOR', 'AI BUILDER', 'FREELANCER']

export default function StartScreen({ onEnter }: StartScreenProps) {
  const [visible, setVisible] = useState(true)
  const [blink, setBlink] = useState(true)
  const [roleIndex, setRoleIndex] = useState(0)
  const [booting, setBooting] = useState(true)
  const [bootLines, setBootLines] = useState<string[]>([])

  const BOOT_SEQUENCE = [
    '> INITIALIZING PORTFOLIO_OS v1.0...',
    '> LOADING SKILL_MATRIX... OK',
    '> MOUNTING PROJECT_DATABASE... OK',
    '> CONNECTING TO KAVYA.DEV... OK',
    '> ALL SYSTEMS NOMINAL. READY.',
  ]

  // Boot sequence
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < BOOT_SEQUENCE.length) {
        setBootLines(prev => [...prev, BOOT_SEQUENCE[i]])
        i++
      } else {
        clearInterval(timer)
        setTimeout(() => setBooting(false), 500)
      }
    }, 320)
    return () => clearInterval(timer)
  }, [])

  // Blink
  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 700)
    return () => clearInterval(t)
  }, [])

  // Role cycle
  useEffect(() => {
    const t = setInterval(() => setRoleIndex(r => (r + 1) % ROLES.length), 2200)
    return () => clearInterval(t)
  }, [])

  const handleEnter = useCallback(() => {
    if (booting) return
    setVisible(false)
    setTimeout(onEnter, 1100)
  }, [booting, onEnter])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') handleEnter()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleEnter])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'var(--dark-bg)', cursor: 'none' }}
          onClick={handleEnter}
          exit={{ opacity: 0, filter: 'brightness(3) blur(10px)' }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Ambient glow blobs */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full drift pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 70%)',
              filter: 'blur(60px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full drift-2 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
              filter: 'blur(80px)',
              top: '30%',
              left: '60%',
            }}
          />

          {/* Grid */}
          <div
            className="absolute inset-0 grid-bg opacity-30 pointer-events-none"
            style={{
              maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent)',
              WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent)',
            }}
          />

          {/* Boot terminal — top left */}
          <motion.div
            className="absolute top-8 left-8 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {bootLines.map((line, i) => (
              <p
                key={i}
                className="text-xs mb-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: i === bootLines.length - 1 && !booting ? 'var(--neon-cyan)' : 'rgba(0,245,255,0.4)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.05em',
                }}
              >
                {line}
              </p>
            ))}
          </motion.div>

          {/* Corner decorations */}
          {[
            { top: 0, left: 0, borderTop: '2px solid', borderLeft: '2px solid' },
            { top: 0, right: 0, borderTop: '2px solid', borderRight: '2px solid' },
            { bottom: 0, left: 0, borderBottom: '2px solid', borderLeft: '2px solid' },
            { bottom: 0, right: 0, borderBottom: '2px solid', borderRight: '2px solid' },
          ].map((style, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 m-6 pointer-events-none"
              style={{ ...style, borderColor: 'var(--neon-cyan)', opacity: 0.5 }}
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
            />
          ))}

          {/* Main content */}
          <AnimatePresence>
            {!booting && (
              <motion.div
                className="text-center relative z-10 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* Location tag */}
                <motion.p
                  className="mb-6 tracking-[0.4em] text-xs opacity-50"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--neon-cyan)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 0.2 }}
                >
                  PORTFOLIO_OS // RAJKOT, INDIA
                </motion.p>

                {/* Name */}
                <motion.h1
                  className="glow-cyan flicker select-none"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(4rem, 14vw, 11rem)',
                    fontWeight: 900,
                    letterSpacing: '0.04em',
                    color: 'var(--neon-cyan)',
                    lineHeight: 0.9,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  KAVYA
                </motion.h1>

                <motion.h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 5vw, 3rem)',
                    fontWeight: 400,
                    letterSpacing: '0.35em',
                    color: 'rgba(255,255,255,0.65)',
                    marginTop: '0.4rem',
                  }}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.7 }}
                >
                  PARMAR
                </motion.h2>

                {/* Role badge */}
                <motion.div
                  className="mt-6 flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div
                    className="px-5 py-2 glass"
                    style={{ borderColor: 'rgba(168,85,247,0.35)' }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={roleIndex}
                        className="glow-purple"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.7rem',
                          letterSpacing: '0.25em',
                          color: 'var(--neon-purple)',
                        }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                      >
                        {ROLES[roleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Divider line */}
                <motion.div
                  className="mx-auto mt-10 mb-10"
                  style={{
                    width: '1px',
                    height: '60px',
                    background: 'linear-gradient(to bottom, transparent, var(--neon-cyan), transparent)',
                    boxShadow: '0 0 8px var(--neon-cyan)',
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />

                {/* Press ENTER */}
                <motion.button
                  onClick={handleEnter}
                  className="group relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ cursor: 'none' }}
                >
                  <span
                    className="glow-box-cyan glass px-10 py-4 inline-flex items-center gap-4 transition-all duration-300 group-hover:border-cyan-400"
                    style={{ borderColor: 'rgba(0,245,255,0.3)' }}
                  >
                    <span
                      className="blink"
                      style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'var(--neon-cyan)',
                        boxShadow: '0 0 8px var(--neon-cyan)',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.3em',
                        color: 'var(--neon-cyan)',
                      }}
                    >
                      PRESS ENTER TO START
                    </span>
                    <span
                      className="blink"
                      style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'var(--neon-cyan)',
                        boxShadow: '0 0 8px var(--neon-cyan)',
                      }}
                    />
                  </span>
                </motion.button>

                {/* Mobile tap hint */}
                <motion.p
                  className="mt-5 opacity-25"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    color: 'var(--neon-cyan)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.25 }}
                  transition={{ delay: 0.9 }}
                >
                  // TAP ANYWHERE ON MOBILE
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom status bar */}
          <motion.div
            className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.55rem',
                letterSpacing: '0.1em',
                color: 'rgba(0,245,255,0.35)',
              }}
            >
              SYS: ONLINE
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.55rem',
                letterSpacing: '0.1em',
                color: 'rgba(0,245,255,0.35)',
              }}
            >
              AGE: 17+ // CLASS: XI COMMERCE // ICSE
            </span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.55rem',
                letterSpacing: '0.1em',
                color: 'rgba(0,245,255,0.35)',
              }}
            >
              BUILD: 2025.1
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
