import Link from "next/link";
import { useId } from "react";
import Collapsible, { CollapsibleProps } from "react-collapsible";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

type props = {
  setShow: any;
  routes: string[];
};

const _routes = {
  items: [
    {
      name: "Financeiro",
      items: [
        {
          name: "imposto",
        },
        {
          name: "nf",
        },
        {
          name: 'Cadastro',
          items: [
            {
              name: 'AAAA'
            }
          ]
        }
      ],
    },
    {
      "name": "Logistica",
      items: []
    }
  ],
};

function DynamicSidebarRoutingBuilder({ routing, setShow }: any) {
  return (
    <nav className="flex flex-col mt-3" key={useId()}>
      {(routing.items || []).map((m: any) => {

        const [open, setOpen] = useState<boolean>(false);

        if ("items" in m) {
          return (
            <Collapsible
              className="flex flex-col border-solid p-3 border-y-2 border-t-gray-200 border-b-0 font-light"
              openedClassName="flex flex-col p-3 border-solid border-y-2 border-t-gray-200 border-b-0 font-light"
              contentInnerClassName="p-3"
              key={useId()}
              trigger={<div className="flex justify-between"><b>{m.name}</b><FontAwesomeIcon  className="mr-3 mt-1 text-gray-400" icon={open ? faAngleUp : faAngleDown} /></div>}
              onTriggerOpening={() => setOpen(true)}
              onTriggerClosing={() => setOpen(false)}
            >
              <DynamicSidebarRoutingBuilder routing={m} setShow={setShow} />
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

export function Navbar({ setShow, routes }: props) {
  return (
    <div className="absolute w-full h-full flex row">
      <div className="w-1/5 h-full bg-white">
        <div className="flex justify-center">
          <b className="mt-3">Dashboard</b>
        </div>
        <DynamicSidebarRoutingBuilder routing={_routes} setShow={setShow} />
      </div>
      <div
        className="w-4/5 h-full bg-gray-500 bg-opacity-30 backdrop-filter"
        onClick={() => setShow(false)}
      ></div>
    </div>
  );
}
