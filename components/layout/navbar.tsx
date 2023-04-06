'use client'

import Link from "next/link";
import { useId } from "react";
import Collapsible, { CollapsibleProps } from "react-collapsible";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
// import { routesMap } from '../../helpers/routes/routesMap';

type props = {
  setShow: any;
};


const routesMap = {
  items: [
    {
      "name": "A",
      "items": [
        {
          "name": "b",
          "items": [
            
          ]
        }
      ]
    }
  ]
}


function DynamicSidebarRoutingBuilder({ setShow, routes }: any) {
  return (
    <nav className="flex flex-col mt-3" key={useId()}>
      {(routes.items || []).map((m: any) => {
        const [open, setOpen] = useState<boolean>(false);
        console.log(m)
        if ((m.items || []).length) {
          return (
            <Collapsible
              className="flex flex-col border-solid p-3 border-y-2 border-t-gray-200 border-b-0 font-light"
              openedClassName="flex flex-col p-3 border-solid border-y-2 border-t-gray-200 border-b-0 font-light"
              contentInnerClassName="p-3"
              key={useId()}
              trigger={
                <div className="flex justify-between">
                  <b>{m.name}</b>
                  <FontAwesomeIcon
                    className="mr-3 mt-1 text-gray-400"
                    icon={open ? faAngleUp : faAngleDown}
                  />
                </div>
              }
              onTriggerOpening={() => setOpen(true)}
              onTriggerClosing={() => setOpen(false)}
            >
              <DynamicSidebarRoutingBuilder routes={m} setShow={setShow} />
            </Collapsible>
          );
        }

        return (
          <div className="w-100 p-3 border-t-gray-200 border-y-2 border-b-0">
            <Link
              className="rounded font-light"
              key={useId()}
              href={`/${m.link}`}
              onClick={() => setShow(false)}
            >
              <b>{m.name}</b>
            </Link>
          </div>
        );
      })}
    </nav>
  );
}

export function Navbar({ setShow }: props) {
  return (
    <div className="absolute w-full h-full flex row">
      <div className="w-1/5 h-full bg-white">
        <div className="flex justify-center">
          <b className="mt-3">Dashboard</b>
        </div>
        <DynamicSidebarRoutingBuilder routes={routesMap} setShow={setShow} />
      </div>
      <div
        className="w-4/5 h-full bg-gray-500 bg-opacity-30 backdrop-filter"
        onClick={() => setShow(false)}
      ></div>
    </div>
  );
}
