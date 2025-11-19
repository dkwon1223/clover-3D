import * as THREE from "three";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { BlendFunction } from "postprocessing";
import { useState, useEffect } from "react";

import "./scene.css";

// this component is used to find the cameras coordinates
// only use for this purpouse
function CameraLogger() {
  const { camera } = useThree();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const pos = camera.position;
      console.log(
        `Camera Position: x: ${pos.x.toFixed(3)}, y: ${pos.y.toFixed(
          3
        )}, z: ${pos.z.toFixed(3)}`
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [camera]);

  return null;
}

// This component is used to find coordanates on a mesh,
// only use for this purpouse
function ClickableMesh() {
  const { camera } = useThree();
  const gltf = useLoader(GLTFLoader, "/assets/go.glb");
  const [points, setPoints] = useState([]);
  const raycaster = new THREE.Raycaster();

  const handleClick = (event) => {
    if (!gltf || !gltf.scene) return;

    const mouse = new THREE.Vector2(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(gltf.scene, true);

    if (intersects.length > 0) {
      const point = intersects[0].point;

      console.log("Clicked point coordinates:", point.x, point.y, point.z);

      setPoints((prev) => [...prev, point]);
    }
  };

  return (
    <>
      <primitive
        object={gltf.scene}
        onClick={handleClick}
        scale={10}
        castShadow
        receiveShadow
      />
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="red" />
        </mesh>
      ))}
    </>
  );
}

export default function Scene() {
  return (
    <div id="canvas-container">
      <Canvas
        shadows
        gl={{ alpha: true }}
        style={{ background: "transparent" }}
        camera={{ position: [0, 2, 5], fov: 50 }}
        onCreated={(state) => {
          const renderer = state.gl;
          renderer.outputColorSpace = THREE.SRGBColorSpace;
          renderer.toneMapping = THREE.ACESFilmicToneMapping;
          renderer.toneMappingExposure = 1;
        }}
      >
        <CameraLogger />

        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <ClickableMesh />
        <OrbitControls enableDamping={true} minDistance={1.5} maxDistance={3} />
        <Environment
          files="/assets/studio_small_08_4k.exr"
          environmentIntensity={1}
        />
        <EffectComposer>
          <SSAO
            blendFunction={BlendFunction.MULTIPLY}
            samples={30}
            rings={4}
            distanceThreshold={1.0}
            distanceFalloff={0.0}
            rangeThreshold={0.5}
            rangeFalloff={0.1}
            luminanceInfluence={0.9}
            radius={20}
            bias={0.5}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
