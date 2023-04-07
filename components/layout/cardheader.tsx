import { ReactNode } from "react";

export function CardHeader({ title, actions }: { title: string, actions: any[] }) {

    return (
        <div className="flex flex-row justify-between border-spacing-y-2 border-t-0 border-b-slate-400">
            <b>{title}</b>
            <b>{title}</b>
        </div>
    )
}