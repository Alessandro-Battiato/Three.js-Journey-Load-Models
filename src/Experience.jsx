import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Model from "./Model";
import Placeholder from "./Placeholder";
import Hamburger from "./Hamburger";

export default function Experience() {
    return (
        <>
            <Perf position="top-left" />
            <OrbitControls makeDefault />
            <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
            <mesh
                receiveShadow
                position-y={-1}
                rotation-x={-Math.PI * 0.5}
                scale={10}
            >
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>

            <Suspense
                fallback={
                    <Placeholder
                        positionY={0.5}
                        scale={[2, 3, 2]}
                        args={[1, 1, 1, 2, 2, 2]}
                        wireframe
                        color="red"
                    />
                }
            >
                <Hamburger scale={0.35} />
            </Suspense>
        </>
    );
}
