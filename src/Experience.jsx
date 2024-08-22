import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { DRACOLoader } from "three/examples/jsm/Addons.js";

export default function Experience() {
    const model = useLoader(
        GLTFLoader,
        // files in the public folder are available at the first level like this
        "./FlightHelmet/glTF/FlightHelmet.gltf", // in order to test the lazy loading model, we need to use the helmet instead of the burger because the burger loads way too fast, thanks also to the draco loader
        (loader) => {
            const dracoLoader = new DRACOLoader();
            dracoLoader.setDecoderPath("./draco/"); // only provide the folder
            loader.setDRACOLoader(dracoLoader);
        }
    );

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

            {/*To load models, you need to use the primitive tag*/}

            <primitive object={model.scene} scale={5} position-y={-1} />
        </>
    );
}
