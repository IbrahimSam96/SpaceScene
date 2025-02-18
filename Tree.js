/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
export function Tree(props) {
  const { nodes, materials } = useGLTF('/Models/Tree/tree.gltf')
  return (
    <group {...props} dispose={null} scale={0.50} position={[-6,0,4]}>
      <mesh geometry={nodes.jacaranda_tree_trunk.geometry} material={materials.jacaranda_tree_trunk} />
      <mesh geometry={nodes.jacaranda_tree_branches.geometry} material={materials.jacaranda_tree_branches} />
      <mesh geometry={nodes.Plane5958.geometry} material={materials.jacaranda_tree_branches} />
      <mesh geometry={nodes.Plane5958_1.geometry} material={materials.jacaranda_tree_leaves} />
    </group>
  )
}

useGLTF.preload('/Models/Tree/tree.gltf')
