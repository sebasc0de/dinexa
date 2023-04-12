import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, Dispatch } from "../../store/index";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => Dispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
