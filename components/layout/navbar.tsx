"use client";

import { NavBarBuilder } from "./navbarBuilder";
import routes from "../../public/routes/routes.json";

type props = {
  setShow: any;
};

export function Navbar({ setShow }: props) {
  return (
    <div className="absolute w-full h-full flex row">
      <div className="w-1/5 h-full bg-white">
        <div className="flex justify-center">
          <b className="mt-3 mb-3">Dashboard</b>
        </div>
        <NavBarBuilder routes={routes || []} setShow={setShow} />
      </div>
      <div
        className="w-4/5 h-full bg-gray-500 bg-opacity-30 backdrop-filter"
        onClick={() => setShow(false)}
      />
    </div>
  );
}
