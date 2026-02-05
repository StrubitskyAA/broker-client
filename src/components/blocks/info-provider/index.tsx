import { FC, PropsWithChildren, useState } from "react";
import { IInfo } from "../../../ts-types";
import InfoContext, {
  initialInfoState,
} from "../../../store/context/info-context";
import InfoAlert from "../../elements/info/alert";

const InfoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [info, setInfo] = useState<IInfo>(initialInfoState);

  return (
    <InfoContext value={{ info, setInfo }}>
      <InfoAlert />
      {children}
    </InfoContext>
  );
};

export default InfoProvider;
