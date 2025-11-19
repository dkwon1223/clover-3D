import { Dispatch, FC, SetStateAction } from "react";
import { Accordion, AccordionWrapper } from "@clover-web-lib-sprout/accordion";
import { Badge } from "../Badge/Badge";
import { Point, moveCamera } from "../../global";
import * as THREE from "three";
import { IconLocationFilled, IconLocationMinus, IconLocationUp } from "@tabler/icons-react";

import "./scene-menu.scss";

type SceneMenuProps = {
  title: string;
  features: string[];
  points: Point[];
  camera: THREE.Camera | null;
  setHovered: Dispatch<SetStateAction<number | null>>;
};

const SceneMenu: FC<SceneMenuProps> = ({ title, features, points, camera, setHovered }) => {

  return (
    <article>
      <AccordionWrapper className="accordionWrapper">
        <Accordion
          className="accordion"
          description="Explore the features of this device"
          title="Features"
        >
          <div className="sceneMenuDirections">
            <span><IconLocationFilled height={'1em'} color="#238801"/> Click features below to navigate</span>
            <span><IconLocationUp height={'1em'} color="#238801" /> Click and drag to rotate</span>
            <span><IconLocationMinus height={'1em'} color="#238801" /> Hover cursor on green points for details</span>
          </div>
          <div className="accordionBody">
            {features.map((feature, idx) => (
              <Badge
                handleClick={() => {
                  moveCamera(points[idx], camera);
                  setHovered(idx);
                }}
              >
                {feature}
              </Badge>
            ))}
          </div>
        </Accordion>
      </AccordionWrapper>
    </article>
  );
};

export default SceneMenu;
