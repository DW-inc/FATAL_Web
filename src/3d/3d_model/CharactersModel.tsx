import React, { useEffect, useRef, useState, Suspense } from 'react'
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
import Line from '../3d_object/Line'
import { clickModelState } from 'src/commons/store'
import { useRecoilState } from 'recoil'
import { R3FProps } from 'pages'

const R3F = (props: R3FProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [clickModel] = useRecoilState(clickModelState)
  const IdolMemo = React.memo(Idol)

  // console.log(props, '? props 는 뭐지 ')
  const AlishaMemo = React.memo(Alisha)

  const canavasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canavasRef.current) {
      const gl = canavasRef.current.getContext('webgl2')!
      console.log(gl)
      // Create a query object
      const query = gl.createQuery()
      if (!query) {
        console.error('Error creating query object')
        return
      }

      // Use the query object
      gl.beginQuery(gl.ANY_SAMPLES_PASSED, query)
      // ...
      gl.endQuery(gl.ANY_SAMPLES_PASSED)

      // Check for errors
      const error = gl.getError()
      if (error === gl.INVALID_OPERATION) {
        console.error('Invalid query ID error')
        return
      }

      // Delete the query object when it is no longer needed
      gl.deleteQuery(query)
    }
  }, [])

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

  return (
    <div
      style={{
        width: isMobile ? '70%' : '80%',
        height: '70vh',
      }}
    >
      <Canvas shadows ref={canavasRef} camera={{ position: [0, 0.8, 4] }}>
        <Perf position={'bottom-left'} />
        <ambientLight intensity={1} />
        <SpotLight />
        <SpotLightTwo />
        <SpotLightThree />
        <Suspense fallback={null}>
          {/* <Environment background={'only'} files={'characters/hrdd.hdr'} /> */}
          <Hall hallSrc={props.hallSrc} />
          {clickModel === 'IDOL' ? (
            <IdolMemo idolGltfSrc={props.idolGltfSrc} />
          ) : (
            <AlishaMemo nurseGltfSrc={props.nurseGltfSrc} />
          )}
          <Ground groundTexture={props.groundTexture} />
          <StandBeam standBeamSrc={props.standBeamSrc} />
          <StandingStructures standSrc={props.standSrc} />
          <FTLogo logoSrc={props.logoSrc} />
          <LightBeam ceilSrc={props.ceilSrc} />
        </Suspense>
        <OrbitControls />

        <EffectComposer depthBuffer multisampling={3}>
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
        {/* <Line /> */}
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
function Idol({ idolGltfSrc }: { idolGltfSrc: string }) {
  const [Scene, setScene] = useState(new THREE.Scene())
  // console.log(idolGltfSrc, ' idolGltfSrc 는 뭐가 나와 지금?')
  // const { scene, animations, materials }: any = useGLTF(idolGltfSrc)
  const { scene, animations, materials }: any = useGLTF('characters/idol6.gltf')
  const [clickModel] = useRecoilState(clickModelState)
  const {
    actions,
  }: {
    actions: {
      [x: string]: THREE.AnimationAction | null
    }
  } = useAnimations(animations, scene)

  Scene.add(scene)

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

    if (clickModel === 'Alisha') {
      Scene.remove(scene)
    }
  }, [scene, clickModel])

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

  return <primitive object={scene} scale={0.018} position={[0, -2, 0]} />
}

useGLTF.preload('characters/idol6.gltf')

//Alisha
function Alisha({ nurseGltfSrc }: { nurseGltfSrc: string }) {
  // const { scene, animations, materials } = useGLTF(
  //   nurseGltfSrc
  // ) as unknown as GLTFResult
  const { scene, animations, materials } = useGLTF(
    'characters/nurse2Draco.gltf'
  ) as unknown as GLTFResult
  const [clickModel] = useRecoilState(clickModelState)
  const {
    actions,
  }: {
    actions: {
      [x: string]: THREE.AnimationAction | null
    }
  } = useAnimations(animations, scene)

  const Scene = new THREE.Scene()
  Scene.add(scene)

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
    if (clickModel === 'IDOL') {
      Scene.remove(scene)
    }
  }, [scene, clickModel])

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

  return <primitive object={scene} scale={0.018} position={[0, -2, 0]} />
}

useGLTF.preload('characters/nurse2Draco.gltf')

// background
//HALL
interface Props {
  scale: number
  position: number[]
}

function Hall({ hallSrc }: { hallSrc: string }) {
  const { scene } = useGLTF(hallSrc)
  // console.log(hallSrc, 'hallSrc 는 뭐애ㅑ?')
  useEffect(() => {
    scene.traverse((object: any) => {
      if (object instanceof THREE.Mesh) {
        object.receiveShadow = true
      }
    })
  }, [scene])

  return <primitive object={scene} scale={0.015} position={[0, -2.2, 0]} />
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

const Ground = ({ groundTexture }: { groundTexture: string[] }) => {
  const [floor, normal] = useTexture([groundTexture[0], groundTexture[1]])

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
