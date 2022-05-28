import { OrbitControls } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import ThreeScene from "./components/ThreeScene";
import Box from "./components/Box";
import Header from "./components/Header";
import "./App.css";

extend({ OrbitControls });

const App = () => {
  return (
    <div>
      <Header />
      <div className="scene-container">
        <ThreeScene>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} />
          <pointLight position={[-10, -10, -10]} />
          <OrbitControls />
          <Box position={[1, 0, 0]} />
          <Box position={[-2, 0, 0]} />
        </ThreeScene>
      </div>
    </div>
  );
};

export default App;
