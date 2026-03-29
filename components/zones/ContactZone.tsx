'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const LINKS = [
  {
    label: 'GITHUB',
    handle: '@kavyaParmar786',
    href: 'https://github.com/kavyaParmar786',
    color: 'var(--neon-cyan)',
    icon: '⌥',
  },
  {
    label: 'EMAIL',
    handle: 'Open for projects',
    href: 'mailto:kavya@example.com',
    color: 'var(--neon-purple)',
    icon: '✉',
  },
  {
    label: 'DISCORD',
    handle: 'Fuse OS Community',
    href: '#',
    color: 'var(--neon-pink)',
    icon: '◈',
  },
]

export default function ContactZone() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('kavya@example.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      className="relative z-20 min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-3xl w-full">

        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            // ZONE_04 — REACH OUT
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            fontWeight: 900,
            color: 'white',
            letterSpacing: '0.06em',
            lineHeight: 1,
          }}>
            CONTACT <span className="glow-cyan" style={{ color: 'var(--neon-cyan)' }}>PORTAL</span>
          </h2>
          <div style={{
            margin: '1rem auto 0',
            width: '80px',
            height: '2px',
            background: 'linear-gradient(to right, transparent, var(--neon-cyan), transparent)',
            boxShadow: '0 0 8px var(--neon-cyan)',
          }} />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.4)',
            marginTop: '1.5rem',
            letterSpacing: '0.05em',
          }}>
            Open to freelance projects, collabs, and cool ideas.
          </p>
        </motion.div>

        {/* Link cards */}
        <div className="flex flex-col gap-4 mb-10">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-6 px-8 py-6 group"
              style={{
                borderColor: link.color + '20',
                textDecoration: 'none',
                cursor: 'none',
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{
                borderColor: link.color + '50',
                x: 6,
                transition: { duration: 0.2 },
              }}
            >
              <span style={{ fontSize: '1.4rem', color: link.color }}>{link.icon}</span>
              <div className="flex-1">
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  color: link.color,
                }}>
                  {link.label}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: '2px',
                }}>
                  {link.handle}
                </p>
              </div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.55rem',
                color: link.color,
                opacity: 0.4,
                letterSpacing: '0.1em',
              }}>
                OPEN →
              </span>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="glass p-10 text-center"
          style={{ borderColor: 'rgba(0,245,255,0.12)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.52rem',
            letterSpacing: '0.25em',
            color: 'rgba(0,245,255,0.4)',
            marginBottom: '1rem',
          }}>
            &gt; HIRE.exe
          </p>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 3vw, 1.8rem)',
            fontWeight: 700,
            color: 'white',
            letterSpacing: '0.08em',
            marginBottom: '0.8rem',
          }}>
            READY TO BUILD SOMETHING?
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: '2rem',
          }}>
            Website · Game · Discord Bot · AI Tool · Custom Project
          </p>

          <motion.button
            onClick={copyEmail}
            className="glow-box-cyan glass px-10 py-4 inline-flex items-center gap-3"
            style={{
              borderColor: 'rgba(0,245,255,0.3)',
              cursor: 'none',
            }}
            whileHover={{ scale: 1.04, borderColor: 'rgba(0,245,255,0.6)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              color: 'var(--neon-cyan)',
            }}>
              {copied ? '✓ COPIED!' : 'COPY EMAIL'}
            </span>
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.48rem',
            letterSpacing: '0.2em',
            color: 'rgba(0,245,255,0.2)',
          }}>
            KAVYA PARMAR // RAJKOT, INDIA // 2025
          </p>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.42rem',
            letterSpacing: '0.15em',
            color: 'rgba(255,255,255,0.1)',
            marginTop: '6px',
          }}>
            BUILT WITH NEXT.JS · THREE.JS · FRAMER MOTION
          </p>
        </motion.div>

      </div>
    </section>
  )
}
