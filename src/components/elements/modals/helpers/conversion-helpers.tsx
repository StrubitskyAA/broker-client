import _ from "lodash";

import { currencyInfoType } from "../../../../ts-types";

export const getCurrencyIndexAdapter = (
  filteredList: currencyInfoType[],
  currencyList: currencyInfoType[],
  currencyIndex: number,
  isInversion?: boolean
): number => {
  const code = (isInversion ? currencyList : filteredList)[currencyIndex]?.code;

  return code
    ? _.findIndex(
        isInversion ? filteredList : currencyList,
        (currencyInfo) => currencyInfo.code === code
      )
    : -1;
};
