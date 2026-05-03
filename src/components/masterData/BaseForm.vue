<template>
  <VForm @submit.prevent="submit" ref="formRef">
    <VCard rounded="md" class="pa-6">
      <VRow>
        <VCol v-for="field in schema" :key="field.key" cols="12" md="6">
          <div v-if="field.type === 'text'">
            <VTextField
              :label="field.label"
              :model-value="modelValue[field.key]"
              :rules="field.rules"
              clearable
              @update:modelValue="(value) => updateField(field.key, value)"
            />
          </div>

          <div v-if="field.type === 'textArea'">
            <VTextarea
              :label="field.label"
              :model-value="modelValue[field.key]"
              :rules="field.rules"
              clearable
              @update:modelValue="(value) => updateField(field.key, value)"
              multi-line
              rows="4"
            />
          </div>

          <div v-else-if="field.type === 'select'">
            <VSelect
              :label="field.label"
              :model-value="modelValue[field.key]"
              :rules="field.rules"
              @change="(e) => updateField(field.key, e.target.value)"
              :items="field.options"
            />
          </div>
        </VCol>
      </VRow>

      <VDivider class="my-6" />

      <div class="d-flex justify-space-between mt-4">
        <VBtn color="light-on-primary" @click="goBack" variant="tonal">
          {{ $t("common.btn.back") }}
        </VBtn>
        <VBtn type="submit" :disabled="loadingStore.isLoading" color="primary">
          {{ $t("common.btn.save") }}

          <VExpandXTransition>
            <div v-if="loadingStore.isLoading" class="ml-2">
              <VIcon
                style="
                  display: inline-block;
                  animation: spin 1s linear infinite;
                "
              >
                tabler-loader-2
              </VIcon>
            </div>
          </VExpandXTransition>
        </VBtn>
      </div>
    </VCard>
  </VForm>
</template>

<script setup>
import { ECommon } from "@/enums";

const props = defineProps({
  schema: Array,
  modelValue: Object,
  path: ECommon.MasterDataPathName,
});

const emit = defineEmits(["update:modelValue", "submit"]);

const loadingStore = useLoadingStore();
const router = useRouter();

const formRef = ref(null);
const form = ref({ ...props.modelValue });

const updateField = (key, value) => {
  emit("update:modelValue", {
    ...props.modelValue,
    [key]: value,
  });
};

const submit = async () => {
  const { valid } = await formRef.value.validate();

  if (valid) {
    emit("submit", form.value);
  }
};

const goBack = () => {
  router.push(`/master-data/${props.path}`);
};
</script>

<style>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
