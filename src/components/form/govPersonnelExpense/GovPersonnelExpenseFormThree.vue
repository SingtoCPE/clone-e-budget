<template>
  <tr class="disabled-background">
    <td class="font-weight-bold">3. งบเงินอุดหนุน</td>
    <template v-for="(year, index) in selectedYears" :key="index">
      <td></td>
      <td></td>
      <td></td>
    </template>

    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
<script setup>
const props = defineProps({
  selectedYears: Array,
});

const form = inject("budgetForm");

const useSection = (key) =>
  computed({
    get: () => form.value[key],
    set: (val) => (form.value[key] = val),
  });

const section211 = useSection("TwoPointOneOne");
const section212 = useSection("TwoPointOneTwo");

watch(
  () => props.selectedYears,
  (newYears) => {
    if (!newYears?.length) return;

    section211.value.forEach((row) => {
      row.values = newYears.map(() => ({
        col1: "",
        col2: "",
        col3: "",
      }));
    });

    section212.value.forEach((row) => {
      row.values = newYears.map(() => ({
        col1: "",
        col2: "",
        col3: "",
      }));
    });
  },
  { immediate: true },
);

const addRow = (key) => {
  form.value[key].push({
    type: "newOrder",
    values: initRow(),
  });
};

const deleteRow = (key, index) => {
  form.value[key].splice(index, 1);
};

const initRow = () => {
  return props.selectedYears.map(() => ({
    col1: "",
    col2: "",
    col3: "",
  }));
};

const addExplanation = (index) => {};

const getLabelOne = (row, index) => {
  if (row.type === "old") return "(1) อัตราเดิม";
  if (row.type === "new") return "(2) อัตราใหม่";
  return `(${index + 1}) รายการใหม่`;
};

const getLabelOnePointTwo = (row, index) => {
  if (row.type === "position") return "(1) เงินประจำตำแหน่ง";
  if (row.type === "monthly") return "(2) ค่าตอบแทนรายเดือน";
  return `(${index + 1}) รายการใหม่`;
};
</script>

<style lang="scss" scoped>
.budget-table td {
  border: 1px solid #e0e0e0;
  padding: 6px;
}

.budget-table td:first-child {
  border-left: none;
}

.budget-table td:last-child {
  border-right: none;
}

.disabled-background {
  background-color: #eeeeee;
}

.enable-background {
  background-color: white;
}
</style>
