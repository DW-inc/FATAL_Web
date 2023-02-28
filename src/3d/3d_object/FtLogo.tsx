import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
type GLTFResult = {
  scene: THREE.Scene
  materials: any
  nodes: any
}

interface FTLogoProps {
  scale: number
  position: number[]
}

export function FTLogo({ logoSrc }: { logoSrc: string }) {
  const group = useRef(null)
  const { nodes, materials, scene } = useGLTF(logoSrc) as unknown as GLTFResult

  return (
    <group ref={group} scale={0.015} position={[0, -2, 0]} dispose={null}>
      <group name="Scene">
        <mesh
          name="LEDPIV"
          castShadow
          receiveShadow
          geometry={nodes.LEDPIV.geometry}
          material={materials['Logo.005']}
        >
          <meshBasicMaterial toneMapped={false} color={[1.2, 0.5, 2]} />
        </mesh>

        <mesh
          name="Frame1"
          castShadow
          receiveShadow
          geometry={nodes.Frame1.geometry}
          material={materials['Frame.005']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('characters/logo.gltf')
