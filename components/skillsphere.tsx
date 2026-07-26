'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Billboard } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'

import { Logos } from '@/constants'

const LogoSphere = () => {
  const goldenRatio = (1 + Math.sqrt(5)) / 2
  const radius = 10

  // useMemo prevents recalculating Math functions on every frame render
  const logosData = useMemo(() => {
    return Logos.map((logo, i) => {
      const theta = (2 * Math.PI * i) / goldenRatio
      const phi = Math.acos(1 - (2 * (i + 0.5)) / Logos.length)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      return { position: [x, y, z] as [number, number, number], logo }
    })
  }, [])

  return (
    <group>
      {logosData.map((data, i) => (
        <Billboard key={i} position={data.position}>
          <mesh>
            <circleGeometry args={[1.2, 32]} />{' '}
            {/* সাইজ একটু বড় করা হয়েছে (1.2) */}
            <meshBasicMaterial
              map={new THREE.TextureLoader().load(data.logo)}
              transparent
              side={THREE.DoubleSide}
            />
          </mesh>
        </Billboard>
      ))}
    </group>
  )
}

export const SkilSphere = () => {
  return (
    // রেস্পন্সিভ হাইট দেওয়া হয়েছে যাতে মোবাইলে স্ক্রিন ব্লক না করে
    <div className='relative flex h-[350px] w-full cursor-grab items-center justify-center active:cursor-grabbing md:h-[450px] lg:h-[500px]'>
      <Canvas camera={{ position: [0, 0, 25] }}>
        {' '}
        {/* ক্যামেরা একটু কাছে আনা হয়েছে */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <LogoSphere />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5} // স্পিড একটু স্মুথ করা হয়েছে
          enablePan={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  )
}
