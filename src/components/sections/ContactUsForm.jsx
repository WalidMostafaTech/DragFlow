import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import MainInput from "@/components/form/MainInput";
import { Button } from "@/components/ui/button";
import FormError from "@/components/form/FormError";
import { toast } from "sonner";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInputField from "@/components/form/PhoneInputField";
import { useTranslation } from "react-i18next";
import { SendHorizontal } from "lucide-react";
import { sendContactUs } from "@/api/mainServices";

const ContactUsForm = () => {
  const { t } = useTranslation();

  const contactSchema = z.object({
    name: z.string().min(2, t("ContactForm.nameRequired")),
    email: z.string().email(t("ContactForm.invalidEmail")),
    message: z.string().min(5, t("ContactForm.messageMin")),
    phone: z.string().refine((value) => isValidPhoneNumber(value || ""), {
      message: t("ContactForm.invalidPhone"),
    }),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: sendContactUs,
    onSuccess: () => {
      reset();
      toast.success(t("ContactForm.success"));
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-4 rounded-2xl bg-white"
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <MainInput
            {...field}
            label={t("ContactForm.name")}
            placeholder={t("ContactForm.namePlaceholder")}
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <MainInput
            {...field}
            type="email"
            label={t("ContactForm.email")}
            placeholder={t("ContactForm.emailPlaceholder")}
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <PhoneInputField
            {...field}
            label={t("ContactForm.phone")}
            placeholder={t("ContactForm.phonePlaceholder")}
            error={errors.phone?.message}
          />
        )}
      />

      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <MainInput
            {...field}
            type="textarea"
            label={t("ContactForm.message")}
            placeholder={t("ContactForm.messagePlaceholder")}
            error={errors.message?.message}
          />
        )}
      />

      <Button
        type="submit"
        disabled={isPending}
        className="w-fit mx-auto min-w-1/2 py-6 rounded-full"
      >
        {isPending ? t("ContactForm.sending") : t("ContactForm.send")}
        <SendHorizontal className="rtl:rotate-180 w-6! h-6!" />
      </Button>

      {error && (
        <FormError
          errorMsg={error?.response?.data?.message || t("ContactForm.error")}
        />
      )}
    </form>
  );
};

export default ContactUsForm;
