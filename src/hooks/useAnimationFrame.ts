import { useEffect } from "react";

function useAnimationFrame(onFrame: (time: number) => void): void {
  useEffect(() => {
    let animationFrame: number;

    (function update(time: number) {
      onFrame(time);

      animationFrame = requestAnimationFrame(update);
    })(0);

    return () => cancelAnimationFrame(animationFrame);
  }, [onFrame]);
}

export default useAnimationFrame;
