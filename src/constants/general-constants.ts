export const breakPointCondition = "(min-width:750px)";

export const currencyDataStorageKey = "currency_rates";
export const userPreferenciesStorageKey = "userPreferences";

export const selectedClassName = "selected";
export const hoveredClassName = "hovered";

export const dataAttributeName = "data-id";
export const keyboardReactions: {
  [key: string]: (index: number, length: number) => number | null;
} = {
  Enter: () => null,
  ArrowUp: (index) => (index === 0 ? index : index - 1),
  ArrowDown: (index, length) => (index === length - 1 ? index : index + 1),
};
