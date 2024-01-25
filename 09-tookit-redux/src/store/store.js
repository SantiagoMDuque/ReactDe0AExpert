import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counterSlices';
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
})