export interface Vector {
  x: number;
  y: number;
}

export function create(x: number, y: number): Vector {
  return {
    x,
    y,
  };
}
