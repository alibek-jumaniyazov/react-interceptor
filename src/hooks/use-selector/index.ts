import { useSelector as useReduxSelector } from "react-redux";
import type { RootState } from "@/types/redux";

export function useSelector<T>(callbackFn: (state: RootState) => T) {
    return useReduxSelector(callbackFn);
}
