import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunc = () => AppDispatch

//providing custom hooks that further helps in understandabiility as well as improve intellisense.

export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;