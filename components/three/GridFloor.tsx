'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function GridFloor() {
  const ref = useRef<THREE.GridHelper>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    // Slow drift to give motion feel
    ref.current.position.z = (clock.getElapsedTime() * 0.4) % 2
  })

  return (
    <group position={[0, -5, 0]} rotation={[0, 0, 0]}>
      <gridHelper
        ref={ref}
        args={[100, 50, '#00f5ff', '#001a1f']}
      />
      {/* Second grid slightly offset for depth */}
      <gridHelper
        args={[100, 25, '#a855f7', '#0a001a']}
        position={[0, 0.01, 0]}
      />
    </group>
  )
}
