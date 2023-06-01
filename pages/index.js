import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Floor from "@/components/Floor";
import styles from "@/styles/Home.module.css";
import Box from "@/components/Box";
import LightBulb from "@/components/LightBulb";
import Controls from "@/components/OrbitControls";
import Draggable from "@/components/Draggable";

export default function Home() {
  return (
    <div className={styles.scene}>
      <Canvas
        shadows
        className={styles.canvas}
        camera={{ position: [-6, 7, 7] }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 3, 0]} />
        <Draggable>
          <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
          </Suspense>
        </Draggable>
        <Controls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
