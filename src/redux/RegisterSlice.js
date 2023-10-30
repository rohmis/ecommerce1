import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
  cart: [],
  wishlist: [],
  isLoggedIn: false,
  isRegistered: true,
  userProfile: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userData.push(action.payload);
    },
    addUserProflie: (state, action) => {
      state.userProfile.push(action.payload);
    },
    clearUserProflie: (state) => {
      state.userProfile=[];
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    isRegister: (state) => {
      state.isRegistered = true;
    },
  },
});

export const {
  addUser,
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
  login,
  logout,
  isRegister,
  addUserProflie,
  clearUserProflie,
} = userSlice.actions;
export default userSlice.reducer;
