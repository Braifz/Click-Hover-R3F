import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = (props) => {
  const mesh = useRef();
  const [state, setState] = useState(false);
  const [hover, setHover] = useState(false);

  useFrame((state) => {
    mesh.current.rotation.x = mesh.current.rotation.x + 0.01;
    mesh.current.rotation.y = mesh.current.rotation.y + 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={hover ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => setState(!state)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      {state ? (
        <boxBufferGeometry args={[1, 1, 1]} />
      ) : (
        <sphereGeometry args={[1, 6, 6]} />
      )}
      <meshStandardMaterial color={state ? "#82FF63" : "#D90FF8"} />
    </mesh>
  );
};

export default Box;
