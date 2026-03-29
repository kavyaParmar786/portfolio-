'use client'
import { motion } from 'framer-motion'

export default function WorldShell() {
  return (
    <motion.div
      className="min-h-screen w-full flex flex-col items-center justify-center relative"
      style={{ background: 'var(--dark-bg)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Ambient grid */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Center glow */}
      <div
        className="absolute w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,245,255,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />

      <div className="relative z-10 text-center px-4">
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            color: 'var(--neon-cyan)',
            opacity: 0.5,
            marginBottom: '1.5rem',
          }}
        >
          &gt; WORLD_LOADING... PHASE 2 INCOMING
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 5vw, 3rem)',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.15)',
            letterSpacing: '0.1em',
          }}
        >
          3D WORLD ZONE
        </h2>
      </div>
    </motion.div>
  )
}
