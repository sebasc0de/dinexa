import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, Dispatch } from "../../store/index";

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => Dispatch = useDispatch;
