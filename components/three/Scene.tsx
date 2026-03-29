'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ParticleField from './ParticleField'
import FloatingObjects from './FloatingObjects'
import GridFloor from './GridFloor'
import CameraRig from './CameraRig'

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60, near: 0.1, far: 200 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 5, 5]} intensity={0.5} color="#00f5ff" />
        <pointLight position={[-10, -5, -5]} intensity={0.3} color="#a855f7" />

        {/* Scene elements */}
        <CameraRig />
        <ParticleField count={350} />
        <FloatingObjects />
        <GridFloor />
      </Suspense>
    </Canvas>
  )
}
