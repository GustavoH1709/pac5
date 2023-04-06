'use client';

import Link from "next/link";
import { useId, useState } from "react";
import Collapsible, { CollapsibleProps } from "react-collapsible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export function NavBarBuilder({ setShow, routes }: any) {
  return (
    <nav className="flex flex-col" key={useId()}>
      {(routes.items || []).map((m: any, index: number) => {
        const [open, setOpen] = useState<boolean>(false);

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
              <NavBarBuilder routes={m} setShow={setShow} />
            </Collapsible>

          );
        }

        return (
          <div className="w-100 p-3 border-y-2 border-t-gray-200 border-b-0 hover:bg-gray-300">
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
