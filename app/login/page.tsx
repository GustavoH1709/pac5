"use client";

import { useFormik } from "formik";
import { TextInput } from "../../components/inputs/TextInput";
import { ButtonForm } from "../../components/form/ButtonForm";
import z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { Post } from '../api/auth/login/route'
import { redirect } from "next/dist/server/api-utils";

export const dynamic = 'force-dynamic';

export default function Login() {
  const validationSchema = z.object({
    email: z.string({ required_error: "Obrigatório" }).email("E-mail inválido"),
    password: z.string({ required_error: "Obrigatório" }),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: (_values) => {
      login(_values)
    },
    validationSchema: toFormikValidationSchema(validationSchema),
  });

  const login = (_values : { password: string; email: string;})=> {
    if(!_values.email || !_values.password) {
      return;
    }

    fetch('localhost:3000/api/auth/login', { method: 'POST', body: _values as any }).then(
      response => {
        console.log(response)
      }
    )
  }

  return (
    <main>
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-6 rounded-lg">
        <form className="container flex flex-wrap flex-row">
          <div className="lg:w-full pr-1 pl-1">
            <TextInput
              value={formik.values.email}
              label="E-mail"
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                formik.setFieldValue("email", e.currentTarget.value);
              }}
              invalid={formik.errors.email}
            />
          </div>
          <div className="lg:w-full pr-1 pl-1">
            <TextInput
              value={formik.values.password}
              label="Senha"
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                formik.setFieldValue("password", e.currentTarget.value);
              }}
              invalid={formik.errors.password}
            />
          </div>
          <div className="lg:w-full pt-3 pr-1 pl-1">
            <ButtonForm type="button" onClick={formik.handleSubmit}>
              <FontAwesomeIcon
                size="1x"
                icon={faRightToBracket}
                className="mr-1"
              />
              <b>Entrar</b>
            </ButtonForm>
          </div>
        </form>
      </div>
    </div>
    </main>
  );
}
