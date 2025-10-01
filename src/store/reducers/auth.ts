import { AuthState } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<{ user: AuthState['user']; token: string }>) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    signOut(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
    updateUser(state, action: PayloadAction<{ user: AuthState['user'] }>) {
      state.user = action.payload.user;
    }
  }
});

export default authSlice.reducer;

export const { signIn, signOut, updateUser } = authSlice.actions;
