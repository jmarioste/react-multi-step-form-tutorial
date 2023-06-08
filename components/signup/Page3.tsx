"use client";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { FromStepProps } from "./FormStepProps";

const Page3 = (props: FromStepProps) => {
  return (
    <FormControl className="flex flex-col gap-2 w-[400px]">
      <InputLabel id="simple-select-label">Interests</InputLabel>
      <Select
        label="Interests"
        labelId="simple-select-label"
        id="simple-select"
      >
        <MenuItem value="Programming">Programming</MenuItem>
        <MenuItem value="UI">UI</MenuItem>
        <MenuItem value="UX">UX</MenuItem>
        <MenuItem value="Coding">Coding</MenuItem>
      </Select>
      <div className="flex justify-between gap-2">
        <Button onClick={props.onPrevious} className="flex-grow">
          Back
        </Button>
        <Button type="submit" variant="contained">
          {" "}
          Create an Account
        </Button>
      </div>
    </FormControl>
  );
};

export default Page3;
