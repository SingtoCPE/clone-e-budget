<template>
  <VCard rounded="md" class="pt-9 px-6 pb-6">
    <div class="bg-grey-100 rounded-lg">
      <VRow class="px-4">
        <VCol cols="12" md="6">
          <span class="font-weight-bold">Name:</span>
          {{ data.name }}</VCol
        >
        <VCol cols="12" md="6">
          <span class="font-weight-bold">Description:</span>
          {{ data.description }}</VCol
        >
      </VRow>
    </div>

    <VDivider class="mt-9" />

    <div class="d-flex justify-space-between mt-6">
      <VBtn color="light-on-primary" @click="goBack" variant="tonal">
        {{ $t("common.btn.back") }}
      </VBtn>
    </div>
  </VCard>
</template>

<script setup>
import { ECommon } from "@/enums";

const router = useRouter();

const goBack = () => {
  router.push(`/master-data/${props.path}`);
};

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
  path: ECommon.MasterDataPathName,
});
</script>
