import { TextField } from "@mui/material";
import { ChangeEvent, FC, KeyboardEvent, useCallback } from "react";
import { NumericFormat } from "react-number-format";

const NumberInput: FC<{
  value: string;
  setValue: (value: string) => void;
}> = ({ value, setValue }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const keyDownHandler = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === ",") {
        const newValue = `${value}.`;
        setValue(newValue);
        const len = newValue.length;
        setTimeout(
          () => (event.target as HTMLInputElement).setSelectionRange(len, len),
          10
        );
      }
    },
    [setValue, value]
  );

  return (
    <NumericFormat
      value={value}
      onKeyDown={keyDownHandler}
      onChange={handleChange}
      customInput={TextField}
      thousandSeparator=" "
      valueIsNumericString
      variant="standard"
    />
  );
};

export default NumberInput;
