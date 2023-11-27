// ./redux/slice/forgotPassword.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updatePassword = createAsyncThunk(
  "forgotPassword/updatePassword",
  async ({ username, password }) => {
    const api_url = `https://6562cdc5ee04015769a693bb.mockapi.io/users`;
    try {
      const response = await fetch(api_url);
      const json = await response.json();

      const forgot = json.find((data) => data.username === username);
      if (forgot) {
        const responseForgot = await fetch(`${api_url}/${forgot.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            password: password,
          }),
        });

        if (responseForgot.status === 200 || responseForgot.status === 201) {
          alert("Update password success");
        } else {
          alert("Update password failed");
        }
      } else {
        alert("User Not Found");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: {
    updating: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatePassword.pending, (state) => {
        state.updating = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.updating = false;
        state.success = true;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.updating = false;
        state.error = action.error.message;
      });
  },
});

export default forgotPasswordSlice.reducer;