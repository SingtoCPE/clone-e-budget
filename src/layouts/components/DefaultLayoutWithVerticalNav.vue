<script setup>
import navItems from "@/navigation/vertical";
import { themeConfig } from "@themeConfig";

// Components
import Footer from "@/layouts/components/Footer.vue";
import NavbarThemeSwitcher from "@/layouts/components/NavbarThemeSwitcher.vue";
import UserProfile from "@/layouts/components/UserProfile.vue";
import NavBarI18n from "@core/components/I18n.vue";

// @layouts plugin
import { VerticalNavLayout } from "@layouts";

import { ECommon, EIcon } from "@/enums";

import _camelCase from "lodash/camelCase";
import _kebabCase from "lodash/kebabCase";
import { useI18n } from "vue-i18n";

const { t: $t } = useI18n();
const route = useRoute();

const routeIconMap = {
  [ECommon.PathName.Dashboard]: EIcon.Icon.Dashboard,
  [ECommon.PathName.MasterData]: EIcon.Icon.Database,
  [ECommon.PathName.Form]: EIcon.Icon.FileSpreadsheet,
};

const firstIcon = computed(() => {
  if (!route.matched.length) return "";

  const path = _kebabCase(route.matched[0]?.path);

  return routeIconMap[path] || "tabler-circle"; // fallback
});

const firstRoute = computed(() => {
  if (!route.matched.length) return "";

  const path = _camelCase(route.matched[0]?.path);

  const pathForCheck = _kebabCase(route.matched[0]?.path);

  if (pathForCheck === ECommon.PathName.MasterData) {
    return $t("menu.masterData.title");
  }

  if (pathForCheck === ECommon.PathName.Form) {
    return $t("menu.form.title");
  }

  return $t(`menu.${path || "home"}`);
});

const breadcrumbs = computed(() => {
  if (!route.path) return [];

  const segments = route.path.replace(/^\//, "").split("/");

  let currentPath = "";

  const pathForCheck = _kebabCase(route.matched[0]?.path);

  if (pathForCheck === ECommon.PathName.MasterData) {
    return segments.flatMap((seg, index) => {
      // ตัวแรก
      if (index === 0) {
        currentPath += `/${seg}`;
        return [
          {
            title: $t("menu.masterData.title"),
            to: route.matched[1]?.path,
          },
        ];
      }

      const isId = /^[0-9]+$/.test(seg) || seg.length > 20;
      const isLast = index === segments.length - 1;

      // ถ้าเป็น id และเป็นตัวสุดท้าย → detail
      if (isId && isLast) {
        return [
          {
            title: $t(`menu.masterData.detail`),
          },
        ];
      }

      // ถ้าเป็น id แต่ไม่ใช่ตัวสุดท้าย (เช่น /123/edit) → ข้าม
      if (isId) return [];

      currentPath += `/${seg}`;

      return [
        {
          title: $t(`menu.masterData.${_camelCase(seg)}`),
          to: currentPath,
        },
      ];
    });
  }

  if (pathForCheck === ECommon.PathName.Form) {
    return segments.flatMap((seg, index) => {
      // ตัวแรก
      if (index === 0) {
        currentPath += `/${seg}`;
        return [
          {
            title: $t("menu.form.title"),
            to: route.matched[1]?.path,
          },
        ];
      }

      const isId = /^[0-9]+$/.test(seg) || seg.length > 50;
      const isLast = index === segments.length - 1;

      // ถ้าเป็น id และเป็นตัวสุดท้าย → detail
      if (isId && isLast) {
        return [
          {
            title: $t(`menu.form.detail`),
          },
        ];
      }

      // ถ้าเป็น id แต่ไม่ใช่ตัวสุดท้าย (เช่น /123/edit) → ข้าม
      if (isId) return [];

      currentPath += `/${seg}`;

      return [
        {
          title: $t(`menu.form.${_camelCase(seg)}`),
          to: currentPath,
        },
      ];
    });
  }

  return segments.map((seg) => {
    currentPath += `/${seg}`;

    return {
      title: $t(`menu.${_camelCase(seg)}`),
      to: currentPath,
    };
  });
});
</script>

<style>
.v-breadcrumbs-divider {
  padding: 0px 0px !important;
}
</style>

<template>
  <VerticalNavLayout :nav-items="navItems">
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <IconBtn
          id="vertical-nav-toggle-btn"
          class="ms-n3 d-lg-none"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon size="26" icon="tabler-menu-2" />
        </IconBtn>

        <VIcon :icon="firstIcon" class="mr-2" />

        <h1 class="text-h5 d-none d-lg-block font-weight-bold mb-0">
          {{ firstRoute }}
        </h1>

        <VSpacer />

        <NavbarThemeSwitcher />
        <NavBarI18n
          v-if="
            themeConfig.app.i18n.enable &&
            themeConfig.app.i18n.langConfig?.length
          "
          :languages="themeConfig.app.i18n.langConfig"
        />
        <UserProfile />
      </div>
    </template>

    <VBreadcrumbs
      class="pa-0 pb-4 pb-md-2 pl-md-6"
      color="primary"
      :items="breadcrumbs"
    >
      <template v-slot:divider>
        <VIcon icon="tabler-chevron-right"></VIcon>
      </template>
    </VBreadcrumbs>

    <!-- 👉 Pages -->
    <slot />

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <!-- <TheCustomizer /> -->
  </VerticalNavLayout>
</template>
