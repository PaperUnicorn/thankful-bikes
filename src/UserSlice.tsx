import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { logout, setUser } = UserDetail.actions;

export default UserDetail.reducer;
