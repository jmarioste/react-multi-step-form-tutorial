"use client";
import { Button, TextField } from "@mui/material";
import React from "react";
import { FromStepProps } from "@/components/signup/FormStepProps";

const Page1 = (props: FromStepProps) => {
  return (
    <div className="flex flex-col gap-2 w-[400px]">
      <TextField label="Email" />
      <TextField label="Password" />
      <Button variant="contained" onClick={props.onSubmit}>
        Next
      </Button>
    </div>
  );
};

export default Page1;
