import { Meta } from "@storybook/react/types-6-0";
import { useState } from "react";
import { NervousSystem } from "../../NervousSystem";

import NSForm from "./NSForm";

export default {
  title: "Rig/NSForm",
  component: NSForm,
} as Meta;

export const Template = () => {
  const [ns, setNs] = useState(NervousSystem.create());

  return <NSForm style={{ width: 300 }} value={ns} onValueChange={setNs} />;
};
