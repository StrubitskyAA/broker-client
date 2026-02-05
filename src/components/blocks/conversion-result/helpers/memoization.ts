import { currencyItemButtonPropsType } from "../../../elements/buttons/currency-item-button";

export const checkIsEqualCurrencyButtonProps = (
  prevProps: currencyItemButtonPropsType,
  nextProps: currencyItemButtonPropsType,
) =>
  prevProps.isSelected === nextProps.isSelected &&
  prevProps.isHovered === nextProps.isHovered &&
  prevProps.currencyInfo?.code === nextProps.currencyInfo?.code &&
  prevProps.code === nextProps.code &&
  prevProps.index === nextProps.index;
