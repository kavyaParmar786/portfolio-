'use client'
import { motion, AnimatePresence } from 'framer-motion'
import type { ZoneId } from '@/hooks/usePlayer'

interface MiniMapProps {
  currentZone: ZoneId
  scrollProgress: number
}

const ZONES: { id: ZoneId; label: string; icon: string }[] = [
  { id: 'hero',     label: 'BASE',     icon: '⬡' },
  { id: 'about',    label: 'ABOUT',    icon: '◈' },
  { id: 'skills',   label: 'SKILLS',   icon: '◆' },
  { id: 'projects', label: 'ARENA',    icon: '◉' },
  { id: 'contact',  label: 'PORTAL',   icon: '◎' },
]

export default function MiniMap({ currentZone, scrollProgress }: MiniMapProps) {
  return (
    <motion.div
      className="fixed top-20 right-6 z-40 glass flex flex-col gap-1 py-3 px-3"
      style={{ borderColor: 'rgba(0,245,255,0.15)', minWidth: '90px' }}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      {/* Title */}
      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.45rem',
        letterSpacing: '0.2em',
        color: 'rgba(0,245,255,0.4)',
        marginBottom: '4px',
        textAlign: 'center',
      }}>
        MAP
      </p>

      {/* Progress bar */}
      <div style={{
        width: '100%',
        height: '2px',
        background: 'rgba(0,245,255,0.1)',
        borderRadius: '1px',
        marginBottom: '8px',
        overflow: 'hidden',
      }}>
        <motion.div
          style={{
            height: '100%',
            background: 'var(--neon-cyan)',
            boxShadow: '0 0 6px var(--neon-cyan)',
            originX: 0,
          }}
          animate={{ scaleX: scrollProgress }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Zone list */}
      {ZONES.map((zone) => {
        const active = zone.id === currentZone
        return (
          <button
            key={zone.id}
            onClick={() => {
              const el = document.getElementById(zone.id)
              if (el) el.scrollIntoView({ behavior: 'smooth' })
              else window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 6px',
              borderRadius: '4px',
              background: active ? 'rgba(0,245,255,0.08)' : 'transparent',
              border: active ? '1px solid rgba(0,245,255,0.25)' : '1px solid transparent',
              cursor: 'none',
              transition: 'all 0.2s',
              width: '100%',
            }}
          >
            <span style={{
              fontSize: '0.6rem',
              color: active ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.2)',
              transition: 'color 0.2s',
            }}>
              {zone.icon}
            </span>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.42rem',
              letterSpacing: '0.12em',
              color: active ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.25)',
              transition: 'color 0.2s',
            }}>
              {zone.label}
            </span>
            {active && (
              <motion.div
                layoutId="zone-dot"
                style={{
                  marginLeft: 'auto',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--neon-cyan)',
                  boxShadow: '0 0 6px var(--neon-cyan)',
                  flexShrink: 0,
                }}
              />
            )}
          </button>
        )
      })}

      {/* WASD hint */}
      <div style={{
        marginTop: '8px',
        borderTop: '1px solid rgba(0,245,255,0.08)',
        paddingTop: '6px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.38rem',
          letterSpacing: '0.1em',
          color: 'rgba(0,245,255,0.25)',
        }}>
          W/S TO MOVE
        </p>
      </div>
    </motion.div>
  )
}
