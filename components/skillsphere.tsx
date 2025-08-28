'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Billboard } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'

import { Logos } from '@/constants'

const LogoSphere = () => {
  const groupRef = useRef(null)
  const goldenRatio = (1 + Math.sqrt(5)) / 2
  const radius = 10

  return (
    <group ref={groupRef}>
      {Logos.map((logo, i) => {
        const theta = (2 * Math.PI * i) / goldenRatio
        const phi = Math.acos(1 - (2 * (i + 0.5)) / Logos.length)

        const x = radius * Math.sin(phi) * Math.cos(theta)
        const y = radius * Math.sin(phi) * Math.sin(theta)
        const z = radius * Math.cos(phi)

        return (
          <Billboard key={i} position={[x, y, z]}>
            <mesh>
              <circleGeometry args={[1, 32]} />
              <meshBasicMaterial
                map={new THREE.TextureLoader().load(logo)}
                transparent
                side={THREE.DoubleSide}
              />
            </mesh>
          </Billboard>
        )
      })}
    </group>
  )
}

export const SkilSphere = () => {
  return (
    <div className='h-[600px] md:h-[800px]'>
      <Canvas camera={{ position: [0, 0, 30] }}>
        {' '}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <LogoSphere />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
          enablePan={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  )
}
