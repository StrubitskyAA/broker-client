import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import moment from "moment";
import { AnyAction } from "redux-saga";

import {
  checkConnectionAction,
  fetchCurrencyRatesAction,
  setConnectionAction,
  setCurrencyRatesAction,
  setCurrencyRatesFetchingStatusAction,
  setInfoMessageAction,
} from "../actions/redux-actions";
import { getConnectionStatusSelector } from "../selectors";

import { dateStorageType } from "../../ts-types";

import {
  connectionActionTypesEnum,
  currencyRatesActionTypesEnum,
} from "../constants/redux-constants";
import { currencyDataStorageKey } from "../../constants/general-constants";
import { alertColorsEnum } from "../../constants/colors";
import {
  delayBeetwinCalls,
  updateConnectionStatusInterval,
  updateRatesInterval,
} from "../../constants/time-constants";

import { currencyRatesApi } from "../../helpers/api";
import {
  getFromStorage,
  setToStorage,
} from "../../components/blocks/conversion-result/helpers";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchRates(action: AnyAction) {
  try {
    yield delay(delayBeetwinCalls);
    if (action.payload) {
      yield put(setCurrencyRatesFetchingStatusAction(true));
    }

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
    yield delay(updateRatesInterval);
    yield put(fetchCurrencyRatesAction());
  }
}

function* checkConnectionSaga() {
  try {
    const hasConnection: boolean = yield select(getConnectionStatusSelector);

    if (hasConnection !== navigator.onLine) {
      yield put(setConnectionAction(navigator.onLine));
    }
  } catch (e) {
    yield put(setConnectionAction(false));
  } finally {
    yield delay(updateConnectionStatusInterval);

    yield put(checkConnectionAction());
  }
}

function* ratesSaga() {
  yield takeLatest(currencyRatesActionTypesEnum.fetchCurrencyRates, fetchRates);
  yield takeLatest(
    connectionActionTypesEnum.checkConnection,
    checkConnectionSaga
  );
}

export default ratesSaga;
