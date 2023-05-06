'use client'

import { DataCompYearCard } from "./card";
import { DataCompYearContextProvider } from "./context";

export default function DataCompYearPage() {
  return (
    <DataCompYearContextProvider events={{}}>
      <DataCompYearCard />
    </DataCompYearContextProvider>
  );
}
