//NavBar.tsx
import React from "react";
import CartButton from "../components/CartButton";
import HomeButton from "../components/HomeButton";

const NavBar: React.FC = () => {
  return (
    <div className="container mt-4">
      <div className="justify-content-end d-flex gap-1">
        <HomeButton />
        <CartButton />
      </div>
    </div>
  );
};

export default NavBar;
