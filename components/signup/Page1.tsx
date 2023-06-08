"use client";
import { Button } from "@mui/material";
import React from "react";
import { FormStepComponentType } from "@/components/signup/FormStepProps";
import FormikTextField from "../formik/FormikTextField";
import { useFormikContext } from "formik";
import { signupSchema } from "./signupSchema";
import { InferType } from "yup";

const Page1: FormStepComponentType = (props) => {
  const { errors } = useFormikContext<InferType<typeof signupSchema>>();
  const hasErrors = errors.email || errors.password;
  return (
    <div className="flex flex-col gap-2 w-[400px]">
      <FormikTextField name="email" label="Email" />
      <FormikTextField name="password" label="Password" type="password" />
      <Button variant="contained" onClick={props.onNext} disabled={!!hasErrors}>
        Next
      </Button>
    </div>
  );
};

export default Page1;
