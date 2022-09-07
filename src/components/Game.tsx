import { Canvas } from "@react-three/fiber";

export const Game = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry></boxGeometry>
        <meshStandardMaterial></meshStandardMaterial>
      </mesh>
    </Canvas>
  );
};
