import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  useAnimations,
  useGLTF,
  useHelper,
  useTexture,
} from '@react-three/drei'
import * as THREE from 'three'
import { Perf } from 'r3f-perf'
import { SpotLightHelper } from 'three'
import { LightBeam } from '../3d_object/LightBeam'
import { FTLogo } from '../3d_object/FtLogo'
import { StandBeam } from '../3d_object/StandBeam'
import StandingStructures from '../3d_object/StandingStructures'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, BlendFunction } from 'postprocessing'
import { GetServerSideProps } from 'next'

export interface GltfSrcProps {
  idolGltfSrc?: string
  nurseGltfSrc?: string
}

interface R3FProps {
  clickModel: string
}

const R3F = ({ clickModel }: R3FProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {})

  return (
    <div
      style={{
        width: '70%',
        height: '70vh',
      }}
    >
      <Canvas shadows camera={{ position: [0, 0.8, 3.6] }}>
        <Perf position={'bottom-left'} />
        <ambientLight intensity={0.4} />
        <SpotLight />
        <SpotLightTwo />
        <SpotLightThree />
        <Hall scale={0.015} position={[0, -2.2, 0]} />
        {clickModel === 'IDOL' ? (
          <Idol scale={0.018} position={[0, -2, 0]} />
        ) : (
          <Alisha scale={0.018} position={[0, -2, -3.7]} />
        )}
        {/* <Idol scale={0.018} position={[0, -2, 0]} /> */}
        {/* <Alisha scale={0.018} position={[0, -2, 0]} /> */}
        <OrbitControls />
        <Ground />
        <StandBeam scale={0.015} position={[0, -2, 0]} />
        <StandingStructures scale={0.015} position={[0, -2, 0]} />
        <FTLogo scale={0.015} position={[0, -2, 0]} />
        <LightBeam />

        <EffectComposer depthBuffer multisampling={8}>
          <Bloom
            kernelSize={3}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.7}
            intensity={0.3}
          />
          <Bloom
            kernelSize={KernelSize.HUGE} //윈도우 크기
            luminanceThreshold={0.7} //휘도+문턱
            luminanceSmoothing={0.3}
            intensity={1.5}
          />
        </EffectComposer>
        <Environment background={'only'} files={'characters/hrdd.hdr'} />
      </Canvas>
    </div>
  )
}

type GLTFResult = {
  scene: THREE.Scene
  animations: THREE.AnimationClip[]
  materials: { [x: string]: THREE.MeshPhysicalMaterial }
}

interface Props {
  scale: number
  position: number[]
}

//캐릭터 모델링
// idol
function Idol({ ...props }) {
  const { scene, animations, materials } = useGLTF(
    'characters/idol6.gltf'
  ) as unknown as GLTFResult

  const {
    actions,
  }: {
    actions: {
      [x: string]: THREE.AnimationAction | null
    }
  } = useAnimations(animations, scene)

  //metalness, roughness를 조절
  useEffect(() => {
    //기존 0.15 0.5
    materials['pasted__pasted__Hair.001'].metalness = 0.3
    materials['pasted__pasted__Hair.001'].roughness = 0.5

    //기존 0.5 0.7
    materials['Skin.001'].metalness = 0.4
    materials['Skin.001'].roughness = 0.8

    //0.5 0.7
    materials['pasted__Clothes.001'].metalness = 0.6
    materials['pasted__Clothes.001'].roughness = 0.6

    materials['pasted__Skin.001'].metalness = 0.4
    materials['pasted__Skin.001'].roughness = 0.7

    materials['pasted__UE4_Mat.001'].metalness = 0.5
    materials['pasted__UE4_Mat.001'].roughness = 0.6
  }, [materials])

  //scene의 오브젝트에 shadow를 추가
  useEffect(() => {
    scene.traverse((object: any) => {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true
        object.receiveShadow = true
        object.material.envMapIntensity = 20
      }
    })
  }, [scene])

  useEffect(() => {
    if (actions['root|Take 001|BaseLayer'] != null) {
      actions['root|Take 001|BaseLayer'].reset().fadeIn(0.2).play()
    }

    return () => {
      if (actions['root|Take 001|BaseLayer'] != null) {
        actions['root|Take 001|BaseLayer'].fadeOut(0.5)
      }
    }
  }, [actions])

  return <primitive object={scene} {...props} />
}

useGLTF.preload('characters/idol6.gltf')

//Alisha
function Alisha({ ...props }) {
  const { scene, animations, materials } = useGLTF(
    'characters/nurse7.gltf'
  ) as unknown as GLTFResult

  const {
    actions,
  }: {
    actions: {
      [x: string]: THREE.AnimationAction | null
    }
  } = useAnimations(animations, scene)

  console.log(materials, ' materials 는 뭐가 나와?')

  //metalness, roughness를 조절
  useEffect(() => {
    //기존 0.15 0.5
    materials['pasted__pasted__pasted__Body1'].metalness = 0.3
    materials['pasted__pasted__pasted__Body1'].roughness = 0.8

    // //기존 0.5 0.35
    materials['pasted__pasted__pasted__Hair2'].metalness = 0.4
    materials['pasted__pasted__pasted__Hair2'].roughness = 0.5

    // 0.3 0.35
    materials['pasted__pasted__pasted__Pants1'].metalness = 0.3
    materials['pasted__pasted__pasted__Pants1'].roughness = 0.6

    // 0.4 0.8
    materials['pasted__pasted__pasted__Pants2'].metalness = 0.4
    materials['pasted__pasted__pasted__Pants2'].roughness = 0.5

    // 0.7
    // materials["pasted__pasted__pasted__Top1"].metalness = 0.5
    // materials["pasted__pasted__pasted__Top1"].roughness = 0.6
  }, [materials])

  //scene의 오브젝트에 shadow를 추가
  useEffect(() => {
    scene.traverse((object: any) => {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true
        object.receiveShadow = true
        object.material.envMapIntensity = 20
      }
    })
  }, [scene])

  useEffect(() => {
    if (actions['root|Take 001|BaseLayer'] != null) {
      actions['root|Take 001|BaseLayer'].reset().fadeIn(0.2).play()
    }

    return () => {
      if (actions['root|Take 001|BaseLayer'] != null) {
        actions['root|Take 001|BaseLayer'].fadeOut(0.5)
      }
    }
  }, [actions])

  return <primitive object={scene} {...props} />
}

useGLTF.preload('characters/nurse7.gltf')

// background
//HALL
interface Props {
  scale: number
  position: number[]
}

function Hall({ ...props }: Props) {
  const { scene } = useGLTF('characters/bg.gltf')

  useEffect(() => {
    scene.traverse((object: any) => {
      if (object instanceof THREE.Mesh) {
        object.receiveShadow = true
      }
    })
  }, [scene])

  return <primitive object={scene} {...props} />
}
useGLTF.preload('characters/bg.gltf')

// 빛
const SpotLight = () => {
  const ref = useRef<THREE.Object3D>(null)
  // useHelper(ref, SpotLightHelper, 1)

  return (
    <spotLight
      ref={ref as any}
      angle={0.47} // 조명을 비추는 원의 둘레의 크기
      color="#0b8dc9"
      penumbra={0.8} // 빛의 감쇄율
      position={[-4, 7, 10]}
      shadow-mapSize={[512, 512]} //그림자 맵의 픽셀
      shadow-bias={-0.0001} // 그림자 오차 클수록 더 두껍거나 가늘게
      castShadow // 피사체에 그림자를 던진다는 의미
      receiveShadow // 그림자를 받는다는 의미
      intensity={4} // 빛의 강도
      shadow-focus={2.5} // 그림자의 선명도
    />
  )
}

const SpotLightTwo = () => {
  const ref = useRef<THREE.SpotLight>(null)
  // useHelper(ref, SpotLightHelper, 1)

  let r = 0
  // useFrame(({ clock }) => {
  //   if (ref.current) {
  //     r += 0.007;
  //     const t = clock.getElapsedTime();
  //     ref.current.position.x = -10 * Math.cos(r);
  //     ref.current.position.z = -10 * Math.sin(r);
  //     ref.current.rotation.x = Math.sin(t * 0.02) * Math.PI * 0.1;
  //     ref.current.rotation.z = Math.cos(t * 0.02) * Math.PI * 0.1;
  //   }
  // });
  return (
    <spotLight
      ref={ref}
      angle={0.47}
      color="#d662bd"
      //   빛의 감쇄율
      penumbra={0.8}
      position={[5, 7, 10]}
      shadow-mapSize={[512, 512]}
      shadow-bias={-0.0001}
      intensity={4}
      shadow-focus={2.5}
      castShadow
    />
  )
}

const SpotLightThree = () => {
  const ref = useRef<THREE.SpotLight>(null)
  // useHelper(ref, SpotLightHelper, 1)
  return (
    <spotLight
      ref={ref}
      angle={0.3}
      color="#5d68c4"
      //   빛의 감쇄율
      penumbra={0.5}
      position={[-0.35, 2, -10]}
      shadow-mapSize={[512, 512]}
      shadow-bias={-0.0001}
      intensity={3}
    />
  )
}

const Ground = () => {
  const [floor, normal] = useTexture([
    'characters/texture1.jpg',
    'characters/texturenormal.jpg',
  ])

  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow position-y={-2}>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        mirror={0.6}
        roughness={2}
        color="#5c4164"
        metalness={0.6}
        roughnessMap={floor}
        normalMap={normal}
        blur={[1000, 400]}
        mixBlur={0.7}
        mixStrength={1}
        resolution={1024}
        reflectorOffset={0}
      />
    </mesh>
  )
}

export default R3F

export const getServerSideProps: GetServerSideProps = async () => {
  const idolGltfSrc = 'characters/idol7.gltf'
  const nurseGltfSrc = 'characters/nurse5.gltf'

  return {
    props: {
      idolGltfSrc,
      nurseGltfSrc,
    },
  }
}
