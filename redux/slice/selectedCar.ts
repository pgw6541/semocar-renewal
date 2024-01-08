import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from '@/types/types';

interface SelectedCarState {
  value: Car | null
}

const initialState: SelectedCarState = {
  value: null,
}

export const selectedCarSlice = createSlice({
  name: 'selectedCar',
  initialState,
  reducers: {
    // 차량 선택 액션
    selectCar: (state, action: PayloadAction<Car>) => {
      state.value = action.payload;
    },
    // 차량 선택 해제 액션
    deselectCar: (state) => {
      state.value = null;
    },
  },
});