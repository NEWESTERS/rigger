import { CSSProperties } from "react";

import * as Transformable from "./Transformable";

export interface Bone extends Transformable.Transformable {}

export type Update = (bone: Bone) => Bone;

export function create(): Bone {
  return Transformable.create();
}

export function toStyle(bone: Bone): CSSProperties {
  return Transformable.toStyle(bone);
}
