// components/signup/Page2.tsx
"use client";
import { Button } from "@mui/material";
import React from "react";
import { FormStepComponentType } from "./FormStepProps";
import FormikTextField from "../formik/FormikTextField";
import { useFormikContext } from "formik";
import { InferType } from "yup";
import { signupSchema } from "./signupSchema";

const Page2: FormStepComponentType = (props) => {
  const { errors } = useFormikContext<InferType<typeof signupSchema>>();
  const hasErrors = errors.firstName || errors.lastName;
  return (
    <div className="flex flex-col gap-2 w-[400px]">
      <FormikTextField name="firstName" label="First name"></FormikTextField>
      <FormikTextField name="lastName" label="Last name"></FormikTextField>
      <div className="flex">
        <Button onClick={props.onPrevious} className="flex-grow">
          Back
        </Button>
        <Button
          variant="contained"
          onClick={props.onNext}
          className="flex-grow"
          disabled={!!hasErrors}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Page2;
