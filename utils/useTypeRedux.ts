import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { store } from '@configs/configureStore';

type RootState = ReturnType<typeof store.getState>;
type TypeDispatch = typeof store.dispatch;

export const useTypeDispatch = (): TypeDispatch => useDispatch<TypeDispatch>();
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
