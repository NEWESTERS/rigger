import { Meta, Story } from "@storybook/react/types-6-0";
import { pipe } from "ramda";
import { NervousSystem as NS } from "../../NervousSystem";

import Dance, { DanceProps } from "./Dance";

export default {
  title: "Animations/Dance",
  component: Dance,
  decorators: [(Story) => <div style={{ padding: 150 }}>{Story()}</div>],
} as Meta;

const Template: Story<DanceProps> = (args) => {
  return <Dance {...args} />;
};

const FREQUENCY = 1 / 150;

export const Dance1 = Template.bind({});
Dance1.args = {
  dance: (time) =>
    pipe(
      pipe(
        NS.moveTo("y", Math.cos(time * FREQUENCY * 2) * 25),
        // NS.rotateBoneTo("body", Math.sin(time * FREQUENCY) * 15),
        NS.rotateBoneTo("head", -Math.sin(time * FREQUENCY) * 25)
      ),
      pipe(
        NS.rotateBoneTo(
          "leftShoulder",
          45 + Math.sin(time * FREQUENCY * 2) * 45
        ),
        NS.rotateBoneTo("leftElbow", -45 - Math.sin(time * FREQUENCY * 2) * 45),
        NS.rotateBoneTo(
          "rightShoulder",
          45 + Math.sin(time * FREQUENCY * 2) * 45
        ),
        NS.rotateBoneTo("rightElbow", -45 - Math.sin(time * FREQUENCY * 2) * 45)
      ),
      pipe(
        NS.rotateBoneTo("leftHip", 60 + Math.cos(time * FREQUENCY) * 60),
        NS.rotateBoneTo("leftKnee", -45 - Math.cos(time * FREQUENCY) * 45),
        NS.rotateBoneTo("leftAnkle", -15 - Math.cos(time * FREQUENCY) * 15),

        NS.rotateBoneTo(
          "rightHip",
          60 + Math.cos(time * FREQUENCY + Math.PI) * 60
        ),
        NS.rotateBoneTo(
          "rightKnee",
          -45 - Math.cos(time * FREQUENCY + Math.PI) * 45
        ),
        NS.rotateBoneTo(
          "rightAnkle",
          -15 - Math.cos(time * FREQUENCY + Math.PI) * 15
        )
      )
    ),
};

export const Dance2 = Template.bind({});
Dance2.args = {
  dance: (time) =>
    pipe(
      pipe(
        NS.rotateBoneTo("body", Math.sin(time * FREQUENCY) * 15),
        NS.rotateBoneTo("head", -Math.sin(time * FREQUENCY) * 25)
      ),
      pipe(
        NS.rotateBoneTo("leftShoulder", Math.sin(time * FREQUENCY) * 45 + 30),
        NS.rotateBoneTo("leftElbow", time / Math.PI),
        NS.rotateBoneTo("rightShoulder", Math.sin(time * FREQUENCY) * 45 + 30),
        NS.rotateBoneTo("rightElbow", time / Math.PI)
      ),
      pipe(
        NS.rotateBoneTo("leftHip", -Math.sin(time * FREQUENCY) * 40),
        NS.rotateBoneTo("leftKnee", Math.sin(time * FREQUENCY) * 40),
        NS.rotateBoneTo("leftAnkle", -Math.sin(time * FREQUENCY) * 20),
        NS.rotateBoneTo("rightHip", Math.sin(time * FREQUENCY) * 40),
        NS.rotateBoneTo("rightKnee", -Math.sin(time * FREQUENCY) * 40),
        NS.rotateBoneTo("rightAnkle", Math.sin(time * FREQUENCY) * 20)
      )
    ),
};

export const Dance3 = Template.bind({});
Dance3.args = {
  dance: (time) =>
    pipe(
      pipe(
        NS.moveTo("y", Math.sin(time * FREQUENCY) * 30),
        NS.rotateBoneTo("head", -Math.sin(time * FREQUENCY) * 20)
      ),
      pipe(
        NS.rotateBoneTo("leftShoulder", Math.sin(time * FREQUENCY) * 30 + 30),
        NS.rotateBoneTo(
          "leftElbow",
          -Math.sin(time * FREQUENCY + Math.PI) * 30 - 30
        ),

        NS.rotateBoneTo(
          "rightShoulder",
          Math.sin(time * FREQUENCY + Math.PI) * 45 + 45
        ),
        NS.rotateBoneTo(
          "rightElbow",
          -Math.sin(time * FREQUENCY + Math.PI) * 45 - 45
        )
      ),
      pipe(
        NS.rotateBoneTo("leftHip", Math.sin(time * FREQUENCY) * 30 + 40),
        NS.rotateBoneTo("leftKnee", -Math.sin(time * FREQUENCY) * 45 - 45),
        NS.rotateBoneTo("leftAnkle", Math.sin(time * FREQUENCY) * 15 + 5),
        NS.rotateBoneTo("rightHip", Math.sin(time * FREQUENCY) * 30 + 40),
        NS.rotateBoneTo("rightKnee", -Math.sin(time * FREQUENCY) * 45 - 45),
        NS.rotateBoneTo("rightAnkle", Math.sin(time * FREQUENCY) * 15 + 5)
      )
    ),
};
