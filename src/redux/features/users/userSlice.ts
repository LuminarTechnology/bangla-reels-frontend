import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./userTypes";

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  role: "user",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return { ...state, ...action.payload };
    },
    clearUser() {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
