import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthResponse } from '../../../shared/responses/auth.response';

export interface UserState {
  isLoading: boolean;
}

const initialState: UserState = {
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<AuthResponse>) => {
      state.isLoading = false;
    },
    createAccountSuccess: (state, action: PayloadAction) => {
      state.isLoading = false;
    },
  },
});

export const { loading, loginSuccess, createAccountSuccess } =
  userSlice.actions;

export default userSlice.reducer;
