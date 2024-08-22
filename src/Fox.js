import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";
import { useControls } from "leva";

const Fox = () => {
    const fox = useGLTF("./Fox/glTF/Fox.gltf");
    const animations = useAnimations(fox.animations, fox.scene);

    const { animationName } = useControls({
        animationName: { options: animations.names },
    });

    useEffect(() => {
        // Sometimes the actions object might be empty on initial renders, thus we use the animations inside a use effect
        const action = animations.actions[animationName];
        action.reset().fadeIn(0.5).play(); // fade in takes a number to know how long the animation has to take to fade in

        return () => {
            action.fadeOut(0.5);
        };
    }, [animationName]);

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
