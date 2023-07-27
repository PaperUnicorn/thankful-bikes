import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { access } from "fs";

interface UserDetailsState {
  username: string | null;
  id: string | null;
  token: string | null;
}

export const initialState: UserDetailsState = {
  username: null,
  id: null,
  token: null,
};

export const UserDetail = createSlice({
  name: "UserDetail",
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<UserDetailsState>) => {
      state = action.payload;
    },
    setUserToken: (state, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
  },
});

export const { logout, setUser, setUserToken } = UserDetail.actions;

export default UserDetail.reducer;
