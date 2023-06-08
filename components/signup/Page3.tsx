"use client";
import { Button, MenuItem } from "@mui/material";
import { FormStepComponentType } from "./FormStepProps";
import FormikSelect from "../formik/FormikSelect";

const Page3: FormStepComponentType = (props) => {
  return (
    <div className="flex flex-col gap-2 w-[400px]">
      <FormikSelect
        label="Interests"
        labelId="simple-select-label"
        id="simple-select"
        name={"interests"}
      >
        <MenuItem value="Programming">Programming</MenuItem>
        <MenuItem value="UI">UI</MenuItem>
        <MenuItem value="UX">UX</MenuItem>
        <MenuItem value="Coding">Coding</MenuItem>
      </FormikSelect>
      <div className="flex justify-between gap-2">
        <Button onClick={props.onPrevious} className="flex-grow">
          Back
        </Button>
        <Button type="submit" variant="contained">
          Create an Account
        </Button>
      </div>
    </div>
  );
};

export default Page3;
