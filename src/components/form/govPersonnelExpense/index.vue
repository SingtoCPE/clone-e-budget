<template>
  <VCard rounded="md" class="pa-6">
    <VCardTitle class="text-h5 text-center font-weight-bold pt-0 pl-0">
      {{
        $t("form.governmentPersonnelExpense.title", {
          year: selectedYears.length
            ? selectedYears[selectedYears.length - 1] + 543
            : "",
        })
      }}

      <div class="font-weight-regular">
        {{ $t("form.governmentPersonnelExpense.subTitle") }}
      </div>
    </VCardTitle>
    <VCardText class="pl-0 mt-4">
      <VRow>
        <VCol class="py-1" cols="12">
          <b>{{ $t("form.ministry") }} : </b> {{ "กระทรวง..." }}
        </VCol>
        <VCol class="py-1" cols="12">
          <b>{{ $t("form.agency") }} : </b> {{ "หน่วนงาน..." }}
        </VCol>
        <VCol class="py-1" cols="12">
          <b>{{ $t("form.agencyType") }} : </b> {{ "ประเภทหน่วนงาน..." }}
        </VCol>
      </VRow>
    </VCardText>

    <VRow class="mt-2">
      <VCol class="py-1" cols="12" md="6">
        <VSelect
          v-model="selectedYear"
          :items="years"
          :label="$t('form.governmentPersonnelExpense.input.selectYear')"
          :class="['mb-4', isActive ? 'attention-input' : '']"
          chips
          @click="isActive = false"
        >
        </VSelect>
      </VCol>
      <VCol
        v-if="selectedYears.length === 3"
        class="py-1 text-end"
        cols="12"
        md="6"
      >
        <VBtn
          color="light-on-primary"
          variant="tonal"
          class="mr-4"
          @click="cancelProcess"
        >
          {{ $t("common.btn.cancel") }}
        </VBtn>
        <VBtn>{{ $t("common.btn.save") }}</VBtn>
      </VCol>
    </VRow>

    <GovPersonnelExpenseTable :selectedYears="selectedYears" />
  </VCard>
</template>
<script setup>
const selectedYear = ref();
const currentYear = new Date().getFullYear();

const years = Array.from({ length: 21 }, (_, i) => {
  const yearAD = currentYear - 10 + i;

  return {
    title: yearAD + 543,
    value: yearAD,
  };
}).reverse();

const selectedYears = computed(() => {
  if (!selectedYear.value) return [];

  return [selectedYear.value - 2, selectedYear.value - 1, selectedYear.value];
});

const isActive = ref(true);

const getDefaultForm = () => ({
  // 1
  onePointOneOne: [
    { type: "old", values: [] },
    { type: "new", values: [] },
  ],
  onePointOneTwo: [
    { type: "position", values: [] },
    { type: "monthly", values: [] },
  ],
  onePointTwoOne: [{ type: "old", values: [] }],
  onePointTwoTwo: [{ type: "monthly", values: [] }],
  onePointThreeOne: [
    { type: "old", values: [] },
    { type: "new", values: [] },
  ],
  onePointThreeTwo: [
    { type: "old", values: [] },
    { type: "new", values: [] },
  ],
  onePointFourOne: [
    { type: "old", values: [] },
    { type: "new", values: [] },
  ],
  onePointFourTwo: [
    { type: "old", values: [] },
    { type: "new", values: [] },
  ],

  // 2
  TwoPointOneOne: [
    { type: "old", values: [] },
    { type: "new", values: [] },
  ],
  TwoPointOneTwo: [
    { type: "old", values: [] },
    { type: "new", values: [] },
  ],
});

const budgetForm = ref(getDefaultForm());

provide("budgetForm", budgetForm);

const cancelProcess = () => {
  selectedYear.value = null;

  budgetForm.value = getDefaultForm();
};
</script>

<style scoped>
:deep(.attention-input .v-field) {
  border-radius: 6px;
  animation: pulse 1.8s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(115, 103, 240, 0.5);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(115, 103, 240, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(115, 103, 240, 0);
  }
}
</style>
