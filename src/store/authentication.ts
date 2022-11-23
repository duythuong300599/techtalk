import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';

export interface AuthenticationState {
  isLogin: boolean;
}

export const authenticationSlice = createSlice<AuthenticationState, SliceCaseReducers<AuthenticationState>>({
  name: 'authentication',
  initialState: {
    isLogin: false,
  },
  reducers:{
    setIsLogin: (state: AuthenticationState, action: PayloadAction<boolean>) => {
      const isLogin = action.payload;
      return{
        ...state,
        isLogin
      }
    }
  }
});

export const { setIsLogin } = authenticationSlice.actions;

export default authenticationSlice.reducer;
