import { List } from "@mui/material";
import {
  FC,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { currencyListType } from "../../../../ts-types";

import {
  onCurrencyListMouseMove,
  onCurrencyListKeyDown,
} from "../helpers/select-curency-item-helpers";

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

  useEffect(() => {
    const modalContainer = modalRef.current as HTMLDivElement;

    if (modalContainer) {
      modalContainer.addEventListener("keydown", mouseKeyPressHandler);
    }
    return () => {
      if (modalContainer) {
        modalContainer.removeEventListener("keydown", mouseKeyPressHandler);
      }
    };
  }, [mouseKeyPressHandler, modalRef]);

  useEffect(() => {
    const listContainer = containerRef.current as HTMLUListElement;

    if (listContainer) {
      listContainer.addEventListener("mousemove", mouseMoveHandler);
    }
    return () => {
      if (listContainer) {
        listContainer.removeEventListener("mousemove", mouseMoveHandler);
      }
    };
  }, [mouseMoveHandler, containerRef]);

  return (
    <List ref={containerRef}>
      {Object.values(currencyList).map((currencyInfo, i) => (
        <CurrencyItemButton
          key={currencyInfo.code}
          currencyInfo={currencyInfo}
          code={currencyInfo.code}
          onClick={onSelect}
          index={i}
          isSelected={selectedCode === currencyInfo.code}
          isHovered={hoveredIndex === i}
          sx={{ mb: "15px" }}
        />
      ))}
    </List>
  );
};

export default CurrencyList;
