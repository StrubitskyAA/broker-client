import { useEffect } from "react";

import { setConnectionStatus } from "../store/reducers/connection-reducer";
import { connectionSelector } from "../store/selectors";

import { useAppDispatch, useAppSelector } from "./redux-hooks";

export default function useConnectionStatus() {
  const { hasConnection } = useAppSelector(connectionSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      if (navigator.onLine !== hasConnection) {
        dispatch(setConnectionStatus(navigator.onLine));
      }
    }, 1000);

    return () => {
      clearInterval(timeIntervalId);
    };
  }, [hasConnection, dispatch]);
}
