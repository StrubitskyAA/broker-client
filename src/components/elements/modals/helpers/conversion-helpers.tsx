import _ from "lodash";

import { currencyInfoType } from "../../../../type-script";

import currencyList from "../../../../constants/currencies.json";

export const getCurrencyIndexAdapter = (
  filteredList: currencyInfoType[],
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
