import { ChangeEventHandler, FC } from "react";

import * as Styles from "./DegreeInput.styles";

export interface DegreeInputProps {
  label: string;
  value: number;
  onValueChange: (value: number) => void;
}

const DegreeInput: FC<DegreeInputProps> = (props) => {
  const { label, value, onValueChange } = props;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = parseInt(event.currentTarget.value);

    if (!isNaN(value) && value <= 360 && value >= -360) {
      onValueChange(value);
    }
  };

  return (
    <Styles.Label>
      <Styles.TextWrapper>{label}</Styles.TextWrapper>

      <Styles.Input
        min={-360}
        max={360}
        value={value}
        onChange={handleInputChange}
      />

      <Styles.Slider
        min={-360}
        max={360}
        value={value}
        onChange={handleInputChange}
      />
    </Styles.Label>
  );
};

export default DegreeInput;
