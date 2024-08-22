import React from "react";

const Placeholder = ({ positionY, scale, args, wireframe, color }) => {
    return (
        <mesh position-y={positionY} scale={scale}>
            <boxGeometry args={args} />
            <meshBasicMaterial wireframe={wireframe} color={color} />
        </mesh>
    );
};

export default Placeholder;
