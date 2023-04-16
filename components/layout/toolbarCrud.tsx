import { MouseEventHandler } from "react";

type buttonProps = {
  label: string;
  action: undefined | MouseEventHandler<HTMLButtonElement>;
  color: string | undefined;
};

type props = {
  actions: buttonProps[] | undefined;
};

export function ToolbarCrud({ actions }: props) {
  return (
    <div role="group" className="flex gap-4">
      {(actions || []).map((m) => {
        return (
          <button
            type="button"
            className={`rounded-md p-2 ${m.color ?? "bg-blue-600"}`}
            //onClick={m.action}
          >
            {m.label}
          </button>
        );
      })}
    </div>
  );
}
