import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { Canvas, extend, useFrame } from '@react-three/fiber'

extend({ MeshLineGeometry, MeshLineMaterial })

export default function Line() {
  return (
    <Lines
      dash={0.99}
      colors={[[10, 0.5, 2], [1, 2, 10], '#b447ca', '#e597df', '#54dce0']}
    />
  )
}

function Lines({
  dash,
  colors,
  rand = THREE.MathUtils.randFloatSpread,
}: {
  dash: number
  colors: any
  rand?: ((range: number) => number) | undefined
}) {
  const lines = useMemo(() => {
    return Array.from({ length: 50 }, () => {
      const radius = 1.1
      const pos = new THREE.Vector3(rand(radius), rand(radius), rand(radius))
      const points = Array.from({ length: 10 }, () =>
        pos
          .add(new THREE.Vector3(rand(radius), rand(radius), rand(radius)))
          .clone()
      )
      const curve = new THREE.CatmullRomCurve3(points).getPoints(200)

      return {
        color: colors[Math.floor(colors.length * Math.random())],
        width: Math.max(radius / 100, (radius / 50) * Math.random()),
        speed: Math.max(0.1, 1 * Math.random()),
        curve: curve.flatMap((point) => point.toArray()),
      }
    })
  }, [colors, rand])
  return (
    <>
      {lines.map((props, index) => (
        <Fatline key={index} dash={dash} {...props} />
      ))}
    </>
  )
}

function Fatline({
  curve,
  width,
  color,
  speed,
  dash,
}: {
  curve: any
  width: any
  color: any
  speed: any
  dash: any
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state, delta) => {
    if (ref.current != null) {
      ref.current.material.dashOffset -= (delta * speed) / 10
    }
  })
  return (
    <mesh ref={ref}>
      <meshLineGeometry points={curve} />
      <meshLineMaterial
        transparent
        lineWidth={width}
        color={color}
        depthWrite={false}
        dashArray={0.25}
        dashRatio={dash}
        toneMapped={false}
      />
    </mesh>
  )
}
