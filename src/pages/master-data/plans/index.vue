<template lang="">
  <div>
    <div class="d-flex justify-end mb-6">
      <VBtn color="primary" @click="$router.push('/master-data/plans/create')">
        {{ $t("common.btn.create") }}
      </VBtn>
    </div>
    <VCard rounded="md">
      <VDataTable
        :headers="headers"
        :items="responseData"
        item-key="id"
        class="table_header_grey"
        hover
      >
        <template #item.actions="{ item }">
          <div class="d-flex justify-space-between">
            <VIcon
              :icon="'tabler-file-description'"
              variant="text"
              class="details_icon"
              @click="$router.push(`/master-data/plans/${item.id}`)"
            />
            <VIcon
              :icon="'tabler-edit'"
              variant="text"
              class="edit_icon"
              @click="$router.push(`/master-data/plans/${item.id}/edit`)"
            />

            <VIcon
              :icon="'tabler-trash'"
              variant="text"
              class="delete_icon"
              @click="onDelete(item)"
            />
          </div>
        </template>
      </VDataTable>
    </VCard>
  </div>

  <ConfirmDialog
    v-model:is-dialog-visible="isConfirmDialogVisible"
    v-bind="confirmDialogInfo"
    @confirm="handleDeleteConfirmation"
  />
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t: $t } = useI18n();
const api = usePlansApi();
const { execute } = useApiRequest();

const messages = inject("toast");

const headers = computed(() => [
  { title: $t("common.table.header.id"), key: "id", width: "10%" },
  { title: $t("common.table.header.name"), key: "name", width: "35%" },
  {
    title: $t("common.table.header.description"),
    key: "description",
    width: "40%",
  },
  { title: $t("common.table.header.actions"), key: "actions", width: "15%" },
]);

const confirmDialogInfo = computed(() => ({
  confirmationQuestion: $t("common.modal.delete.title"),
}));

const responseData = ref([]);
const isConfirmDialogVisible = ref(false);
const deleteId = ref();

// functions
const onDelete = async (item) => {
  isConfirmDialogVisible.value = true;
  deleteId.value = item.id;
};

const handleDeleteConfirmation = async (isConfirmed) => {
  if (isConfirmed) {
    try {
      await execute(() => api.remove(deleteId.value));

      messages.value = {
        title: $t("common.toast.success"),
        text: $t("common.toast.methodSuccess", {
          method: $t("common.toast.delete"),
        }),
        color: "success",
        prependIcon: "tabler-circle-check",
      };

      getList();
    } catch (err) {
      messages.value = {
        title: $t("common.toast.error"),
        text: $t("common.toast.methodError", {
          method: $t("common.toast.delete"),
        }),
        color: "error",
        prependIcon: "tabler-circle-x",
      };
    }
  }
};

const getList = async () => {
  await execute(() => api.getList())
    .then((res) => {
      responseData.value = res.data;
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

getList();
</script>
