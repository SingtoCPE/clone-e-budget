<template>
  <tr class="disabled-background">
    <td class="font-weight-bold">1. งบบุคคลากร</td>
    <template v-for="(year, index) in selectedYears" :key="index">
      <td></td>
      <td></td>
      <td></td>
    </template>

    <td></td>
    <td></td>
    <td></td>
  </tr>

  <!-- 1.1 -->
  <tr class="disabled-background">
    <td class="pl-4 font-weight-bold">
      1.1 เงินเดือน หรือที่เรียกเป็นอย่างอื่น
    </td>
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
    <td class="pl-8 font-weight-bold">1.1.1 เงินเดือน</td>
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
    v-for="(row, rowIndex) in section111"
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
            @click="deleteRow('onePointOneOne', rowIndex)"
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
        @click="addRow('onePointOneOne')"
        size="small"
      >
        + เพิ่มรายการ
      </VBtn>
    </td>
  </tr>

  <tr class="disabled-background">
    <td class="pl-8 font-weight-bold">
      1.1.2 เงินอื่นๆ ที่จ่ายควบกับเงินเดือน
    </td>
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
    v-for="(row, rowIndex) in section112"
    :key="rowIndex"
    class="enable-background"
  >
    <td class="pl-12">
      <div class="d-flex justify-space-between align-center">
        <div>
          {{ getLabelOnePointTwo(row, rowIndex) }}
        </div>

        <div>
          <VBtn
            v-if="rowIndex > 1"
            variant="text"
            icon="tabler-minus"
            color="error"
            @click="deleteRow('onePointOneTwo', rowIndex)"
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
        @click="addRow('onePointOneTwo')"
        size="small"
      >
        + เพิ่มรายการ
      </VBtn>
    </td>
  </tr>

  <!-- 1.2 -->
  <tr class="disabled-background">
    <td class="pl-4 font-weight-bold">1.2 ค่าจ้างประจำ</td>
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
    <td class="pl-8 font-weight-bold">1.2.1 ค่าจ้างประจำ</td>
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
    v-for="(row, rowIndex) in section121"
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
            v-if="rowIndex > 0"
            variant="text"
            icon="tabler-minus"
            color="error"
            @click="deleteRow('onePointTwoOne', rowIndex)"
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
        @click="addRow('onePointTwoOne')"
        size="small"
      >
        + เพิ่มรายการ
      </VBtn>
    </td>
  </tr>

  <tr class="disabled-background">
    <td class="pl-8 font-weight-bold">
      1.2.2 เงินอื่นๆ ที่จ่ายควบกับค่าจ้างประจำ
    </td>
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
    v-for="(row, rowIndex) in section122"
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
            v-if="rowIndex > 0"
            variant="text"
            icon="tabler-minus"
            color="error"
            @click="deleteRow('onePointTwoTwo', rowIndex)"
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
        @click="addRow('onePointTwoTwo')"
        size="small"
      >
        + เพิ่มรายการ
      </VBtn>
    </td>
  </tr>

  <!-- 1.3 -->
  <tr class="disabled-background">
    <td class="pl-4 font-weight-bold">1.3 ค่าจ้างชั่วคราว</td>
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
    <td class="pl-8 font-weight-bold">1.3.1 ค่าจ้างชั่วคราว</td>
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
    v-for="(row, rowIndex) in section131"
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
            @click="deleteRow('onePointThreeOne', rowIndex)"
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
        @click="addRow('onePointThreeOne')"
        size="small"
      >
        + เพิ่มรายการ
      </VBtn>
    </td>
  </tr>

  <tr class="disabled-background">
    <td class="pl-8 font-weight-bold">
      1.3.2 เงินอื่นๆ ที่จ่ายควบกับค่าจ้างชั่วคราว
    </td>
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
    v-for="(row, rowIndex) in section132"
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
            @click="deleteRow('onePointThreeTwo', rowIndex)"
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
        @click="addRow('onePointThreeTwo')"
        size="small"
      >
        + เพิ่มรายการ
      </VBtn>
    </td>
  </tr>

  <!-- 1.4 -->
  <tr class="disabled-background">
    <td class="pl-4 font-weight-bold">1.4 ค่าตอบแทนพนักงานราชการ</td>
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
    <td class="pl-8 font-weight-bold">1.4.1 ค่าตอบแทนพนักงานราชการ</td>
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
    v-for="(row, rowIndex) in section141"
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
            @click="deleteRow('onePointFourOne', rowIndex)"
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
        @click="addRow('onePointFourOne')"
        size="small"
      >
        + เพิ่มรายการ
      </VBtn>
    </td>
  </tr>

  <tr class="disabled-background">
    <td class="pl-8 font-weight-bold">
      1.4.2 เงินอื่นๆ ที่จ่ายควบกับค่าตอบแทนพนักงานราชการ
    </td>
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
    v-for="(row, rowIndex) in section142"
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
            @click="deleteRow('onePointFourTwo', rowIndex)"
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
        @click="addRow('onePointFourTwo')"
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

const section111 = useSection("onePointOneOne");
const section112 = useSection("onePointOneTwo");
const section121 = useSection("onePointTwoOne");
const section122 = useSection("onePointTwoTwo");
const section131 = useSection("onePointThreeOne");
const section132 = useSection("onePointThreeTwo");
const section141 = useSection("onePointFourOne");
const section142 = useSection("onePointFourTwo");

watch(
  () => props.selectedYears,
  (newYears) => {
    if (!newYears?.length) return;

    section111.value.forEach((row) => {
      row.values = newYears.map(() => ({
        col1: "",
        col2: "",
        col3: "",
      }));
    });

    section112.value.forEach((row) => {
      row.values = newYears.map(() => ({
        col1: "",
        col2: "",
        col3: "",
      }));
    });

    section121.value.forEach((row) => {
      row.values = newYears.map(() => ({
        col1: "",
        col2: "",
        col3: "",
      }));
    });

    section122.value.forEach((row) => {
      row.values = newYears.map(() => ({
        col1: "",
        col2: "",
        col3: "",
      }));
    });

    section131.value.forEach((row) => {
      row.values = newYears.map(() => ({
        col1: "",
        col2: "",
        col3: "",
      }));
    });

    section132.value.forEach((row) => {
      row.values = newYears.map(() => ({
        col1: "",
        col2: "",
        col3: "",
      }));
    });

    section141.value.forEach((row) => {
      row.values = newYears.map(() => ({
        col1: "",
        col2: "",
        col3: "",
      }));
    });

    section142.value.forEach((row) => {
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
