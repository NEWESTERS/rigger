import * as Vector from "./Vector";

export interface Point {
  x: number;
  y: number;
}

export type Dimension = keyof Point;

export type Update = (point: Point) => Point;

export function create(x = 0, y = 0): Point {
  return {
    x,
    y,
  };
}

export function moveTo(dimension: Dimension, value: number): Update {
  return (point) => ({
    ...point,
    [dimension]: value,
  });
}

export function moveBy(dimension: Dimension, diff: number): Update {
  return (point) => ({
    ...point,
    [dimension]: point[dimension] + diff,
  });
}

export function move(vector: Vector.Vector): Update {
  return (point) => ({
    x: point.x + vector.x,
    y: point.y + vector.y,
  });
}
