"use client";

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

export default function Cube() {
    const groupRef = useRef<Group>(null);

    const { scene } = useGLTF("/t_shirt.glb");

    return (
        <group ref={groupRef}>
            <primitive object={scene} />
        </group>
    );
}
