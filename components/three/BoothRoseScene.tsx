'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

function RoseModel() {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/models/booth-rose-butterfly.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return
      child.castShadow = true
      child.receiveShadow = true
      const name = child.name.toLowerCase()
      if (name.includes('petal') || name.includes('rose')) {
        child.material = new THREE.MeshPhysicalMaterial({ color: '#160d10', roughness: 0.48, metalness: 0.02, clearcoat: 0.12, clearcoatRoughness: 0.55 })
      } else if (name.includes('wing') && !name.includes('black')) {
        child.material = new THREE.MeshPhysicalMaterial({ color: '#7a1520', roughness: 0.38, metalness: 0.02, transmission: 0.04 })
      } else if (name.includes('leaf') || name.includes('stem') || name.includes('thorn') || name.includes('sepal')) {
        child.material = new THREE.MeshStandardMaterial({ color: '#111713', roughness: 0.68, metalness: 0 })
      }
    })
  }, [scene])

  useFrame((state, delta) => {
    if (!group.current) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const targetX = state.pointer.y * 0.055
    const targetY = state.pointer.x * 0.085
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 2.2, delta)
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY + Math.sin(state.clock.elapsedTime * 0.12) * 0.035, 2.2, delta)
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.42) * 0.018
  })

  return <group ref={group} scale={1.12} rotation={[0.02, -0.1, -0.025]}><primitive object={scene} /></group>
}

export default function BoothRoseScene() {
  const [canRender, setCanRender] = useState(false)
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      setCanRender(Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl')))
    } catch { setCanRender(false) }
  }, [])

  if (!canRender) return <div className="h-full w-full" aria-hidden="true" />

  return (
    <div className="relative h-full min-h-[390px] w-full lg:min-h-[560px]" aria-label="Booth Marketing signature rose sculpture">
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[#d92f3c]/[0.055] blur-[70px]" />
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0.25, 5.4], fov: 32 }} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
        <ambientLight intensity={0.16} color="#efe3cf" />
        <spotLight position={[-3.2, 1.5, 3.4]} intensity={72} angle={0.42} penumbra={0.9} color="#d92f3c" />
        <spotLight position={[3.8, 4.2, 2.8]} intensity={42} angle={0.5} penumbra={1} color="#efe3cf" />
        <pointLight position={[0, -1.5, 2.5]} intensity={8} color="#5b111a" />
        <Suspense fallback={null}><RoseModel /><Environment preset="night" environmentIntensity={0.18} /></Suspense>
      </Canvas>
    </div>
  )
}

useGLTF.preload('/models/booth-rose-butterfly.glb')
