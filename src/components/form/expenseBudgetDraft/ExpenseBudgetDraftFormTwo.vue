<template>
  <tr class="disabled-background">
    <td class="font-weight-bold">2. งบดำเนินงาน</td>
    <template v-for="(year, index) in selectedYears" :key="index">
      <td></td>
      <td></td>
      <td></td>
    </template>

    <td></td>
    <td></td>
    <td></td>
  </tr>

  <!-- 2.1 -->
  <tr class="disabled-background">
    <td class="pl-4 font-weight-bold">2.1 ค่าตอบแทน ใช้สอยและวัสดุ</td>
    <template v-for="(year, index) in selectedYears" :key="index">
      <td></td>
      <td></td>
      <td></td>
    </template>

    <td></td>
    <td></td>
    <td></td>
  </tr>

  <tr class="disabled-background">
    <td class="pl-8 font-weight-bold">2.1.1 ค่าตอบแทน</td>
    <template v-for="(year, index) in selectedYears" :key="index">
      <td></td>
      <td></td>
      <td></td>
    </template>

    <td></td>
    <td></td>
    <td></td>
  </tr>

  <tr
    v-for="(row, rowIndex) in section211"
    :key="rowIndex"
    class="enable-background"
  >
    <td class="pl-12">
      <div class="d-flex justify-space-between align-center">
        <div style="height: 100%">
          {{ getLabelOne(row, rowIndex) }}
        </div>

        <div style="height: 100%">
          <VBtn
            v-if="rowIndex > 1"
            variant="text"
            icon="tabler-minus"
            color="error"
            @click="deleteRow('TwoPointOneOne', rowIndex)"
            size="small"
          />
        </div>
      </div>
    </td>

    <template v-for="(year, colIndex) in selectedYears" :key="colIndex">
      <td>
        <VTextField v-model="row.values[colIndex].col1" type="number" />
      </td>
      <td>
        <VTextField v-model="row.values[colIndex].col2" type="number" />
      </td>
      <td>
        <VTextField v-model="row.values[colIndex].col3" type="number" />
      </td>
    </template>

    <td class="disabled-background"></td>
    <td class="disabled-background"></td>
    <td class="text-center">
      <VBtn
        variant="text"
        icon="tabler-edit"
        color="black"
        @click="addExplanation(rowIndex)"
        size="small"
      />
    </td>
  </tr>
  <tr>
    <td colspan="100%">
      <VBtn
        text
        color="success-darken-1"
        @click="addRow('TwoPointOneOne')"
        size="small"
      >
        + เพิ่มรายการ
      </VBtn>
    </td>
  </tr>

  <tr class="disabled-background">
    <td class="pl-8 font-weight-bold">2.1.2 ค่าใช้สอย</td>
    <template v-for="(year, index) in selectedYears" :key="index">
      <td></td>
      <td></td>
      <td></td>
    </template>

    <td></td>
    <td></td>
    <td></td>
  </tr>

  <tr
    v-for="(row, rowIndex) in section212"
    :key="rowIndex"
    class="enable-background"
  >
    <td class="pl-12">
      <div class="d-flex justify-space-between align-center">
        <div style="height: 100%">
          {{ getLabelOne(row, rowIndex) }}
        </div>

        <div style="height: 100%">
          <VBtn
            v-if="rowIndex > 1"
            variant="text"
            icon="tabler-minus"
            color="error"
            @click="deleteRow('TwoPointOneTwo', rowIndex)"
            size="small"
          />
        </div>
      </div>
    </td>

    <template v-for="(year, colIndex) in selectedYears" :key="colIndex">
      <td>
        <VTextField v-model="row.values[colIndex].col1" type="number" />
      </td>
      <td>
        <VTextField v-model="row.values[colIndex].col2" type="number" />
      </td>
      <td>
        <VTextField v-model="row.values[colIndex].col3" type="number" />
      </td>
    </template>

    <td class="disabled-background"></td>
    <td class="disabled-background"></td>
    <td class="text-center">
      <VBtn
        variant="text"
        icon="tabler-edit"
        color="black"
        @click="addExplanation(rowIndex)"
        size="small"
      />
    </td>
  </tr>
  <tr>
    <td colspan="100%">
      <VBtn
        text
        color="success-darken-1"
        @click="addRow('TwoPointOneTwo')"
        size="small"
      >
        + เพิ่มรายการ
      </VBtn>
    </td>
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
