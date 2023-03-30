"use client";

import { useFormik } from "formik";
import { TextInput } from "../../../components/inputs/TextInput";
import { ButtonForm } from "../../../components/form/ButtonForm";
import z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

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
    onSubmit: () => {
      router.push("/");
    },
    validationSchema: toFormikValidationSchema(validationSchema),
  });

  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-6 rounded-lg">
        <form className="container flex flex-wrap flex-row">
          <div className="lg:w-full">
            <TextInput
              value={formik.values.email}
              label="E-mail"
              onChange={(e) => {
                formik.setFieldValue("email", e.target.value);
              }}
              invalid={formik.errors.email}
            />
          </div>
          <div className="lg:w-full">
            <TextInput
              value={formik.values.password}
              label="Senha"
              onChange={(e) => {
                formik.setFieldValue("password", e.target.value);
              }}
              invalid={formik.errors.password}
            />
          </div>
          <div className="lg:w-full mt-2">
            <ButtonForm type="button" onClick={formik.handleSubmit}>
              <FontAwesomeIcon size="1x" icon={faRightToBracket} className="mr-1" />
              <b>Entrar</b>
            </ButtonForm>
          </div>
        </form>
      </div>
    </div>
  );
}
