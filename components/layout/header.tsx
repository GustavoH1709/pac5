"use client";

import { Navbar } from "./navbar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { redirect } from 'next/navigation'
import Link from "next/link";
import Router from 'next/router';

export function Header() {
  const [show, setShow] = useState<boolean>(false);
  const [isLogout, setIsLogout] = useState<boolean>(false);

  useEffect(() => {
    if(isLogout) {
      redirect('/login')
    }
  }, [isLogout])

  const onLogout = () => {
    localStorage.removeItem('login');
    setIsLogout(true);
  }
  
  return (
    <>
      <div className="absolute flex items-center w-full h-16 inset-x-0 top-0 bg-blue-300 justify-between">
        <button onClick={() => setShow(!show)} className="appearance-none p-9">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button type="submit" className="appearance-none mr-5" onClick={onLogout}>
          <span className="text-red-500">Deslogar</span>
        </button>
      </div>
      {show && <Navbar setShow={setShow} />}
    </>
  );
}
