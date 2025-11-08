import { call, delay, put, takeLatest } from "redux-saga/effects";
import moment from "moment";
import { AnyAction } from "redux-saga";

import {
  setCurrencyRatesAction,
  setCurrencyRatesFetchingStatusAction,
  setInfoMessageAction,
} from "../actions/redux-actions";

import { dateStorageType } from "../../ts-types";

import { currencyRatesActionTypesEnum } from "../constants/redux-constants";
import { currencyDataStorageKey } from "../../constants/general-constants";
import { alertColorsEnum } from "../../constants/colors";

import { currencyRatesApi } from "../../helpers/api";
import {
  getFromStorage,
  setToStorage,
} from "../../components/blocks/conversion-result/helpers";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchRates(action: AnyAction) {
  try {
    yield delay(150);

    //@ts-ignore-next-line
    const result = yield call(currencyRatesApi.getCurrencyRates);
    const dateUTC = moment.utc().format();
    yield put(setCurrencyRatesAction(result.rates, dateUTC));
    setToStorage(currencyDataStorageKey, {
      date: dateUTC,
      rates: result.rates,
    });
  } catch (e) {
    const data = getFromStorage(currencyDataStorageKey);
    if (data) {
      yield put(
        setCurrencyRatesAction(
          (data as dateStorageType).rates,
          (data as dateStorageType).date
        )
      );
    }
    if (action.payload) {
      yield put(
        setInfoMessageAction({
          infoText: data
            ? "Attention! The server with the latest data is temporarily unavailable. The data you are using may be out of date."
            : "Occurred while attempting to load data",
          infoType: alertColorsEnum.error,
        })
      );
    }
  } finally {
    yield put(setCurrencyRatesFetchingStatusAction(false));
  }
}

function* ratesSaga() {
  yield takeLatest(currencyRatesActionTypesEnum.fetchCurrencyRates, fetchRates);
}

export default ratesSaga;
