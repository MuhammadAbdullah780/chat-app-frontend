import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { FormProvider, ValidationMode, useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  errorDelay?: number;
  mode?: keyof ValidationMode;
  reValidateMode?: "onBlur" | "onChange" | "onSubmit";
  formId: string;
  successFunc: (data: any) => Promise<void> | void;
  children: React.ReactNode;
  formProps?: Omit<React.HTMLProps<HTMLFormElement>, "onSubmit" | "id">;
  defaultValues?: { [x: string]: any } | (() => any);
  shouldFocusError?: boolean;
  schema: z.ZodAny;
};

const RhfWrapper: React.FC<Props> = ({
  children,
  formId,
  mode,
  successFunc,
  formProps,
  defaultValues,
  errorDelay,
  shouldFocusError,
  reValidateMode,
  schema,
}) => {
  // Hooks
  const form = useForm({
    mode: mode ?? "onChange",
    defaultValues,
    delayError: errorDelay,
    shouldFocusError,
    reValidateMode: reValidateMode ?? "onChange",
    resolver: zodResolver(schema),
  });

  // Variables
  const { handleSubmit, reset } = form;

  // Functions
  const submitFunc = async (data: z.infer<typeof schema>) => {
    // console.log(data, "submitted_form_data");
    await successFunc?.(data);
    reset();
  };

  // Use Effect
  useEffect(() => {
    return () => reset();
  }, []);

  return (
    <FormProvider {...form}>
      <form {...formProps} id={formId} onSubmit={handleSubmit(submitFunc)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default RhfWrapper;
