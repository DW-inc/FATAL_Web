import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

type GLTFResult = {
  scene: THREE.Scene
  materials: any
  nodes: any
}

export function LightBeam({ ceilSrc }: { ceilSrc: string }) {
  const group = useRef<THREE.Group>(null)
  const BeamRefOne = useRef<THREE.MeshBasicMaterial>(null)
  const BeamRefTwo = useRef<THREE.MeshBasicMaterial>(null)
  const BeamRefThree = useRef<THREE.MeshBasicMaterial>(null)
  const { nodes, materials, scene } = useGLTF(ceilSrc) as unknown as GLTFResult
  return (
    <group ref={group} scale={0.015} position={[0, -1.6, 0]} dispose={null}>
      <group name="Scene">
        <group name="CeilingLightBeam">
          <group name="BeamCell" position={[50.32, 0, 0]}>
            <mesh
              name="BeamCellPIV"
              castShadow
              receiveShadow
              geometry={nodes.BeamCellPIV.geometry}
              material={materials.LightBeamStick}
              position={[-50.32, 0, 0]}
            >
              <meshBasicMaterial toneMapped={false} color="#c7059d" />
            </mesh>
          </group>
          <group name="Beamlight" position={[0, 288.73, 5.33]}>
            <group name="BeamlightPIV" position={[0, -288.73, -5.33]}>
              <mesh
                name="BeamlightShape"
                castShadow
                receiveShadow
                geometry={nodes.BeamlightShape.geometry}
                material={materials.Beam02}
              >
                <meshBasicMaterial
                  toneMapped={false}
                  color={[1.2, 0.5, 3]}
                  ref={BeamRefOne}
                />
              </mesh>

              <mesh
                name="BeamlightShape_1"
                castShadow
                receiveShadow
                geometry={nodes.BeamlightShape_1.geometry}
                material={materials.Beam01}
              >
                <meshBasicMaterial
                  toneMapped={false}
                  color={[1.2, 0.5, 3]}
                  ref={BeamRefTwo}
                />
              </mesh>

              <mesh
                name="BeamlightShape_2"
                castShadow
                receiveShadow
                geometry={nodes.BeamlightShape_2.geometry}
                material={materials.Beam03}
              >
                <meshBasicMaterial
                  toneMapped={false}
                  color={[1.2, 0.5, 3]}
                  ref={BeamRefThree}
                />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('characters/lightbeam4.gltf')
