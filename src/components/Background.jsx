import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshWobbleMaterial } from "@react-three/drei";

const Background = () => {
  return (
    <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <Sphere args={[1, 100, 100]} position={[0, 0, -3]}>
        <MeshWobbleMaterial attach="material" color="#d4aaff" speed={2} factor={0.6} />
      </Sphere>
      <OrbitControls />
    </Canvas>
  );
};

export default Background;
