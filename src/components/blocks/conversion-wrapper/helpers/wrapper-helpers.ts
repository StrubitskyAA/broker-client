import { preferencesStorageType } from "../../../../ts-types";

import { userPreferenciesStorageKey } from "../../../../constants/general-constants";

import { getFromStorage } from "../../conversion-result/helpers";

export const getCodeFromStorage = (
  name: "codeFrom" | "codeTo" | "amount",
  defaultValue: string
) => {
  const preferences = getFromStorage(userPreferenciesStorageKey);

  return (preferences as preferencesStorageType)?.[name] || defaultValue;
};
