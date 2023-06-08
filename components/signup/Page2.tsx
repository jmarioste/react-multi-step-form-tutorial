"use client";
import { Button, TextField } from "@mui/material";
import React from "react";
import { FromStepProps } from "./FormStepProps";

const Page2 = (props: FromStepProps) => {
  return (
    <div className="flex flex-col gap-2 w-[400px]">
      <TextField label="First name"></TextField>
      <TextField label="Last name"></TextField>
      <div className="flex">
        <Button onClick={props.onPrevious} className="flex-grow">
          Back
        </Button>
        <Button
          variant="contained"
          onClick={props.onSubmit}
          className="flex-grow"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Page2;
