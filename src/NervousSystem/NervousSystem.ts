import { Point } from ".";
import * as Bone from "./Bone";
import * as Transformable from "./Transformable";

export interface NervousSystem {
  bones: {
    body: Bone.Bone;
    head: Bone.Bone;
    /** Hands */
    leftShoulder: Bone.Bone;
    leftElbow: Bone.Bone;
    leftWrist: Bone.Bone;
    rightShoulder: Bone.Bone;
    rightElbow: Bone.Bone;
    rightWrist: Bone.Bone;
    /** Legs */
    leftHip: Bone.Bone;
    leftKnee: Bone.Bone;
    leftAnkle: Bone.Bone;
    rightHip: Bone.Bone;
    rightKnee: Bone.Bone;
    rightAnkle: Bone.Bone;
  };
}

export type BoneType = keyof NervousSystem["bones"];

export function create(): NervousSystem {
  return {
    bones: {
      body: Bone.create(),
      head: Bone.create(),

      leftShoulder: Bone.create(),
      leftElbow: Bone.create(),
      leftWrist: Bone.create(),
      rightShoulder: Bone.create(),
      rightElbow: Bone.create(),
      rightWrist: Bone.create(),

      leftHip: Bone.create(),
      leftKnee: Bone.create(),
      leftAnkle: Bone.create(),
      rightHip: Bone.create(),
      rightKnee: Bone.create(),
      rightAnkle: Bone.create(),
    },
  };
}

export type Update = (nervousSystem: NervousSystem) => NervousSystem;

export function updateBone(type: BoneType, update: Bone.Update): Update {
  return (ns) => ({
    ...ns,
    bones: {
      ...ns.bones,
      [type]: update(ns.bones[type]),
    },
  });
}

export function rotateBoneTo(type: BoneType, rotation: number): Update {
  return updateBone(type, Transformable.rotateTo(rotation));
}

export function rotateBoneBy(type: BoneType, rotationBy: number): Update {
  return updateBone(type, Transformable.rotateBy(rotationBy));
}

export function moveTo(dimension: Point.Dimension, value: number): Update {
  return updateBone("body", Transformable.moveTo(dimension, value));
}
