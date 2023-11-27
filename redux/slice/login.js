import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ username, password }, thunkApi) => {
    try {
      const api_url = "https://6562cdc5ee04015769a693bb.mockapi.io/users";
      const response = await fetch(api_url);
      const json = await response.json();

      const login = json.find(
        (data) => data.username === username && data.password === password
      );

      if (login) {
        const responseLogin = await fetch(`${api_url}/${login.id}`, {
          method: "GET",
        });
        if (responseLogin.status === 200 || responseLogin.status === 201) {
          alert("login success");
          
          return login;
        }
      }

      return alert("failed");
    } catch (error) {
      return thunkApi.rejectWithValue("Login failed");
    }
  }
);
const loginSlice = createSlice({
  name: "login",
  initialState: {
    loggingIn: false,
    error: null,
    loggedInUser: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loggingIn = true;
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loggingIn = false;
      state.loggedInUser = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loggingIn = false;
      state.error = action.payload;
    });
  },
});
export default loginSlice.reducer;