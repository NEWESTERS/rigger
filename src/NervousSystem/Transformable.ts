import { CSSProperties } from "react";

import * as Point from "./Point";
import * as Vector from "./Vector";

export interface Transformable {
  rotation: number;
  translation: Point.Point;
}

export function create(initialRotation: number = 0): Transformable {
  return {
    rotation: initialRotation,
    translation: Point.create(),
  };
}

export type Update = (transformable: Transformable) => Transformable;

export function rotateTo(rotation: number): Update {
  return (transformable) => ({
    ...transformable,
    rotation,
  });
}

export function rotateBy(rotationBy: number): Update {
  return (transformable) => ({
    ...transformable,
    rotation: transformable.rotation + rotationBy,
  });
}

export function moveTo(dimension: Point.Dimension, value: number): Update {
  return (transformable) => ({
    ...transformable,
    translation: Point.moveTo(dimension, value)(transformable.translation),
  });
}

export function move(vector: Vector.Vector): Update {
  return (transformable) => ({
    ...transformable,
    translation: Point.move(vector)(transformable.translation),
  });
}

export function toStyle(transformable: Transformable): CSSProperties {
  const {
    rotation,
    translation: { x, y },
  } = transformable;

  return {
    transform: `rotate(${rotation}deg) translate(${x}px, ${y}px)`,
  };
}
