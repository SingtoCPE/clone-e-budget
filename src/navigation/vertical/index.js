import { ECommon, EIcon } from "@/enums";

const pathName = {
  [ECommon.PathName.Dashboard]: `${ECommon.PathName.Dashboard}`,
};

const masterDataPathName = {
  [ECommon.MasterDataPathName.Activities]:
    `/${ECommon.PathName.MasterData}/${ECommon.MasterDataPathName.Activities}`,
  [ECommon.MasterDataPathName.AreaBased]:
    `/${ECommon.PathName.MasterData}/${ECommon.MasterDataPathName.AreaBased}`,
  [ECommon.MasterDataPathName.BudgetCategories]:
    `/${ECommon.PathName.MasterData}/${ECommon.MasterDataPathName.BudgetCategories}`,
  [ECommon.MasterDataPathName.NationalStrategies]:
    `/${ECommon.PathName.MasterData}/${ECommon.MasterDataPathName.NationalStrategies}`,
  [ECommon.MasterDataPathName.Organizations]:
    `/${ECommon.PathName.MasterData}/${ECommon.MasterDataPathName.Organizations}`,
  [ECommon.MasterDataPathName.OutputProjects]:
    `/${ECommon.PathName.MasterData}/${ECommon.MasterDataPathName.OutputProjects}`,
  [ECommon.MasterDataPathName.Plans]:
    `/${ECommon.PathName.MasterData}/${ECommon.MasterDataPathName.Plans}`,
  [ECommon.MasterDataPathName.RiverBasins]:
    `/${ECommon.PathName.MasterData}/${ECommon.MasterDataPathName.RiverBasins}`,
  [ECommon.MasterDataPathName.RoyalInitiativeTypes]:
    `/${ECommon.PathName.MasterData}/${ECommon.MasterDataPathName.RoyalInitiativeTypes}`,
};

const formPathName = {
  [ECommon.FormPathName.ExpenseBudgetDraft]:
    `/${ECommon.PathName.Form}/${ECommon.FormPathName.ExpenseBudgetDraft}`,
  [ECommon.FormPathName.GovPersonnelExpense]:
    `/${ECommon.PathName.Form}/${ECommon.FormPathName.GovPersonnelExpense}`,
};

export default [
  {
    title: "menu.dashboard",
    to: { name: pathName[ECommon.PathName.Dashboard] },
    icon: { icon: EIcon.Icon.Dashboard },
  },
  {
    title: "menu.masterData.title",
    icon: { icon: EIcon.Icon.Database },
    children: [
      {
        title: "menu.masterData.activities",
        to: { path: masterDataPathName[ECommon.MasterDataPathName.Activities] },
        icon: { icon: EIcon.Icon.ArrowRight },
      },
      {
        title: "menu.masterData.areaBased",
        to: { path: masterDataPathName[ECommon.MasterDataPathName.AreaBased] },
        icon: { icon: EIcon.Icon.ArrowRight },
      },
      {
        title: "menu.masterData.budgetCategories",
        to: {
          path: masterDataPathName[ECommon.MasterDataPathName.BudgetCategories],
        },
        icon: { icon: EIcon.Icon.ArrowRight },
      },
      {
        title: "menu.masterData.nationalStrategies",
        to: {
          path: masterDataPathName[
            ECommon.MasterDataPathName.NationalStrategies
          ],
        },
        icon: { icon: EIcon.Icon.ArrowRight },
      },
      {
        title: "menu.masterData.organizations",
        to: {
          path: masterDataPathName[ECommon.MasterDataPathName.Organizations],
        },
        icon: { icon: EIcon.Icon.ArrowRight },
      },
      {
        title: "menu.masterData.outputProjects",
        to: {
          path: masterDataPathName[ECommon.MasterDataPathName.OutputProjects],
        },
        icon: { icon: EIcon.Icon.ArrowRight },
      },
      {
        title: "menu.masterData.plans",
        to: { path: masterDataPathName[ECommon.MasterDataPathName.Plans] },
        icon: { icon: EIcon.Icon.ArrowRight },
      },
      {
        title: "menu.masterData.riverBasins",
        to: {
          path: masterDataPathName[ECommon.MasterDataPathName.RiverBasins],
        },
        icon: { icon: EIcon.Icon.ArrowRight },
      },
      {
        title: "menu.masterData.royalInitiativeTypes",
        to: {
          path: masterDataPathName[
            ECommon.MasterDataPathName.RoyalInitiativeTypes
          ],
        },
        icon: { icon: EIcon.Icon.ArrowRight },
      },
    ],
  },
  {
    title: "menu.form.title",
    icon: { icon: EIcon.Icon.FileSpreadsheet },
    children: [
      {
        title: "menu.form.expenseBudgetDraft",
        to: { path: formPathName[ECommon.FormPathName.ExpenseBudgetDraft] },
        icon: { icon: EIcon.Icon.ArrowRight },
      },
      {
        title: "menu.form.governmentPersonnelExpense",
        to: { path: formPathName[ECommon.FormPathName.GovPersonnelExpense] },
        icon: { icon: EIcon.Icon.ArrowRight },
      },
    ],
  },
];
