import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Knot() {
  const ref = useRef(null)
  useFrame((state) => {
    const mesh = ref.current
    if (!mesh) return
    const time = state.clock.elapsedTime
    mesh.rotation.x = time * 0.16 + state.pointer.y * 0.35
    mesh.rotation.y = time * 0.26 + state.pointer.x * 0.45
  })

  return (
    <mesh ref={ref} scale={1.12}>
      <torusKnotGeometry args={[1, 0.32, 200, 24]} />
      <meshPhysicalMaterial
        color="#eef3ff"
        roughness={0.16}
        metalness={0.22}
        clearcoat={1}
        clearcoatRoughness={0.12}
        emissive="#3B82F6"
        emissiveIntensity={0.16}
      />
    </mesh>
  )
}

function Orbiters() {
  const ref = useRef(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.32
    ref.current.rotation.x = state.pointer.y * 0.2
  })

  return (
    <group ref={ref}>
      <mesh position={[1.85, 0.55, 0.2]}>
        <icosahedronGeometry args={[0.22, 0]} />
        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.55} />
      </mesh>
      <mesh position={[-1.65, -0.45, 0.35]}>
        <octahedronGeometry args={[0.18, 0]} />
        <meshStandardMaterial color="#22C55E" emissive="#22C55E" emissiveIntensity={0.45} />
      </mesh>
      <mesh position={[0.35, -1.55, 0.1]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial color="#93C5FD" emissive="#60A5FA" emissiveIntensity={0.4} />
      </mesh>
    </group>
  )
}

export default function HeroVisual() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.3], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 3, 5]} intensity={2.1} />
      <pointLight position={[-3, -1, 2]} intensity={10} color="#3B82F6" />
      <pointLight position={[3, 2, 1]} intensity={5} color="#22C55E" />
      <Knot />
      <Orbiters />
    </Canvas>
  )
}

