/* eslint-disable */
'use client';

import Link from "next/link";
import { useState } from "react";
import Collapsible from "react-collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';

export function NavBarBuilder({ setShow, routes }: any) {
  return (
    <nav className="flex flex-col" key={uuidv4()}>
      {(routes.items || []).map((m: any, index: number) => {
        const [open, setOpen] = useState<boolean>(false);

        if ((m.items || []).length) {
          return (

            <Collapsible
              className="flex flex-col border-solid p-3 border-y-2 border-t-gray-200 border-b-0 font-light"
              openedClassName="flex flex-col p-3 border-solid border-y-2 border-t-gray-200 border-b-0 font-light"
              contentInnerClassName="p-3"
              key={uuidv4()}
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
              <NavBarBuilder routes={m} setShow={setShow} />
            </Collapsible>

          );
        }

        return (
          <div className="w-100 p-3 border-y-2 border-t-gray-200 border-b-0 hover:bg-gray-300" key={uuidv4()}>
            <Link
              className="rounded font-light"
              key={uuidv4()}
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
