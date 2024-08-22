import React from "react";
import { Clone, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { DRACOLoader } from "three/examples/jsm/Addons.js";
import { useLoader } from "@react-three/fiber";

const Model = () => {
    {
        /*
        const model = useLoader(
            GLTFLoader,
            // files in the public folder are available at the first level like this
            "./hamburger.glb", // in order to test the lazy loading model, we need to use the helmet instead of the burger because the burger loads way too fast, thanks also to the draco loader
            (loader) => {
                const dracoLoader = new DRACOLoader();
                dracoLoader.setDecoderPath("./draco/"); // only provide the folder
                loader.setDRACOLoader(dracoLoader);
            }
        );
    */
    }

    const model = useGLTF("./hamburger-draco.glb"); // this is the easiest and most efficient way to load models, the previous one was the "behind the scenes"

    {
        /*To load models, you need to use the primitive tag*/
        /*When you wnat to load more models, you use the Clone tag instead of the primitive*/
    }

    return (
        <>
            <Clone object={model.scene} scale={0.35} position-x={-4} />
            <Clone object={model.scene} scale={0.35} position-x={0} />
            <Clone object={model.scene} scale={0.35} position-x={4} />
        </>
    );
};

useGLTF.preload("./hamburger-draco.glb"); // this is used for performance reasons, models will be added to the scene only when the user "sees" them, it's important though to preload using the same path and preload the same file

export default Model;
