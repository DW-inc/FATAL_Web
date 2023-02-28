import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
type GLTFResult = {
  scene: THREE.Scene
  materials: any
  nodes: any
}

interface StandBeamProps {
  scale: number
  position: number[]
}

export function StandBeam({ standBeamSrc }: { standBeamSrc: string }) {
  const group = useRef(null)
  const { nodes, materials } = useGLTF(standBeamSrc) as unknown as GLTFResult

  return (
    <group ref={group} scale={0.015} position={[0, -2, 0]} dispose={null}>
      <group name="Scene">
        <group name="SquareLightBeam">
          <group name="iron1" position={[-33.72, 330.6, -66.4]}>
            <mesh
              name="iron1PIV"
              castShadow
              receiveShadow
              geometry={nodes.iron1PIV.geometry}
              material={materials['Iron.001']}
              position={[33.72, -330.6, 66.4]}
            />
          </group>
          <group name="LightBeam" position={[-33.71, 330.6, -66.41]}>
            <group name="LightBeamPIV" position={[33.71, -330.6, 66.41]}>
              <mesh
                name="LightBeamShape"
                castShadow
                receiveShadow
                geometry={nodes.LightBeamShape.geometry}
                material={materials.Beam01}
              >
                <meshBasicMaterial toneMapped={false} color={[2, 1, 3]} />
              </mesh>
              <mesh
                name="LightBeamShape_1"
                castShadow
                receiveShadow
                geometry={nodes.LightBeamShape_1.geometry}
                material={materials.Beam02}
              >
                <meshBasicMaterial toneMapped={false} color={[0.5, 2, 4]} />
              </mesh>
              <mesh
                name="LightBeamShape_2"
                castShadow
                receiveShadow
                geometry={nodes.LightBeamShape_2.geometry}
                material={materials.Beam03}
              >
                <meshBasicMaterial toneMapped={false} color={[2, 0.4, 6]} />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('characters/standbeam.gltf')
