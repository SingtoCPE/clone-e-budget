<template lang="">
  <div class="mt-4">
    <DetailForm :data="responseData" :path="path" />
  </div>
</template>
<script setup>
import { ECommon } from "@/enums";
import { useI18n } from "vue-i18n";

const { t: $t } = useI18n();
const api = useOrganizationsApi();
const route = useRoute();

const messages = inject("toast");

const path = ECommon.MasterDataPathName.Organizations;

const responseData = ref({});

// functions
const getById = async () => {
  const id = route.params._id;

  await api
    .getById(id)
    .then((res) => {
      responseData.value = res;
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
