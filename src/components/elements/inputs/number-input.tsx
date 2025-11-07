import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { NumericFormat } from "react-number-format";

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
      onChange={handleChange}
      customInput={TextField}
      thousandSeparator
      valueIsNumericString
      variant="standard"
    />
  );
};

export default NumberInput;
