import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import Common from "../../util/Common";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({userId, password}, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${Common.KH_DOMAIN}/public/login`, {
        userId,
        password,
      });
      return await response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 슬라이스 생성
export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});
