import * as THREE from "three";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import {
  CLOVER_FLEX,
  CLOVER_GO,
  Point,
  DeviceType,
  meshPoints,
  moveCamera,
} from "../../global";
import { motion, AnimatePresence } from "framer-motion";

import "./scene.scss";
import SceneMenu from "../SceneMenu/SceneMenu";
import { useState, useEffect, useCallback } from "react";

type SceneProps = {
  deviceType: DeviceType;
};

interface ModelProps {
  deviceType: DeviceType;
}

const Model = ({ deviceType }: ModelProps) => {
  const gltf = useLoader(
    GLTFLoader,
    `/assets/${deviceType === DeviceType.GO ? "go" : "flex"}.glb`
  );
  return <primitive object={gltf.scene} scale={10} castShadow receiveShadow />;
};

function CameraProvider({
  onCameraReady,
}: {
  onCameraReady: (camera: THREE.Camera) => void;
}) {
  const { camera } = useThree();
  useEffect(() => {
    onCameraReady(camera);
  }, [camera, onCameraReady]);

  return null;
}

export default function Scene(props: SceneProps) {
  const { deviceType } = props;
  const points: Point[] = meshPoints(deviceType);

  const [camera, setCamera] = useState<THREE.Camera | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleCameraReady = useCallback((cam: THREE.Camera) => {
    setCamera(cam);
  }, []);

  return (
    <div id="canvas-container">
      <SceneMenu
        title={
          deviceType === DeviceType.FLEX ? CLOVER_FLEX.title : CLOVER_GO.title
        }
        features={
          deviceType === DeviceType.FLEX
            ? CLOVER_FLEX.features
            : CLOVER_GO.features
        }
        points={points}
        camera={camera}
        setHovered={setHovered}
      />

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
        <CameraProvider onCameraReady={handleCameraReady} />

        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={2} castShadow />

        <Model deviceType={deviceType} />

        <OrbitControls
          enableDamping
          minDistance={2.5}
          maxDistance={3.5}
          enablePan={false}
        />

        <Environment
          files="/assets/studio_small_08_4k.exr"
          environmentIntensity={1}
        />

        <EffectComposer>
          <SSAO
            blendFunction={BlendFunction.MULTIPLY}
            samples={30}
            rings={4}
            radius={20}
            bias={0.5}
          />
        </EffectComposer>

        {points.map((point, idx) => (
          <Html
            key={idx}
            position={point.position.toArray() as [number, number, number]}
            occlude
            transform={false}
            className="point-container"
            zIndexRange={[10, 20]}
          >
            <div
              className="hit-area"
              onClick={() => moveCamera(point, camera)}
              onPointerEnter={() => setHovered(idx)}
              onPointerLeave={() => setHovered(null)}
            >
              <div className="point" />

              <motion.span
                className="label"
                initial={{ opacity: 1 }}
                animate={{ opacity: hovered === idx ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {point.element}
              </motion.span>

              <AnimatePresence>
                {hovered === idx && (
                  <motion.div
                    className="popup"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="popup-header">
                      <strong>{point.element}</strong>
                    </div>
                    <div className="popup-body">
                      <p>{point.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Html>
        ))}
      </Canvas>
    </div>
  );
}
