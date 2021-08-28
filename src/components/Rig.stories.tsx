import { Meta } from "@storybook/react/types-6-0";
import { useState } from "react";
import styled from "styled-components";

import { NervousSystem, NervousSystemProvider } from "../NervousSystem";
import { NSForm } from "./NSForm";

import Rig from "./Rig";

export default {
  title: "Rig/Rig",
  component: Rig,
} as Meta;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Template = () => {
  const [ns, setNs] = useState(NervousSystem.create());

  return (
    <Layout>
      <NSForm style={{ width: 300 }} value={ns} onValueChange={setNs} />

      <NervousSystemProvider value={ns}>
        <div style={{ padding: 200 }}>
          <Rig />
        </div>
      </NervousSystemProvider>
    </Layout>
  );
};
