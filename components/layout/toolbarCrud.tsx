import type { buttonProps } from './types/cardtypes';
import { v4 as uuidv4 } from 'uuid';


export function ToolbarCrud({ actions }: { actions : buttonProps[] | undefined}) {
  return (
    <div role="group" className="flex gap-4">
      {(actions || []).map((m) => {
        return (
          <button
            key={uuidv4()}
            type="button"
            className={`text-white rounded-md p-2 ${m.color ?? "bg-blue-600 hover:bg-blue-500"}`}
            onClick={m.action as never}
          >
            {m.label}
          </button>
        );
      })}
    </div>
  );
}
