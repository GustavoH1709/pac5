'use client'

import { DataCompYearCard } from "./card";
import { DataCompYearContextProvider } from "./context";

export default function DrePage() {
  return (
    <DataCompYearContextProvider events={{}}>
      <DataCompYearCard />
    </DataCompYearContextProvider>
  );
}
