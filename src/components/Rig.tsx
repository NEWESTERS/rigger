import { FC } from "react";

import { connectToNervousSystem } from "../NervousSystem";
import Body from "./Body";
import Head from "./Head";
import Shoulder from "./Hand/Shoulder";
import Elbow from "./Hand/Elbow";
import Wrist from "./Hand/Wrist";
import Hip from "./Leg/Hip";
import Knee from "./Leg/Knee";
import Ankle from "./Leg/Ankle";

interface RigProps {}

const ConnectedBody = connectToNervousSystem(Body, "body");

const ConnectedHead = connectToNervousSystem(Head, "head");

const ConnectedLeftShoulder = connectToNervousSystem(Shoulder, "leftShoulder");

const ConnectedLeftElbow = connectToNervousSystem(Elbow, "leftElbow");

const ConnectedLeftWrist = connectToNervousSystem(Wrist, "leftWrist");

const ConnectedRightShoulder = connectToNervousSystem(
  Shoulder,
  "rightShoulder"
);

const ConnectedRightElbow = connectToNervousSystem(Elbow, "rightElbow");

const ConnectedRightWrist = connectToNervousSystem(Wrist, "rightWrist");

const ConnectedLeftHip = connectToNervousSystem(Hip, "leftHip");

const ConnectedLeftKnee = connectToNervousSystem(Knee, "leftKnee");

const ConnectedLeftAnkle = connectToNervousSystem(Ankle, "leftAnkle");

const ConnectedRightHip = connectToNervousSystem(Hip, "rightHip");

const ConnectedRightKnee = connectToNervousSystem(Knee, "rightKnee");

const ConnectedRightAnkle = connectToNervousSystem(Ankle, "rightAnkle");

const Rig: FC<RigProps> = () => {
  return (
    <ConnectedBody
      head={<ConnectedHead />}
      leftHand={
        <ConnectedLeftShoulder
          elbow={<ConnectedLeftElbow wrist={<ConnectedLeftWrist />} />}
        />
      }
      rightHand={
        <ConnectedRightShoulder
          elbow={<ConnectedRightElbow wrist={<ConnectedRightWrist />} />}
        />
      }
      leftLeg={
        <ConnectedLeftHip
          knee={<ConnectedLeftKnee ankle={<ConnectedLeftAnkle />} />}
        />
      }
      rightLeg={
        <ConnectedRightHip
          knee={<ConnectedRightKnee ankle={<ConnectedRightAnkle />} />}
        />
      }
    />
  );
};

export default Rig;
