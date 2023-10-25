import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
  cart: [],
  wishlist: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userData.push(action.payload);
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart=state.cart.filter((item) => item.id !== action.payload.id);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist=state.wishlist.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addUser, addToCart, addToWishlist, removeFromCart ,removeFromWishlist} =
  userSlice.actions;
export default userSlice.reducer;




// // To remove an item from the cart, dispatch the removeFromCart action with the item's ID
// dispatch(removeFromCart({ id: itemIdToRemove }));
