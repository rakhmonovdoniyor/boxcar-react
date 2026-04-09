import React from "react";
import { Outlet } from "react-router-dom";

import { ShopCartProvider } from "./shop-context";

const ShopShell = () => {
  return (
    <ShopCartProvider>
      <Outlet />
    </ShopCartProvider>
  );
};

export default ShopShell;
