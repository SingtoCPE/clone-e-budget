<template lang="">
  <div class="mt-4">
    <BaseForm v-model="form" :schema="schema" :path="path" @submit="save" />
  </div>
</template>

<script setup>
import { ECommon } from "@/enums";
import { useI18n } from "vue-i18n";

const { t: $t } = useI18n();
const route = useRoute();
const router = useRouter();
const api = useRiverBasinsApi();
const { required } = useValidation();
const { execute } = useApiRequest();

const messages = inject("toast");

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
const path = ECommon.MasterDataPathName.RiverBasins;

const form = ref({});
const id = ref(route.params._id);

// functions
const save = async () => {
  await execute(() => api.edit(id.value, form.value))
    .then(() => {
      messages.value = {
        title: $t("common.toast.success"),
        text: $t("common.toast.methodSuccess", {
          method: $t("common.toast.edit"),
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
          method: $t("common.toast.edit"),
        }),
        color: "error",
        prependIcon: "tabler-circle-x",
      };
    });
};

const getById = async () => {
  await api
    .getById(id.value)
    .then((res) => {
      form.value = {
        name: res.name,
        description: res.description,
      };
    })
    .catch((err) => {
      messages.value = {
        title: $t("common.toast.error"),
        text: $t("common.toast.methodError", {
          method: $t("common.toast.fetch"),
        }),
        color: "error",
        prependIcon: "tabler-circle-x",
      };
    });
};

getById();
</script>
