'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function NeonRing({ position, color, speed, radius }: {
  position: [number, number, number]
  color: string
  speed: number
  radius: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.rotation.x = t * speed
    ref.current.rotation.y = t * speed * 0.7
    ref.current.position.y = position[1] + Math.sin(t * 0.5 + radius) * 0.5
  })

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, 0.02, 8, 60]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </mesh>
  )
}

function WireOctahedron({ position, color, speed }: {
  position: [number, number, number]
  color: string
  speed: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.rotation.x = t * speed
    ref.current.rotation.z = t * speed * 0.5
    ref.current.position.y = position[1] + Math.sin(t * 0.4) * 0.8
  })

  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[1.2, 0]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
    </mesh>
  )
}

function FloatingCube({ position, color, speed }: {
  position: [number, number, number]
  color: string
  speed: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.rotation.x = t * speed * 0.6
    ref.current.rotation.y = t * speed
    ref.current.position.y = position[1] + Math.cos(t * 0.3) * 0.6
  })

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
    </mesh>
  )
}

export default function FloatingObjects() {
  return (
    <group>
      {/* Central large ring */}
      <NeonRing position={[0, 0, -5]} color="#00f5ff" speed={0.2} radius={4} />

      {/* Secondary rings */}
      <NeonRing position={[-6, 2, -8]} color="#a855f7" speed={0.15} radius={2.5} />
      <NeonRing position={[7, -1, -10]} color="#ff0080" speed={0.1} radius={3} />
      <NeonRing position={[0, -3, -3]} color="#00f5ff" speed={0.25} radius={1.5} />

      {/* Wireframe objects */}
      <WireOctahedron position={[-8, 1, -6]} color="#a855f7" speed={0.3} />
      <WireOctahedron position={[9, 0, -12]} color="#00f5ff" speed={0.18} />

      {/* Floating cubes scattered */}
      <FloatingCube position={[4, 3, -4]} color="#00f5ff" speed={0.4} />
      <FloatingCube position={[-5, -2, -7]} color="#ff0080" speed={0.35} />
      <FloatingCube position={[2, -4, -6]} color="#a855f7" speed={0.28} />
      <FloatingCube position={[-3, 4, -9]} color="#00f5ff" speed={0.22} />
    </group>
  )
}
