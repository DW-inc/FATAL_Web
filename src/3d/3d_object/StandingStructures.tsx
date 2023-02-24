import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

type GLTFResult = {
  scene: THREE.Scene
  materials: any
  nodes: any
}

interface StandingStructuresProps {
  scale: number
  position: number[]
}

export default function StandingStructures(props: StandingStructuresProps) {
  const group = useRef(null)
  const { nodes, materials } = useGLTF(
    'characters/SM_Frame01.gltf'
  ) as unknown as GLTFResult

  return (
    <group
      ref={group}
      scale={[props.scale, props.scale, props.scale]}
      position={props.position}
      dispose={null}
    >
      <group name="Scene">
        <mesh
          name="SM_ClubFrameA04PIV"
          castShadow
          receiveShadow
          geometry={nodes.SM_ClubFrameA04PIV.geometry}
          material={materials.M_Black03}
          position={[-162.94, 0, -27.05]}
        />
        <mesh
          name="SM_ClubFrameA01PIV"
          castShadow
          receiveShadow
          geometry={nodes.SM_ClubFrameA01PIV.geometry}
          material={materials.M_Black03}
        />
        <mesh
          name="SM_ClubFrameA03PIV"
          castShadow
          receiveShadow
          geometry={nodes.SM_ClubFrameA03PIV.geometry}
          material={materials.M_Black03}
          position={[-178.56, 0, 0]}
        />
        <mesh
          name="SM_ClubFrameA02PIV"
          castShadow
          receiveShadow
          geometry={nodes.SM_ClubFrameA02PIV.geometry}
          material={materials.M_Black03}
        />
      </group>
    </group>
  )
}
