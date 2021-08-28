import { createContext, useContext, FC } from "react";

import * as Bone from "./Bone";
import * as NervousSystem from "./NervousSystem";

const NervousSystemContext = createContext<NervousSystem.NervousSystem>(
  NervousSystem.create()
);

export const NervousSystemProvider = NervousSystemContext.Provider;

export function useNervousSystem(): NervousSystem.NervousSystem {
  return useContext(NervousSystemContext);
}

export function useBone(type: NervousSystem.BoneType): Bone.Bone {
  return useNervousSystem().bones[type];
}

export function connectToNervousSystem<P>(
  Component: FC<P>,
  boneType: NervousSystem.BoneType
): FC<Omit<P, keyof Bone.Bone>> {
  return (props) => {
    const bone = useBone(boneType);

    // @ts-ignore
    return <Component {...props} {...bone} />;
  };
}
