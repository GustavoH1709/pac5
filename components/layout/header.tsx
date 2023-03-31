'use client'

import { Navbar } from "./navbar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
    routes: string[]
}

export function Header({ routes } : props) {

  const [show, setShow] = useState<boolean>(false);

  console.log('header =>', routes)

  return (
    <>
      <div className="flex items-center w-full h-16 fixed inset-x-0 top-0 bg-blue-300 justify-between">
        <button onClick={() => setShow(!show)} className="appearance-none p-9">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {show && <Navbar setShow={setShow} routes={routes}/>}
    </>
  );
}
