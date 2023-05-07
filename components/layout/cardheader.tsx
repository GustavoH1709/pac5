import { MouseEventHandler } from "react";
import { ToolbarCrud } from "./toolbarCrud";
import type { props } from './types/cardtypes';


export function CardHeader({ title, actions }: props) {
  return (
    <>
      <div className="flex flex-row justify-between border-spacing-y-2 border-t-0 border-b-slate-400">
        <b className="p-2">{title}</b>
        <ToolbarCrud actions={actions} />
      </div>
      <div className="p-1 border-y-2 border-t-0 border-b-slate-100" />
    </>
  );
}
