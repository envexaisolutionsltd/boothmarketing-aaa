'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { motion, useReducedMotion } from 'framer-motion'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

type PetalSpec = {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number, number]
  tone: string
}

function makePetals(): PetalSpec[] {
  const petals: PetalSpec[] = []
  const rings = [
    { count: 7, radius: 0.18, y: 0.20, scale: 0.55, tilt: 0.38 },
    { count: 9, radius: 0.48, y: 0.08, scale: 0.76, tilt: 0.62 },
    { count: 11, radius: 0.82, y: -0.10, scale: 0.98, tilt: 0.86 },
    { count: 13, radius: 1.14, y: -0.30, scale: 1.18, tilt: 1.04 },
  ]

  rings.forEach((ring, ringIndex) => {
    for (let i = 0; i < ring.count; i += 1) {
      const angle = (i / ring.count) * Math.PI * 2 + ringIndex * 0.37
      const irregularity = 1 + Math.sin(i * 2.17 + ringIndex) * 0.045
      petals.push({
        position: [Math.cos(angle) * ring.radius, ring.y + Math.sin(i * 1.9) * 0.025, Math.sin(angle) * ring.radius],
        rotation: [ring.tilt + Math.sin(i * 1.31) * 0.055, -angle + Math.PI / 2, Math.sin(i * 2.41) * 0.07],
        scale: [ring.scale * 0.72 * irregularity, ring.scale * 1.02, ring.scale * 0.22],
        tone: ringIndex < 2 ? '#120d10' : ringIndex === 2 ? '#151013' : '#181215',
      })
    }
  })
  return petals
}

function RoseSculpture({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null)
  const redLight = useRef<THREE.PointLight>(null)
  const petals = useMemo(makePetals, [])
  const { pointer } = useThree()

  useFrame((state, delta) => {
    if (!group.current) return
    const targetX = reducedMotion ? -0.16 : -0.16 + pointer.y * 0.09
    const targetY = reducedMotion ? 0.34 : 0.34 + pointer.x * 0.13
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 3.2, delta)
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 3.2, delta)
    if (!reducedMotion) group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.23) * 0.025
    if (redLight.current && !reducedMotion) {
      redLight.current.position.x = 2.7 + pointer.x * 0.7
      redLight.current.position.y = 1.5 - pointer.y * 0.35
    }
  })

  return (
    <group ref={group} rotation={[-0.16, 0.34, 0]} scale={1.12}>
      {petals.map((petal, index) => (
        <mesh key={index} position={petal.position} rotation={petal.rotation} scale={petal.scale} castShadow receiveShadow>
          <sphereGeometry args={[1, 32, 20, 0, Math.PI * 2, 0, Math.PI * 0.62]} />
          <meshStandardMaterial color={petal.tone} roughness={0.42} metalness={0.18} side={THREE.DoubleSide} />
        </mesh>
      ))}
      <mesh position={[0, 0.05, 0]} scale={[0.52, 0.45, 0.52]}>
        <sphereGeometry args={[1, 32, 24]} />
        <meshStandardMaterial color="#0b090b" roughness={0.5} metalness={0.12} />
      </mesh>
      <pointLight ref={redLight} color="#d92f3c" intensity={18} distance={7} position={[2.7, 1.5, 2.2]} />
    </group>
  )
}

export default function BoothRose({ className = '' }: { className?: string }) {
  const reducedMotion = Boolean(useReducedMotion())

  return (
    <div className={`relative isolate min-h-[320px] w-full sm:min-h-[390px] lg:min-h-[510px] ${className}`} aria-hidden="true">
      <div className="pointer-events-none absolute inset-[4%] rounded-full bg-[radial-gradient(circle,rgba(217,47,60,0.17)_0%,rgba(217,47,60,0.055)_34%,transparent_70%)] blur-3xl" />
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, scale: 0.92, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.05, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0.25, 5.7], fov: 35 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          shadows={false}
        >
          <ambientLight intensity={0.28} color="#efe3cf" />
          <directionalLight color="#efe3cf" intensity={2.4} position={[-3.2, 4.5, 4]} />
          <directionalLight color="#6c6970" intensity={1.3} position={[3, -1, -2]} />
          <Float speed={reducedMotion ? 0 : 0.55} rotationIntensity={reducedMotion ? 0 : 0.08} floatIntensity={reducedMotion ? 0 : 0.16}>
            <RoseSculpture reducedMotion={reducedMotion} />
          </Float>
        </Canvas>
      </motion.div>
      <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-10 w-[48%] -translate-x-1/2 rounded-full bg-black/65 blur-2xl" />
      <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-px w-[52%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </div>
  )
}
