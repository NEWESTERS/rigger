import { Meta } from "@storybook/react/types-6-0";
import { useState } from "react";

import DegreeInput, { DegreeInputProps } from "./DegreeInput";

export default {
  title: "Rig/NSForm/DegreeInput",
  component: DegreeInput,
} as Meta<DegreeInputProps>;

export const Template = () => {
  const [degree, setDegree] = useState(0);

  return (
    <DegreeInput label="Degree" value={degree} onValueChange={setDegree} />
  );
};
