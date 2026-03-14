'use client'

import * as THREE from 'three'
import { Canvas, useFrame, useLoader, useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Suspense, useCallback, useMemo, useRef } from 'react'

extend({ OrbitControls })

function CameraControls() {
    const {
        camera,
        gl: { domElement },
    } = useThree()

    const controlsRef = useRef()
    useFrame(() => controlsRef.current?.update())

    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, domElement]}
            autoRotate={false}
            enableZoom={false}
        />
    )
}

function Points() {
    const imgTex = useLoader(THREE.TextureLoader, '/circle.png')
    const bufferRef = useRef()

    let t = 0
    const f = 0.0035
    const a = 0.5

    const graph = useCallback(
        (x, z) => Math.sin(f * (x ** 2 + z ** 2 + t)) * a,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [t, f, a]
    )

    const count = 200
    const sep = 0.6

    const positions = useMemo(() => {
        const pos = []
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                const x = xi + sep * (xi - count / 3)
                const z = xi + sep * (zi - count / 3)
                const y = graph(x, z)
                pos.push(x, y, z)
            }
        }
        return new Float32Array(pos)
    }, [count, sep, graph])

    useFrame(() => {
        t += 10

        const posArray = bufferRef.current.array

        let i = 0
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                const x = sep * (xi - count)
                const z = sep * (zi - count)
                posArray[i + 1] = graph(x, z)
                i += 3
            }
        }

        bufferRef.current.needsUpdate = true
    })

    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    ref={bufferRef}
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                attach="material"
                map={imgTex}
                color={0xfff3fe}
                size={0.6}
                sizeAttenuation
                transparent={true}
                alphaTest={0.4}
            />
        </points>
    )
}

export default function AnimationCanvas() {
    return (
        <Canvas
            resize={{ scroll: false }}
            camera={{ position: [95, 80, 70], fov: 5 }}
        >
            <Suspense fallback={null}>
                <Points />
            </Suspense>
            <CameraControls />
        </Canvas>
    )
}
