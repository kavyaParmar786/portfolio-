'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const StartScreen = dynamic(() => import('@/components/StartScreen'), { ssr: false })
const WorldShell = dynamic(() => import('@/components/WorldShell'), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false })

export default function Home() {
  const [started, setStarted] = useState(false)

  return (
    <>
      <CustomCursor />
      <StartScreen onEnter={() => setStarted(true)} />
      {started && <WorldShell />}
    </>
  )
}
