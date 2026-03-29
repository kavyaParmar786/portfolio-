'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

export type ZoneId = 'hero' | 'about' | 'skills' | 'projects' | 'contact'

export interface PlayerState {
  zone: ZoneId
  scrollY: number
  moving: boolean
  keys: Record<string, boolean>
}

const ZONES: { id: ZoneId; threshold: number }[] = [
  { id: 'hero',     threshold: 0 },
  { id: 'about',    threshold: 0.15 },
  { id: 'skills',   threshold: 0.35 },
  { id: 'projects', threshold: 0.55 },
  { id: 'contact',  threshold: 0.78 },
]

function getZone(progress: number): ZoneId {
  let current: ZoneId = 'hero'
  for (const z of ZONES) {
    if (progress >= z.threshold) current = z.id
  }
  return current
}

export function usePlayer() {
  const keys = useRef<Record<string, boolean>>({})
  const scrollRef = useRef(0)
  const rafRef = useRef<number>()
  const movingTimeout = useRef<ReturnType<typeof setTimeout>>()

  const [state, setState] = useState<PlayerState>({
    zone: 'hero',
    scrollY: 0,
    moving: false,
    keys: {},
  })

  // WASD smooth scroll
  const tick = useCallback(() => {
    const k = keys.current
    const speed = 6
    let delta = 0

    if (k['w'] || k['arrowup'])   delta -= speed
    if (k['s'] || k['arrowdown']) delta += speed

    if (delta !== 0) {
      window.scrollBy({ top: delta, behavior: 'auto' })
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      if (['w', 's', 'arrowup', 'arrowdown', 'a', 'd', 'arrowleft', 'arrowright'].includes(key)) {
        e.preventDefault()
      }
      keys.current[key] = true
    }

    const onKeyUp = (e: KeyboardEvent) => {
      keys.current[e.key.toLowerCase()] = false
    }

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      scrollRef.current = window.scrollY

      clearTimeout(movingTimeout.current)
      movingTimeout.current = setTimeout(() => {
        setState(s => ({ ...s, moving: false }))
      }, 150)

      setState(s => ({
        ...s,
        scrollY: window.scrollY,
        zone: getZone(progress),
        moving: true,
      }))
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('scroll', onScroll, { passive: true })
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      clearTimeout(movingTimeout.current)
    }
  }, [tick])

  return state
}
