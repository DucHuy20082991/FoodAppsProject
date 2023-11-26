import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "registerUser",
  async (userData, thunkApi) => {
    try {
      const response = await fetch(
        "https://6562cdc5ee04015769a693bb.mockapi.io/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();
      alert("Response data:", data);

      if (!response.ok) {
        return thunkApi.rejectWithValue("Register failed");
      }

      return data; // Return data on successful registration
    } catch (error) {
      console.error("Registration error:", error); // Log any registration errors
      return thunkApi.rejectWithValue("Register failed");
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    registering: false,
    error: null,
    registeredUser: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.registering = false;
      state.registeredUser = action.payload;
    });
  },
});

export default registerSlice.reducer;
