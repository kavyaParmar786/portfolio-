'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Project {
  id: string
  level: string
  title: string
  desc: string
  tags: string[]
  color: string
  status: string
  icon: string
}

const PROJECTS: Project[] = [
  {
    id: 'ai-invest',
    level: 'LVL 01',
    title: 'AI Investigation Tool',
    desc: 'AI-powered tool built for an investigation department. Automates data analysis, pattern detection, and report generation — turning hours of work into minutes.',
    tags: ['AI', 'Python', 'Automation'],
    color: 'var(--neon-cyan)',
    status: 'DEPLOYED',
    icon: '🔍',
  },
  {
    id: '3d-game',
    level: 'LVL 02',
    title: 'DeadShot Arena',
    desc: 'A mobile multiplayer FPS built in Godot 4 for Android. Procedurally generated maps, 10 weapons & characters, ENet multiplayer, and a custom crosshair editor.',
    tags: ['Godot 4', '3D', 'Mobile', 'Multiplayer'],
    color: 'var(--neon-purple)',
    status: 'IN DEV',
    icon: '🎮',
  },
  {
    id: 'discord-bot',
    level: 'LVL 03',
    title: 'Fuse OS Discord Bot',
    desc: 'Full-featured Discord bot with Pokémon system (Gen 1–5), ticket system, auto-role, moderation, and a complete companion website redesigned from scratch.',
    tags: ['Python', 'discord.py', 'Web'],
    color: 'var(--neon-pink)',
    status: 'LIVE',
    icon: '🤖',
  },
  {
    id: 'minecraft',
    level: 'LVL 04',
    title: 'SoloLeveling RPG Plugin',
    desc: 'Java-based Minecraft plugin with 10 interconnected RPG systems — classes, leveling, skills, dungeons, boss fights, economy, and a custom UI framework.',
    tags: ['Java', 'Maven', 'Minecraft'],
    color: 'var(--neon-cyan)',
    status: 'SHIPPED',
    icon: '⚔️',
  },
  {
    id: 'restaurant',
    level: 'LVL 05',
    title: 'Urban Tadka System',
    desc: 'Full restaurant management system with a luxury dark/gold theme. Waiter & kitchen panels, hash routing, auth state, SaaS-style dashboard — deployed on Vercel.',
    tags: ['Next.js', 'HTML/CSS', 'JS'],
    color: 'var(--neon-purple)',
    status: 'LIVE',
    icon: '🍽️',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="glass relative overflow-hidden cursor-default"
      style={{
        borderColor: hovered ? project.color + '55' : project.color + '18',
        transition: 'border-color 0.3s',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
    >
      {/* Hover glow sweep */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: `radial-gradient(ellipse 60% 60% at 50% 0%, ${project.color}12, transparent)`,
            }}
          />
        )}
      </AnimatePresence>

      <div className="p-7 relative z-10">
        {/* Top row */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <span style={{ fontSize: '1.5rem' }}>{project.icon}</span>
            <div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.48rem',
                letterSpacing: '0.2em',
                color: project.color,
                opacity: 0.6,
              }}>
                {project.level}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                fontWeight: 700,
                color: 'white',
                letterSpacing: '0.06em',
                marginTop: '2px',
              }}>
                {project.title}
              </h3>
            </div>
          </div>

          {/* Status badge */}
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.42rem',
            letterSpacing: '0.15em',
            color: project.color,
            border: `1px solid ${project.color}40`,
            borderRadius: '3px',
            padding: '3px 8px',
            background: `${project.color}08`,
            whiteSpace: 'nowrap',
          }}>
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.92rem',
          lineHeight: 1.75,
          color: 'rgba(255,255,255,0.5)',
          marginBottom: '1rem',
        }}>
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.42rem',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.35)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '3px',
                padding: '3px 8px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom progress bar (decorative) */}
        <div style={{
          marginTop: '1.2rem',
          width: '100%',
          height: '1px',
          background: 'rgba(255,255,255,0.04)',
        }}>
          <motion.div
            style={{
              height: '100%',
              background: project.color,
              boxShadow: `0 0 6px ${project.color}`,
              originX: 0,
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsZone() {
  return (
    <section
      id="projects"
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
            color: 'var(--neon-pink)',
            opacity: 0.5,
            marginBottom: '0.6rem',
          }}>
            // ZONE_03 — INTERACTIVE SHOWCASE
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            fontWeight: 900,
            color: 'white',
            letterSpacing: '0.06em',
            lineHeight: 1,
          }}>
            PROJECTS <span className="glow-pink" style={{ color: 'var(--neon-pink)' }}>ARENA</span>
          </h2>
          <div style={{
            marginTop: '1rem',
            width: '80px',
            height: '2px',
            background: 'linear-gradient(to right, var(--neon-pink), transparent)',
            boxShadow: '0 0 8px var(--neon-pink)',
          }} />
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
