import _ from "lodash";

import { currencyInfoType, preferencesStorageType } from "../../../../ts-types";

import { userPreferenciesStorageKey } from "../../../../constants/general-constants";

import { getFromStorage } from "../../conversion-result/helpers";

export const getIndexFromStorage = (
  name: "codeFrom" | "codeTo",
  currencyList: currencyInfoType[],
  defaultValue: string
) => {
  const preferences = getFromStorage(userPreferenciesStorageKey);

  return _.findIndex(
    currencyList,
    (listInfo) =>
      listInfo.code ===
      ((preferences as preferencesStorageType)[name] || defaultValue)
  ) || name === "codeFrom"
    ? 0
    : 1;
};
