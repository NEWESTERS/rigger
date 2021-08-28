import { FC, CSSProperties, ChangeEventHandler } from "react";

import { NervousSystem } from "../../NervousSystem";
import { FIELD_SETS } from "./fieldGroups";
import { DegreeInput } from "./DegreeInput";
import * as Styles from "./NSForm.styles";

export interface NSFormProps {
  style?: CSSProperties;
  value: NervousSystem.NervousSystem;
  onValueChange: (value: NervousSystem.NervousSystem) => void;
}

const NSForm: FC<NSFormProps> = (props) => {
  const { style, value, onValueChange } = props;
  const { bones } = value;

  const handleRotationChange = (boneType: NervousSystem.BoneType) => (
    inputValue: number
  ) => {
    onValueChange(NervousSystem.rotateBoneTo(boneType, inputValue)(value));
  };

  return (
    <Styles.Form style={style} onSubmit={(e) => e.preventDefault()}>
      <Styles.Fieldset>
        <Styles.Legend>Body</Styles.Legend>

        <DegreeInput
          label="Rotation"
          value={bones.body.rotation}
          onValueChange={handleRotationChange("body")}
        />
      </Styles.Fieldset>

      <Styles.Fieldset>
        <Styles.Legend>Head</Styles.Legend>

        <DegreeInput
          label="Rotation"
          value={bones.head.rotation}
          onValueChange={handleRotationChange("head")}
        />
      </Styles.Fieldset>

      {FIELD_SETS.map(({ legend, inputs }) => (
        <Styles.Fieldset key={legend}>
          <Styles.Legend>{legend}</Styles.Legend>

          {inputs.map(({ label, boneType }) => (
            <DegreeInput
              key={boneType}
              label={`${label} rotation`}
              value={bones[boneType].rotation}
              onValueChange={handleRotationChange(boneType)}
            />
          ))}
        </Styles.Fieldset>
      ))}
    </Styles.Form>
  );
};

export default NSForm;
