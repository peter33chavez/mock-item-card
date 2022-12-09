import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Variant } from "interfaces/Variant";


export interface CartState {
  items: Variant[] | []
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Variant>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload
      );

      let newCart = [...state.items];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload}) as it's not in basket!`
        );
      }
      state.items = newCart;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state: any) => state.cart.items;

export const selectCartTotal = (state:any) =>
  state.cart.items.reduce((total:number, item:any) => (total += item.price), 0);

export default cartSlice.reducer;
