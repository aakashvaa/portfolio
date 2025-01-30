import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {
    Canvas,
    extend,
    useFrame,
    useLoader,
    useThree,
} from 'react-three-fiber'
import circleImg from '../assets/circle.png'
import { Suspense, useCallback, useMemo, useRef } from 'react'

extend({ OrbitControls })

function CameraControls() {
    const {
        camera,
        gl: { domElement },
    } = useThree()

    const controlsRef = useRef()
    useFrame(() => controlsRef.current.update())

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
    const imgTex = useLoader(THREE.TextureLoader, circleImg)
    const bufferRef = useRef()

    let t = 0
    let f = 0.0035
    let a = 0.5
    const graph = useCallback(
        (x, z) => Math.sin(f * (x ** 2 + z ** 2 + t)) * a,
        [t, f, a]
    )

    const count = 200
    const sep = 0.6
    let positions = useMemo(() => {
        const positions = []

        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = xi + sep * (xi - count / 3)
                let z = xi + sep * (zi - count / 3)
                let y = graph(x, z)
                positions.push(x, y, z)
            }
        }

        return new Float32Array(positions)
    }, [count, sep, graph])

    const materialRef = useRef()

    useFrame(({ clock }) => {
        t += 10

        const positions = bufferRef.current.array
        const material = materialRef.current

        let i = 0
        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count)
                let z = sep * (zi - count)

                positions[i + 1] = graph(x, z)

                if (material) {
                    // Add blinking effect by modifying opacity based on time
                    const blinkingOpacity =
                        Math.sin(clock.elapsedTime * 5) * 0.5 + 0.5
                    console.log(blinkingOpacity)
                    material.opacity = blinkingOpacity
                }
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
                    attachObject={['attributes', 'position']}
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
            ></pointsMaterial>
        </points>
    )
}

const AnimationCanvas = () => {
    return (
        <Canvas
            resize={{ scroll: false }}
            colorManagement={false}
            camera={{ position: [95, 80, 70], fov: 5 }}
        >
            <Suspense fallback={null}>
                <Points />
            </Suspense>
            <CameraControls />
        </Canvas>
    )
}

export default AnimationCanvas
