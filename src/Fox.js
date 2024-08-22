import { useAnimations, useGLTF } from "@react-three/drei";
import React from "react";

const Fox = () => {
    const fox = useGLTF("./Fox/glTF/Fox.gltf");
    const animations = useAnimations(fox.animations, fox.scene);

    useEffect(() => {
        // Sometimes the actions object might be empty on initial renders, thus we use the animations inside a use effect
        animations.actions.Run.play();

        window.setTimeout(() => {
            animations.actions.Walk.play();
            animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1);
        }, 2000);
    }, []);

    return (
        <primitive
            object={fox.scene}
            scale={0.02}
            position={[-2.5, 0, 2.5]}
            rotation-y={0.3}
        />
    );
};

export default Fox;
