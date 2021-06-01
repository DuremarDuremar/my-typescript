import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/combine";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
