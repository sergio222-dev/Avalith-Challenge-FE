//https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { Rootstate, AppDispatch } from './redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;