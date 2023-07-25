import { createSlice } from "@reduxjs/toolkit";

interface UserDetailsState {
  username: string | null;
  id: string | null;
}

export const initialState: UserDetailsState = {
  username: null,
  id: null,
};

export const UserDetail = createSlice({
  name: "UserDetail",
  initialState,
  reducers: {},
});

export default UserDetail.reducer;
