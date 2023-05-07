'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DataCompYearForm } from '../../form/DataCompYearForm';

export default function DataCompYearNewEditPage({ params }: { params: { IdData: string, type: string } }) {

  const router = useRouter();

  useEffect(() => { 
    if(!params.IdData || !parseInt(params.IdData) || !params.type) {
      router.push("/datacompyear")
    }
  }, [params.IdData, params.type])

  
  const initialValues = {
    Ano: new Date().getFullYear(),
    Availability: 0,
    DupToReceive: 0,
    Stock: 0,
    Loan: 0,
    Wage: 0,
    Tax: 0,
    ShareCapital: 0,
    ProfitReserve: 0,
    AccumulatedProfit: 0,
    GrossSales: 0,
    Deductions: 0,
    CPV: 0,
    OperatingExpenses: 0,
    FinancialExpenses: 0,
    IRCS: 0,
  }

  return (
    
    <DataCompYearForm initialValues={initialValues} tipo={params.type}/>
  );
}