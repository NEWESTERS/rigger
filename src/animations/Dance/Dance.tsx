import { FC, useCallback, useState } from "react";
import { compose } from "ramda";

import Rig from "../../components/Rig";
import { NervousSystem, NervousSystemProvider } from "../../NervousSystem";
import { useAnimationFrame } from "../../hooks";

export interface DanceProps {
  dance: (
    time: number
  ) => (ns: NervousSystem.NervousSystem) => NervousSystem.NervousSystem;
}

const Dance: FC<DanceProps> = (props) => {
  const { dance } = props;

  const [ns, setNs] = useState(NervousSystem.create());

  const update = useCallback(compose(setNs, dance), [dance]);

  useAnimationFrame(update);

  return (
    <NervousSystemProvider value={ns}>
      <Rig />
    </NervousSystemProvider>
  );
};

export default Dance;
