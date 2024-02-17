// Further on work later
import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/Dialog";
import React from "react";
import ModalTitle from "../../components/ModalTitle";
import { useModal } from "../../hook";
import { ModalIds } from "../../typings";
import { Form, FormField } from "@/components/ui/Form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { RadioGroup } from "@/components/ui/RadioGroup";

const ThemeModal: React.FC = () => {
  const { isOpen, handleModalClose } = useModal({ id: ModalIds.THEME_MODAL });
  const FORM_ID = "choose_theme_form";

  const form = useForm();
  const { handleSubmit, control } = form;

  const submitForm = (data: any) => {};

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogContent>
        <ModalTitle text="Choose Theme" />
        <Form {...form}>
          <form id={FORM_ID} onSubmit={handleSubmit(submitForm)}>
            <FormField
              control={control}
              name="light"
              key="light"
              defaultValue={null}
              render={({ field }) => <></>}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button rounded="md" onClick={handleModalClose} variant="outline">
            Cancel
          </Button>
          <Button rounded="md" type="submit" form={FORM_ID}>
            Apply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ThemeModal;
