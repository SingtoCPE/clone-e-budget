<template>
  <div class="mt-4">
    <BaseForm v-model="form" :schema="schema" :path="path" @submit="save" />
  </div>
</template>

<script setup>
import { useValidation } from "@/composables/useValidation";
import { ECommon } from "@/enums";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t: $t } = useI18n();
const { required } = useValidation();
const { execute } = useApiRequest();
const api = useNationalStrategiesApi();
const router = useRouter();

const messages = inject("toast");

const path = ECommon.MasterDataPathName.NationalStrategies;

const form = ref({});

const schema = [
  {
    key: "name",
    label: $t("common.input.name"),
    type: "text",
    rules: [required("common.input.name")],
  },
  {
    key: "description",
    label: $t("common.input.description"),
    type: "textArea",
  },
];

// functions
const save = async () => {
  await execute(() => api.create(form.value))
    .then(() => {
      messages.value = {
        title: $t("common.toast.success"),
        text: $t("common.toast.methodSuccess", {
          method: $t("common.toast.create"),
        }),
        color: "success",
        prependIcon: "tabler-circle-check",
      };

      router.push(`/master-data/${path}`);
    })
    .catch((err) => {
      messages.value = {
        title: $t("common.toast.error"),
        text: $t("common.toast.methodError", {
          method: $t("common.toast.create"),
        }),
        color: "error",
        prependIcon: "tabler-circle-x",
      };
    });
};
</script>
