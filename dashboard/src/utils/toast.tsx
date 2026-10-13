import { toast } from "sonner";

export const showSuccessToast = (title: string, message?: string) => {
  toast.success(title, {
    description: message,
  });
};

export const showErrorToast = (title: string, message?: string) => {
  toast.error(title, {
    description: message,
  });
};