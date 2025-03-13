"use client";


import { useAnimations, useGLTF } from '@react-three/drei';

useGLTF("/t_shirt.glb")

export default function Cube(){
    const {nodes, animations, scene} = useGLTF("/t_shirt.glb");
    const { actions } = useAnimations(animations, scene)
    return (
        <group>
            <primitive object={scene}/>
        </group>
    )
}