import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState{
    token: string;
}

export const sessionSlice = createSlice({
    name: "session",
    initialState: { token: "" } as SessionState,
    reducers: {
      login: (state, action: PayloadAction<string>) => {
        state.token = action.payload;
      },
      logout: (state) => {
        state.token = "";
      },
    },
  });

  export const {login, logout } = sessionSlice.actions;
  export default sessionSlice.reducer;