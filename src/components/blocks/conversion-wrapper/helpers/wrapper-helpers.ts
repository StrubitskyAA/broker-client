import { preferencesStorageType } from "../../../../ts-types";

import { userPreferenciesStorageKey } from "../../../../constants/general-constants";

import { getFromStorage } from "../../conversion-result/helpers";

export const getIndexFromStorage = (
  name: "indexFrom" | "indexTo",
  defaultValue: number
) => {
  const preferences = getFromStorage(userPreferenciesStorageKey);

  return preferences
    ? (preferences as preferencesStorageType)[name]
    : defaultValue;
};
