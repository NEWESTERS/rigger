import { NervousSystem } from "../../NervousSystem";

interface FieldSetDeclaration {
  legend: string;
  inputs: Array<{
    label: string;
    boneType: NervousSystem.BoneType;
  }>;
}

export const FIELD_SETS: FieldSetDeclaration[] = [
  {
    legend: "Left hand",
    inputs: [
      {
        label: "Left shoulder",
        boneType: "leftShoulder",
      },
      {
        label: "Left elbow",
        boneType: "leftElbow",
      },
      {
        label: "Left wrist",
        boneType: "leftWrist",
      },
    ],
  },
  {
    legend: "Right hand",
    inputs: [
      {
        label: "Right shoulder",
        boneType: "rightShoulder",
      },
      {
        label: "Right elbow",
        boneType: "rightElbow",
      },
      {
        label: "Right wrist",
        boneType: "rightWrist",
      },
    ],
  },
  {
    legend: "Left leg",
    inputs: [
      {
        label: "Left hip",
        boneType: "leftHip",
      },
      {
        label: "Left knee",
        boneType: "leftKnee",
      },
      {
        label: "Left ankle",
        boneType: "leftAnkle",
      },
    ],
  },
  {
    legend: "Right leg",
    inputs: [
      {
        label: "Right hip",
        boneType: "rightHip",
      },
      {
        label: "Right knee",
        boneType: "rightKnee",
      },
      {
        label: "Right ankle",
        boneType: "rightAnkle",
      },
    ],
  },
];
