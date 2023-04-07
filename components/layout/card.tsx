import { ReactNode } from "react";


export function Card({children}: {children: ReactNode}) {

    return (<div className="p-3 mt-28 m-auto w-11/12 rounded-lg border-2 border-gray-100">{children}</div>)
}