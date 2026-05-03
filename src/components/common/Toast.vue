<template>
  <v-snackbar
    v-model="show"
    :color="messages.color || 'success'"
    :timeout="messages.timeout ?? 3000"
    location="top right"
    contained
  >
    <template #default>
      <div class="d-flex align-center gap-2">
        <v-icon v-if="messages.prependIcon" :icon="messages.prependIcon" />
        <span>{{ messages.text }}</span>
      </div>
    </template>

    <template #actions>
      <v-btn color="pink" variant="text" @click="show = false">
        {{ $t("common.toast.close") }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
const props = defineProps({
  messages: {
    type: Object,
    default: () => ({}),
  },
});

const show = ref(false);

watch(
  () => props.messages,
  (val) => {
    if (val && val.text) {
      show.value = true;
    }
  },
  { deep: true },
);
</script>
