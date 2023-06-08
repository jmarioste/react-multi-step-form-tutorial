"use client";
import { Button, TextField } from "@mui/material";
import React from "react";
import { FromStepProps } from "@/components/signup/FormStepProps";
import FormikTextField from "../formik/FormikTextField";

const Page1 = (props: FromStepProps) => {
  return (
    <div className="flex flex-col gap-2 w-[400px]">
      <FormikTextField name="email" label="Email" />
      <FormikTextField name="password" label="Password" type="password" />
      <Button variant="contained" onClick={props.onSubmit}>
        Next
      </Button>
    </div>
  );
};

export default Page1;
