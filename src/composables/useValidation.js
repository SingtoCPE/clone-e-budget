// src/composables/useValidation.js
import { useI18n } from "vue-i18n";

export const useValidation = () => {
  const { t: $t } = useI18n();

  const required = (fieldKey) => (v) =>
    !!v || $t("common.validate.required", { field: $t(fieldKey) });

  const minLength = (fieldKey, length) => (v) =>
    (v && v.length >= length) ||
    $t("common.validate.minLength", { field: $t(fieldKey), length });

  return {
    required,
    minLength,
  };
};
