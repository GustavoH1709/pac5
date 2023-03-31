import Link from "next/link";
import { useId } from "react";

type props = {
  setShow: any;
  routes: string[];
};

export function Navbar({ setShow, routes }: props) {
  return (
    <div className="absolute w-full h-full flex row">
      <div className="w-1/5 h-full bg-blue-300">
        <div className="flex justify-center"><b>Dashboard</b></div>
        <nav className="flex flex-col">
          {(routes || []).map((m) => {
            return (
              <Link className="rounded p-2 font-extralight" key={useId()} href={`/${m}`} onClick={() => setShow(false)}>
                {m}
              </Link>
            );
          })}
        </nav>
      </div>
      <div
        className="w-4/5 h-full bg-gray-500 bg-opacity-30 backdrop-filter"
        onClick={() => setShow(false)}
      ></div>
    </div>
  );
}
