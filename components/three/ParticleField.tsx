'use client'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleFieldProps {
  count?: number
}

export default function ParticleField({ count = 300 }: ParticleFieldProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  // Generate random positions/speeds once
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 60,
      y: (Math.random() - 0.5) * 40,
      z: (Math.random() - 0.5) * 40,
      speedY: 0.004 + Math.random() * 0.008,
      speedX: (Math.random() - 0.5) * 0.003,
      offset: Math.random() * Math.PI * 2,
    }))
  }, [count])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()

    particles.forEach((p, i) => {
      // Float upward, wrap around
      p.y += p.speedY
      if (p.y > 20) p.y = -20

      // Gentle drift
      const wobble = Math.sin(t * 0.5 + p.offset) * 0.02
      dummy.position.set(p.x + wobble, p.y, p.z)
      dummy.scale.setScalar(0.5 + Math.sin(t + p.offset) * 0.2)
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.04, 4, 4]} />
      <meshBasicMaterial color="#00f5ff" transparent opacity={0.6} />
    </instancedMesh>
  )
}
