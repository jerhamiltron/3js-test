import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Box = (props) => {
    const texture = useLoader(TextureLoader, '/images/AmTrim-Reg-medium.png');

  return (
    <mesh {...props} receiveShadow={true} castShadow>
        <boxBufferGeometry />
        <meshPhysicalMaterial map={texture} color='#ffffff' />
    </mesh>
  )
}

export default Box