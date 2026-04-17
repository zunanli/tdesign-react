# Data Classification — 5 PR Split Plan

Source: [PR #8726](https://github.com/upwindsecurity/frontend-monorepo/pull/8726) (74 files)

**Totals:** Foundation 24 + standalone deletion 1 + PR2 9 + PR3 10 + PR4 21 + PR5 9 = 74

**Legend:** `M` modified · `A` added · `D` deleted

**Dependency graph:** `PR2, PR3, PR4, PR5 → PR1`. The four feature PRs share no files and no symbol-level dependencies with each other, so they can merge in any order once Foundation lands.

---

## PR 1 · Foundation (24)

> Shared types, API surface, shared UI components and hooks.
> With feature flag `console-data-classifications` off, Foundation has zero behavioral impact on `main`.

### DataModel (5)
- M `packages/console/src/DataModel/AiChat/AiSummaryPromptTypes.ts`
- M `packages/console/src/DataModel/DataClassificationTypes/ClassificationScopeFilterTypes.ts`
- M `packages/console/src/DataModel/DataClassificationTypes/ClassificationTypes.ts`
- M `packages/console/src/DataModel/Filters/Views/ViewsTypes.ts`
- M `packages/console/src/DataModel/Objects/DataClassification/Classification.ts`

### ServerAPI (2)
- M `packages/console/src/ServerAPI/Requests/DataClassification/DataClassification.ts`
- M `packages/console/src/ServerAPI/Requests/DataClassification/dataClassificationTypes.ts`

### Shared Components / Hooks (6)
- M `packages/console/src/components/ConsoleFilterBar/FilterIconsConfiguration.tsx`
- A `packages/console/src/components/DataClassifications/ClassificationCapabilitiesInteractive/ClassificationCapabilitiesInteractive.tsx`
- A `packages/console/src/components/DataClassifications/ClassificationCapabilitiesInteractive/ClassificationCapabilitiesCell.tsx`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/DisableItemModal.tsx`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/CreateDataClassificationSidePane/ClassificationPatternsSection/PatternEntryRow.tsx`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/CreateDataClassificationSidePane/hooks/useAiRegexGenerator.ts`

### ReporterSource Shared (2)
- A `packages/console/src/components/ReporterSource/ReporterSourceBadgeIcon.tsx`
- M `packages/console/src/components/Tables/VulnerabilitiesTables/NestedTables/asyncCellComponents/SourceCell/SourceCell.tsx`

### Scope / Capabilities Shared (6)
- M `packages/console/src/pages/DataPage/components/DataClassificationsTab/components/DataClassificationScopeSelection/DataClassificationScopeViewSection.tsx`
- M `packages/console/src/pages/DataPage/components/DataClassificationsTab/components/DataClassificationScopeSelection/ScopeViewConditionRow.tsx`
- A `packages/console/src/pages/DataPage/components/DataClassificationsTab/components/DataClassificationScopeSelection/hooks/useFileTypeOptions.tsx`
- M `packages/console/src/pages/DataPage/components/DataClassificationsTab/components/DataClassificationScopeSelection/hooks/useFilterValueOptions.ts`
- M `packages/console/src/pages/DataPage/components/DataClassificationsTab/components/DataClassificationScopeSelection/scopeSelectionUtils.ts`
- M `packages/console/src/pages/DataPage/components/DataClassificationsTab/components/SelectClassificationCapabilities/SelectClassificationCapabilities.tsx`

### shared-library (3)
- M `packages/shared-library/src/DataModelCore/Filters/filterTypesDictionary.ts`
- M `packages/shared-library/src/components/InputSearchAi/InputSearchAi.tsx`
- M `packages/shared-library/src/components/TableCells/DefaultBadgeCodeCell/DefaultBadgeCodeCell.tsx`

---

## Standalone commit (1)

- D `packages/console/src/ServerAPI/Requests/DataClassification/DataClassificationApiStructure.md`

---

## PR 2 · Main Table (9)

> Data page entry point, main classifications table, column definitions and tab shell.

- M `packages/console/src/DataModel/DataPageModel/ClassificationsFilterConfig.ts`
- M `packages/console/src/components/UpwindPageLayout/UpwindPageLayout.tsx`
- M `packages/console/src/pages/DataPage/DataPage.tsx`
- M `packages/console/src/pages/DataPage/components/DataClassificationsTab/DataClassificationsTab.tsx`
- M `packages/console/src/pages/DataPage/components/DataClassificationsTab/ClassificationsTable/ClassificationsTableColumnDefs.ts`
- M `packages/console/src/pages/DataPage/components/DataClassificationsTab/ClassificationsTable/components/ClassificationCategoryCell.tsx`
- D `packages/console/src/pages/DataPage/components/DataClassificationsTab/ClassificationsTable/components/ClassificationCapabilitiesCell.tsx`
- M `packages/console/src/pages/DataPage/components/DataPageHeader/DataPageHeader.tsx`
- M `packages/console/src/pages/IdentitiesPage/IdentitiesTabs/MachinesTab/MachineInnerTabs/ExposedSecretsGeneralPage/ExposedSecrets.tsx`

---

## PR 3 · Create Sidepane (10)

> Create-classification side pane and pattern testing.

- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/CreateDataClassificationSidePane/ClassificationPatternsSection/CapabilitiesOverrideSection.tsx`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/CreateDataClassificationSidePane/ClassificationPatternsSection/ClassificationPatternsSection.tsx`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/CreateDataClassificationSidePane/ClassificationPatternsSection/ExistingClassificationBadges.tsx`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/CreateDataClassificationSidePane/CreateClassificationBanner/CreateClassificationBanner.tsx`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/CreateDataClassificationSidePane/CreateClassificationBanner/createDataClassification-dark.png`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/CreateDataClassificationSidePane/CreateDataClassificationSidePane.tsx`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/CreateDataClassificationSidePane/SelectClassificationCapabilitiesSection/SelectClassificationCapabilitiesSection.tsx`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/CreateDataClassificationSidePane/SelectClassificationCategory/SelectClassificationCategory.tsx`
- M `packages/console/src/pages/DataPage/components/DataClassificationsTab/components/TestPatternSection/TestPatternSection.tsx`
- M `packages/console/src/pages/DataPage/components/DataClassificationsTab/components/TestPatternSection/test-pattern-section.scss`

---

## PR 4 · Detail Sidepane (21)

> Classification detail side pane, Patterns tab, Findings section.

### Filter configs (3)
- A `packages/console/src/DataModel/DataPageModel/ClassificationFindingsFilterConfig.ts`
- A `packages/console/src/DataModel/DataPageModel/ClassificationFindingsFilterIconConfig.tsx`
- A `packages/console/src/DataModel/DataPageModel/ClassificationPatternsFilterConfig.ts`

### Sidepane shell (4)
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationDetailsOverviewTab.tsx`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationDetailsSettingsTab.tsx`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationDetailsSidePane.tsx`
- D `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/DisableClassificationModal.tsx`

### Patterns tab (7)
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/ClassificationDetailsPatternsTab.tsx`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/ClassificationPatternsTable/ClassificationPatternsTable.tsx`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/ClassificationPatternsTable/ClassificationPatternsTableColumnDefs.ts`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/ClassificationPatternsTable/PatternActionsCell.tsx`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/EditPatternModal/AddPatternModal.tsx`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/EditPatternModal/DeletePatternModal.tsx`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/EditPatternModal/EditPatternModal.tsx`

### Findings section (7)
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsSection.tsx`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsTable/ClassificationFindingsTable.tsx`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsTable/ClassificationFindingsTableColumnDefs.ts`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsTable/cells/ClassificationFindingDataStateCell.tsx`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsTable/cells/ClassificationFindingLocationCell.tsx`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsTable/cells/ClassificationFindingSecurityIssuesCell.tsx`
- A `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsTable/cells/ClassificationFindingSourceCell.tsx`

---

## PR 5 · Global Exclusion (9)

> Global exclusion side pane. Contains breaking type changes in `globalExclusionTypes.ts`; all producers and consumers ship together in this PR.

- M `packages/console/src/DataModel/DataPageModel/GlobalExclusionsFilterConfig.ts`
- M `packages/console/src/ServerAPI/Requests/DataClassification/GlobalExclusion.ts`
- M `packages/console/src/ServerAPI/Requests/DataClassification/globalExclusionTypes.ts`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/GlobalExclusionsSidePane/GlobalExclusionsSidePane.tsx`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/GlobalExclusionsSidePane/GlobalExclusionModal/GlobalExclusionModal.tsx`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/GlobalExclusionsSidePane/GlobalExclusionsTable/GlobalExclusionActionsCell.tsx`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/GlobalExclusionsSidePane/GlobalExclusionsTable/GlobalExclusionsTable.tsx`
- M `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/GlobalExclusionsSidePane/GlobalExclusionsTable/GlobalExclusionsTableColumnDefs.ts`
- D `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/GlobalExclusionsSidePane/GlobalExclusionsTable/GlobalExclusionCapabilitiesCell.tsx`

---

## File overlap check

| PR | Unique paths | Overlap with PR1 |
| --- | --- | --- |
| PR1 Foundation | 24 + 1 deletion | — |
| PR2 Main Table | 9 | 0 |
| PR3 Create Sidepane | 10 | 0 |
| PR4 Detail Sidepane | 21 | 0 |
| PR5 Global Exclusion | 9 | 0 |

### Same-name, different-path items (not conflicts)

| Case | PR1 path | PR2/4/5 path | Note |
| --- | --- | --- | --- |
| Unified capabilities cell | A `components/DataClassifications/ClassificationCapabilitiesInteractive/ClassificationCapabilitiesCell.tsx` | D `pages/DataPage/.../ClassificationsTable/components/ClassificationCapabilitiesCell.tsx` (PR2)<br>D `.../GlobalExclusionsTable/GlobalExclusionCapabilitiesCell.tsx` (PR5) | Same filename but different path. Old file deletions ship with their respective consumer PR. |
| Disable modal generalization | A `.../ClassificationDetailsSidePane/DisableItemModal.tsx` | D `.../ClassificationDetailsSidePane/DisableClassificationModal.tsx` (PR4) | Same directory, different filenames — git treats them as independent files. |

> File independence is not the same as symbol independence. PR2/3/4/5 all import types, components, and hooks from Foundation. Merging them before Foundation would cause compile failures. After Foundation lands, the four feature PRs are order-independent.
