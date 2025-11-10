import { InputBase } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { NumericFormat } from "react-number-format";

import { numberInputStyles } from "../../../styles/elements-styles";

const NumberInput: FC<{
  value: string;
  setValue: (value: string) => void;
}> = ({ value, setValue }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <NumericFormat
      value={value}
      allowedDecimalSeparators={[",", "."]}
      onChange={handleChange}
      customInput={InputBase}
      thousandSeparator=" "
      valueIsNumericString
      sx={{ ...numberInputStyles }}
    />
  );
};

export default NumberInput;
