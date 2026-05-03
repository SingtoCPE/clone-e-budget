<template>
  <div v-if="selectedYears.length === 2" class="table-wrapper mt-4">
    <table class="budget-table">
      <thead>
        <tr>
          <th class="text-center" rowspan="2" style="width: 25%">รายการ</th>
          <th
            v-for="year in selectedYears"
            :key="year"
            class="text-center"
            colspan="3"
          >
            ปี {{ year + 543 }}
          </th>
          <th class="text-center" colspan="2" rowspan="2">เพิ่ม/ลด</th>
          <th class="text-center" rowspan="2">คำชี้แจง</th>
        </tr>
        <tr>
          <template
            v-for="(year, index) in selectedYears"
            :key="year + '-cols'"
          >
            <th class="text-center" style="width: 10%">
              <div>ปริมาณ</div>
              <div class="font-weight-regular">[หน่วยนับ]</div>
            </th>
            <th class="text-center" style="width: 12%">
              <div>งบประมาณ</div>
              <div class="font-weight-regular">
                {{ index === 0 ? "(พ.ร.บ.)" : "(คำขอ)" }}
              </div>
            </th>
            <th class="text-center" style="width: 12%">เงินนอกงบประมาณ</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr class="disabled-background">
          <td class="font-weight-bold">รวมทั้งสิ้น</td>

          <template v-for="(year, index) in selectedYears" :key="index">
            <td></td>
            <td></td>
            <td></td>
          </template>

          <td></td>
          <td></td>
          <td></td>
        </tr>

        <ExpenseBudgetDraftFormOne :selectedYears="selectedYears" />

        <ExpenseBudgetDraftFormTwo :selectedYears="selectedYears" />

        <ExpenseBudgetDraftFormThree :selectedYears="selectedYears" />

        <ExpenseBudgetDraftFormFour :selectedYears="selectedYears" />
      </tbody>
    </table>
  </div>
</template>
<script setup>
const props = defineProps({
  selectedYears: Array,
});
</script>

<style lang="scss" scoped>
.table-wrapper {
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  width: 100%;
  overflow-x: auto;
}

.budget-table {
  border-collapse: collapse;
  width: 100%;
}

.budget-table th {
  border: 1px solid #e0e0e0;
  border-top: 0px;
  padding: 6px;
}

.budget-table th:first-child {
  border-left: none;
}

.budget-table th:last-child {
  border-right: none;
}

.budget-table td:first-child {
  border-left: none;
}

.budget-table td:last-child {
  border-right: none;
}

.budget-table td {
  border: 1px solid #e0e0e0;
  padding: 6px;
}

.disabled-background {
  background-color: #eeeeee;
}
</style>
