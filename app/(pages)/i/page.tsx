'use client'

import { ICard } from "./card";
import { IContextProvider } from "./context";

export default function I() {
  return (
    <IContextProvider events={{}}>
      <ICard />
    </IContextProvider>
  );
}
