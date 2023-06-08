"use client";
import { Form, Formik } from "formik";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FromStepProps } from "./FormStepProps";
type Props = {
  steps: React.ComponentType<FromStepProps>[];
};
const SignUpForm = ({ steps }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("step");
  const pageIndex = page ? +page : 1;
  const Step = steps.at(pageIndex - 1)!;
  return (
    <Formik
      onSubmit={(values: any) => {
        console.log(values);
      }}
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        interests: "",
      }}
    >
      <Form>
        <Step
          onNext={() => {
            if (pageIndex < steps.length) {
              const nextPage = pageIndex + 1;
              router.push(`/signup?step=${nextPage}`);
            }
          }}
          onPrevious={() => {
            const prevPage = pageIndex - 1;
            if (prevPage > 1) {
              router.push(`/signup?step=${prevPage}`);
            } else {
              router.push("/signup");
            }
          }}
        />
      </Form>
    </Formik>
  );
};

export default SignUpForm;
