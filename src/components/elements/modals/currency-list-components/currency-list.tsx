import { List } from "@mui/material";
import { FC, RefObject, useCallback, useMemo, useRef, useState } from "react";

import { currencyListType } from "../../../../ts-types";

import {
  onCurrencyListMouseMove,
  onCurrencyListKeyDown,
} from "../helpers/select-curency-item-helpers";
import { useOnce } from "../../../../hooks/useOnce";

import CurrencyItemButton from "../../buttons/currency-item-button";

const CurrencyList: FC<{
  currencyList: currencyListType;
  onSelect: (code: string) => void;
  selectedCode: string;
  modalRef: RefObject<HTMLDivElement | null>;
  scrolContainerRef: RefObject<HTMLDivElement | null>;
}> = ({
  currencyList,
  onSelect,
  selectedCode,
  modalRef,
  scrolContainerRef,
}) => {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const currencyLength = useMemo(
    () => Object.keys(currencyList).length,
    [currencyList]
  );
  const mouseMoveHandler = useCallback(
    (e: MouseEvent) => onCurrencyListMouseMove(setHoveredIndex)(e),
    [setHoveredIndex]
  );
  const setCodeByIndex = useCallback(
    (index: number) => {
      onSelect(Object.keys(currencyList)[index]);
    },
    [onSelect, currencyList]
  );
  const mouseKeyPressHandler = useCallback(
    (e: KeyboardEvent) =>
      onCurrencyListKeyDown({
        setIndex: setHoveredIndex,
        onSelect: setCodeByIndex,
        length: currencyLength,
        scrolContainerRef,
      })(e),
    [setHoveredIndex, currencyLength, scrolContainerRef, setCodeByIndex]
  );

  useOnce(() => {
    (containerRef.current as HTMLUListElement).addEventListener(
      "mousemove",
      mouseMoveHandler
    );
    (modalRef.current as HTMLDivElement).addEventListener(
      "keydown",
      mouseKeyPressHandler
    );
  }, !!containerRef.current);

  return (
    <List ref={containerRef}>
      {Object.values(currencyList).map((currencyInfo, i) => {
        return (
          <CurrencyItemButton
            key={currencyInfo.code}
            currencyInfo={currencyInfo}
            code={currencyInfo.code}
            onClick={onSelect}
            index={i}
            isSelected={selectedCode === currencyInfo.code}
            isHovered={hoveredIndex === i}
          />
        );
      })}
    </List>
  );
};

export default CurrencyList;
