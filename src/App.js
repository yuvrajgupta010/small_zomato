import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShow, setCartIsShown] = useState(false);

  const cartChangeHandler = () => {
    setCartIsShown((prevState) => {
      return !prevState;
    });
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={cartChangeHandler} />}
      <Header onShowCart={cartChangeHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
