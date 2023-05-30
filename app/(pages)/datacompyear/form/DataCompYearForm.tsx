"use client";

import { DecimalInput, TextInput } from "../../../../components/inputs";
import { useFormik } from "formik";
import z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import type { DataCompYearFormType } from "./types";
import { Card, CardHeader, CardBody } from "../../../../components/layout";
import { decimalParser } from "../../../../helpers/functions/formatters";

export function DataCompYearForm({
  initialValues,
  tipo,
  onSave,
}: {
  initialValues: DataCompYearFormType;
  tipo: string;
  onSave: any | null;
}) {
  const validationSchema = z.object({
    Ano: z.number({ required_error: "Obrigatório" }),
    Availability: z.number({ required_error: "Obrigatório" }),
    DupToReceive: z.number({ required_error: "Obrigatório" }),
    Stock: z.number({ required_error: "Obrigatório" }),
    Loan: z.number({ required_error: "Obrigatório" }),
    Wage: z.number({ required_error: "Obrigatório" }),
    Tax: z.number({ required_error: "Obrigatório" }),
    ShareCapital: z.number({ required_error: "Obrigatório" }),
    ProfitReserve: z.number({ required_error: "Obrigatório" }),
    AccumulatedProfit: z.number({ required_error: "Obrigatório" }),
    GrossSales: z.number({ required_error: "Obrigatório" }),
    Deductions: z.number({ required_error: "Obrigatório" }),
    CPV: z.number({ required_error: "Obrigatório" }),
    OperatingExpenses: z.number({ required_error: "Obrigatório" }),
    FinancialExpenses: z.number({ required_error: "Obrigatório" }),
    IRCS: z.number({ required_error: "Obrigatório" }),
  });

  const formik = useFormik({
    validationSchema: toFormikValidationSchema(validationSchema),
    initialValues: initialValues,
    onSubmit: (values) => {
      onSave(values);
    },
  });

  const { handleSubmit, values, errors, setFieldValue } = formik;

  return (
    <Card>
      <CardHeader
        title={tipo === "new" ? "Novo" : "Editar"}
        actions={[
          {
            action: handleSubmit as any,
            type: "new",
            label: "Salvar",
          },
        ]}
      />
      <CardBody>
        <form>
          <div className="w-full flex flex-wrap flex-row">
            <div className="lg:w-1/3 pr-1 pl-1">
              <TextInput
                label="Ano"
                value={values.Ano.toString()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue(
                    "Ano",
                    Number(e.target.value.replace(/[^0-9]/g, "") || 2023)
                  )
                }
                invalid={errors.Ano || ""}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="Availability"
                value={values.Availability}
                onChange={(e) => {
                  setFieldValue("Availability", decimalParser(e));
                }}
                precision={2}
                invalid={errors.Availability}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="Dup To Receive"
                value={values.DupToReceive}
                onChange={(e) => {
                  setFieldValue("DupToReceive", decimalParser(e));
                }}
                precision={2}
                invalid={errors.DupToReceive}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="Stock"
                value={values.Stock}
                onChange={(e) => {
                  setFieldValue("Stock", decimalParser(e));
                }}
                precision={2}
                invalid={errors.Stock}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="Loan"
                value={values.Loan}
                onChange={(e) => {
                  setFieldValue("Loan", decimalParser(e));
                }}
                precision={2}
                invalid={errors.Loan}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="Wage"
                value={values.Wage}
                onChange={(e) => {
                  setFieldValue("Wage", decimalParser(e));
                }}
                precision={2}
                invalid={errors.Wage}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="Tax"
                value={values.Tax}
                onChange={(e) => {
                  setFieldValue("Tax", decimalParser(e));
                }}
                precision={2}
                invalid={errors.Tax}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="Share Capital"
                value={values.ShareCapital}
                onChange={(e) => {
                  setFieldValue("ShareCapital", decimalParser(e));
                }}
                precision={2}
                invalid={errors.ShareCapital}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="Profit Reserve"
                value={values.ProfitReserve}
                onChange={(e) => {
                  setFieldValue("ProfitReserve", decimalParser(e));
                }}
                precision={2}
                invalid={errors.ProfitReserve}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="Accumulated Profit"
                value={values.AccumulatedProfit}
                onChange={(e) => {
                  setFieldValue("AccumulatedProfit", decimalParser(e));
                }}
                precision={2}
                invalid={errors.AccumulatedProfit}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="Gross Sales"
                value={values.GrossSales}
                onChange={(e) => {
                  setFieldValue("GrossSales", decimalParser(e));
                }}
                precision={2}
                invalid={errors.GrossSales}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="Deductions"
                value={values.Deductions}
                onChange={(e) => {
                  setFieldValue("Deductions", decimalParser(e));
                }}
                precision={2}
                invalid={errors.Deductions}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="CPV"
                value={values.CPV}
                onChange={(e) => {
                  setFieldValue("CPV", decimalParser(e));
                }}
                precision={2}
                invalid={errors.CPV}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="Operating Expenses"
                value={values.OperatingExpenses}
                onChange={(e) => {
                  setFieldValue("OperatingExpenses", decimalParser(e));
                }}
                precision={2}
                invalid={errors.OperatingExpenses}
              />
            </div>
            <div className="lg:w-1/3 pr-1 pl-1">
              <DecimalInput
                label="Financial Expenses"
                value={values.FinancialExpenses}
                onChange={(e) => {
                  setFieldValue("FinancialExpenses", decimalParser(e));
                }}
                precision={2}
                invalid={errors.FinancialExpenses}
              />
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
