import { Dispatch, SetStateAction, createContext, useState } from "react";
import { ICartContext, ICartContextProviderProps } from "./Interfaces/Interfaces";

export const CartContext = createContext<{ cartState: ICartContext; setCartState: Dispatch<SetStateAction<ICartContext>> } | null>(null);

export function CartProvider ({children}: ICartContextProviderProps) {
  const [cartState, setCartState] = useState<ICartContext>({ items: [] });

  return (
    <CartContext.Provider value={{ cartState, setCartState }}>
      {children}
    </CartContext.Provider>
  );
} 