import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import { FieldInputProps, useField } from "formik";

export type FormikTextFieldProps = { name: string } & TextFieldProps;
type TexFieldConfig = TextFieldProps & FieldInputProps<any>;

const FormikTextField = ({ name, ...props }: FormikTextFieldProps) => {
  const [field, meta] = useField(name);

  const configTextField: TexFieldConfig = {
    ...field,
    ...props,
  };

  if (meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <MuiTextField {...configTextField} />;
};

export default FormikTextField;
