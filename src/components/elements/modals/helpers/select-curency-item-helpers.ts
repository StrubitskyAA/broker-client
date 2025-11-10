import { Dispatch, RefObject, SetStateAction } from "react";
import _ from "lodash";

import {
  dataAttributeName,
  keyboardReactions,
} from "../../../../constants/general-constants";

const calculateHeightForScrolling = (height?: number) =>
  height ? height / 2 - 2 : 0;

const checkIsListButtonItem = (element: HTMLElement) =>
  element.classList.contains("MuiListItemButton-root");

const findListButton = (event: MouseEvent) => {
  let target = event.target as HTMLElement;

  while (
    target &&
    !checkIsListButtonItem(target) &&
    !target.classList.contains("MuiList-root")
  ) {
    target = target.parentNode as HTMLElement;
  }

  return checkIsListButtonItem(target) ? target : null;
};

export const onCurrencyListMouseMove =
  (setIndex: Dispatch<SetStateAction<number | null>>) =>
  (event: MouseEvent) => {
    const target = findListButton(event);
    setIndex(
      target ? _.toNumber(target.getAttribute(dataAttributeName)) : null
    );
  };

export const onCurrencyListKeyDown =
  ({
    setIndex,
    onSelect,
    length,
    scrolContainerRef,
  }: {
    setIndex: Dispatch<SetStateAction<number | null>>;
    onSelect: (index: number) => void;
    length: number;
    scrolContainerRef: RefObject<HTMLDivElement | null>;
  }) =>
  (e: KeyboardEvent) => {
    if (keyboardReactions[e.key]) {
      e.stopPropagation();
      e.preventDefault();
      setIndex((index) => {
        if (index === null) return index;
        const newIndex = keyboardReactions[e.key](index, length);
        if (newIndex === null) {
          onSelect(index);
        } else if (index !== newIndex) {
          const heightItem = (
            scrolContainerRef.current?.querySelector(
              `[${dataAttributeName}="${index}"]`
            ) as HTMLElement
          )?.offsetHeight;
          scrolContainerRef.current?.scrollBy(
            0,
            calculateHeightForScrolling(heightItem) *
              (index < newIndex ? 1 : -1)
          );
        }
        return newIndex;
      });
    }
  };
