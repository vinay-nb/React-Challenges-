import { useRef } from "react";

const useCustomEffect = (effect, deps) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  // first render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanUp = effect();
    return () => {
      if (cleanUp && typeof cleanUp === "function") {
        cleanUp();
      }
    };
  }

  // deps changes & no dependency arr
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (depsChanged) {
    const cleanUp = effect();
    if (cleanUp && typeof cleanUp === "function" && deps) {
      cleanUp();
    }
  }

  // cleanup

  prevDeps.current = deps || [];
};

export default useCustomEffect;
