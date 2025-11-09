import { List } from "@mui/material";
import { FC, RefObject, useCallback, useRef, useState } from "react";

import { currencyInfoType } from "../../../../ts-types";

import {
  onCurrencyListMouseMove,
  onCurrencyListKeyDown,
} from "../helpers/select-curency-item-helpers";
import { useOnce } from "../../../../hooks/useOnce";

import CurrencyItemButton from "../../buttons/currency-item-button";

const CurrencyList: FC<{
  currencyList: currencyInfoType[];
  onSelect: (index: number) => void;
  selectedIndex: number;
  modalRef: RefObject<HTMLDivElement | null>;
}> = ({ currencyList, onSelect, selectedIndex, modalRef }) => {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const mouseMoveHandler = useCallback(
    (e: MouseEvent) => onCurrencyListMouseMove(setHoveredIndex)(e),
    [setHoveredIndex]
  );
  const mouseKeyPressHandler = useCallback(
    (e: KeyboardEvent) =>
      onCurrencyListKeyDown(setHoveredIndex, onSelect, currencyList.length)(e),
    [setHoveredIndex, onSelect, currencyList.length]
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
      {currencyList.map((currencyInfo, i) => (
        <CurrencyItemButton
          key={currencyInfo.code}
          currencyInfo={currencyList[i]}
          index={i}
          onClick={onSelect}
          isSelected={selectedIndex === i}
          isHovered={hoveredIndex === i}
        />
      ))}
    </List>
  );
};

export default CurrencyList;
