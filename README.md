# Data Classification — 5 PR Split Plan

Source: [PR #8726](https://github.com/upwindsecurity/frontend-monorepo/pull/8726) (74 files)

**Totals:** Foundation 24 + standalone deletion 1 + PR2 9 + PR3 10 + PR4 21 + PR5 9 = 74

**Legend:** `M` modified · `A` added · `D` deleted

**Path convention:**

- Default: relative to `packages/console/src/`
- `sidepanes:` prefix: relative to `packages/console/src/components/GeneralSidePane/SidePanes/DataPage/DataClassifications/`
- `shared-library:` prefix: relative to `packages/shared-library/src/`

**Dependency graph:** `PR2, PR3, PR4, PR5 → PR1`. The four feature PRs share no files and no symbol-level dependencies with each other, so they can merge in any order once Foundation lands.

---

## PR 1 · Foundation (24)

> Shared types, API surface, shared UI components and hooks.
> With feature flag `console-data-classifications` off, Foundation has zero behavioral impact on `main`.

### DataModel (5)

- M `DataModel/AiChat/AiSummaryPromptTypes.ts`
- M `DataModel/DataClassificationTypes/ClassificationScopeFilterTypes.ts`
- M `DataModel/DataClassificationTypes/ClassificationTypes.ts`
- M `DataModel/Filters/Views/ViewsTypes.ts`
- M `DataModel/Objects/DataClassification/Classification.ts`

### ServerAPI (2)

- M `ServerAPI/Requests/DataClassification/DataClassification.ts`
- M `ServerAPI/Requests/DataClassification/dataClassificationTypes.ts`

### Shared Components / Hooks (6)

- M `components/ConsoleFilterBar/FilterIconsConfiguration.tsx`
- A `components/DataClassifications/ClassificationCapabilitiesInteractive/ClassificationCapabilitiesInteractive.tsx`
- A `components/DataClassifications/ClassificationCapabilitiesInteractive/ClassificationCapabilitiesCell.tsx`
- A `sidepanes: ClassificationDetailsSidePane/DisableItemModal.tsx`
- M `sidepanes: CreateDataClassificationSidePane/ClassificationPatternsSection/PatternEntryRow.tsx`
- A `sidepanes: CreateDataClassificationSidePane/hooks/useAiRegexGenerator.ts`

### ReporterSource Shared (2)

- A `components/ReporterSource/ReporterSourceBadgeIcon.tsx`
- M `components/Tables/VulnerabilitiesTables/NestedTables/asyncCellComponents/SourceCell/SourceCell.tsx`

### Scope / Capabilities Shared (6)

- M `pages/DataPage/components/DataClassificationsTab/components/DataClassificationScopeSelection/DataClassificationScopeViewSection.tsx`
- M `pages/DataPage/components/DataClassificationsTab/components/DataClassificationScopeSelection/ScopeViewConditionRow.tsx`
- A `pages/DataPage/components/DataClassificationsTab/components/DataClassificationScopeSelection/hooks/useFileTypeOptions.tsx`
- M `pages/DataPage/components/DataClassificationsTab/components/DataClassificationScopeSelection/hooks/useFilterValueOptions.ts`
- M `pages/DataPage/components/DataClassificationsTab/components/DataClassificationScopeSelection/scopeSelectionUtils.ts`
- M `pages/DataPage/components/DataClassificationsTab/components/SelectClassificationCapabilities/SelectClassificationCapabilities.tsx`

### shared-library (3)

- M `shared-library: DataModelCore/Filters/filterTypesDictionary.ts`
- M `shared-library: components/InputSearchAi/InputSearchAi.tsx`
- M `shared-library: components/TableCells/DefaultBadgeCodeCell/DefaultBadgeCodeCell.tsx`

---

## Standalone commit (1)

- D `ServerAPI/Requests/DataClassification/DataClassificationApiStructure.md`

---

## PR 2 · Main Table (9)

> Data page entry point, main classifications table, column definitions and tab shell.

- M `DataModel/DataPageModel/ClassificationsFilterConfig.ts`
- M `components/UpwindPageLayout/UpwindPageLayout.tsx`
- M `pages/DataPage/DataPage.tsx`
- M `pages/DataPage/components/DataClassificationsTab/DataClassificationsTab.tsx`
- M `pages/DataPage/components/DataClassificationsTab/ClassificationsTable/ClassificationsTableColumnDefs.ts`
- M `pages/DataPage/components/DataClassificationsTab/ClassificationsTable/components/ClassificationCategoryCell.tsx`
- D `pages/DataPage/components/DataClassificationsTab/ClassificationsTable/components/ClassificationCapabilitiesCell.tsx`
- M `pages/DataPage/components/DataPageHeader/DataPageHeader.tsx`
- M `pages/IdentitiesPage/IdentitiesTabs/MachinesTab/MachineInnerTabs/ExposedSecretsGeneralPage/ExposedSecrets.tsx`

---

## PR 3 · Create Sidepane (10)

> Create-classification side pane and pattern testing.

- M `sidepanes: CreateDataClassificationSidePane/ClassificationPatternsSection/CapabilitiesOverrideSection.tsx`
- M `sidepanes: CreateDataClassificationSidePane/ClassificationPatternsSection/ClassificationPatternsSection.tsx`
- M `sidepanes: CreateDataClassificationSidePane/ClassificationPatternsSection/ExistingClassificationBadges.tsx`
- M `sidepanes: CreateDataClassificationSidePane/CreateClassificationBanner/CreateClassificationBanner.tsx`
- A `sidepanes: CreateDataClassificationSidePane/CreateClassificationBanner/createDataClassification-dark.png`
- M `sidepanes: CreateDataClassificationSidePane/CreateDataClassificationSidePane.tsx`
- M `sidepanes: CreateDataClassificationSidePane/SelectClassificationCapabilitiesSection/SelectClassificationCapabilitiesSection.tsx`
- M `sidepanes: CreateDataClassificationSidePane/SelectClassificationCategory/SelectClassificationCategory.tsx`
- M `pages/DataPage/components/DataClassificationsTab/components/TestPatternSection/TestPatternSection.tsx`
- M `pages/DataPage/components/DataClassificationsTab/components/TestPatternSection/test-pattern-section.scss`

---

## PR 4 · Detail Sidepane (21)

> Classification detail side pane, Patterns tab, Findings section.

### Filter configs (3)

- A `DataModel/DataPageModel/ClassificationFindingsFilterConfig.ts`
- A `DataModel/DataPageModel/ClassificationFindingsFilterIconConfig.tsx`
- A `DataModel/DataPageModel/ClassificationPatternsFilterConfig.ts`

### Sidepane shell (4)

- M `sidepanes: ClassificationDetailsSidePane/ClassificationDetailsOverviewTab.tsx`
- M `sidepanes: ClassificationDetailsSidePane/ClassificationDetailsSettingsTab.tsx`
- M `sidepanes: ClassificationDetailsSidePane/ClassificationDetailsSidePane.tsx`
- D `sidepanes: ClassificationDetailsSidePane/DisableClassificationModal.tsx`

### Patterns tab (7)

- A `sidepanes: ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/ClassificationDetailsPatternsTab.tsx`
- A `sidepanes: ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/ClassificationPatternsTable/ClassificationPatternsTable.tsx`
- A `sidepanes: ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/ClassificationPatternsTable/ClassificationPatternsTableColumnDefs.ts`
- A `sidepanes: ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/ClassificationPatternsTable/PatternActionsCell.tsx`
- A `sidepanes: ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/EditPatternModal/AddPatternModal.tsx`
- A `sidepanes: ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/EditPatternModal/DeletePatternModal.tsx`
- A `sidepanes: ClassificationDetailsSidePane/ClassificationDetailsPatternsTab/EditPatternModal/EditPatternModal.tsx`

### Findings section (7)

- A `sidepanes: ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsSection.tsx`
- A `sidepanes: ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsTable/ClassificationFindingsTable.tsx`
- A `sidepanes: ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsTable/ClassificationFindingsTableColumnDefs.ts`
- A `sidepanes: ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsTable/cells/ClassificationFindingDataStateCell.tsx`
- A `sidepanes: ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsTable/cells/ClassificationFindingLocationCell.tsx`
- A `sidepanes: ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsTable/cells/ClassificationFindingSecurityIssuesCell.tsx`
- A `sidepanes: ClassificationDetailsSidePane/ClassificationFindingsSection/ClassificationFindingsTable/cells/ClassificationFindingSourceCell.tsx`

---

## PR 5 · Global Exclusion (9)

> Global exclusion side pane. Contains breaking type changes in `globalExclusionTypes.ts`; all producers and consumers ship together in this PR.

- M `DataModel/DataPageModel/GlobalExclusionsFilterConfig.ts`
- M `ServerAPI/Requests/DataClassification/GlobalExclusion.ts`
- M `ServerAPI/Requests/DataClassification/globalExclusionTypes.ts`
- M `sidepanes: GlobalExclusionsSidePane/GlobalExclusionsSidePane.tsx`
- M `sidepanes: GlobalExclusionsSidePane/GlobalExclusionModal/GlobalExclusionModal.tsx`
- M `sidepanes: GlobalExclusionsSidePane/GlobalExclusionsTable/GlobalExclusionActionsCell.tsx`
- M `sidepanes: GlobalExclusionsSidePane/GlobalExclusionsTable/GlobalExclusionsTable.tsx`
- M `sidepanes: GlobalExclusionsSidePane/GlobalExclusionsTable/GlobalExclusionsTableColumnDefs.ts`
- D `sidepanes: GlobalExclusionsSidePane/GlobalExclusionsTable/GlobalExclusionCapabilitiesCell.tsx`

---

## File overlap check

| PR                   | Unique paths    | Overlap with PR1 |
| -------------------- | --------------- | ---------------- |
| PR1 Foundation       | 24 + 1 deletion | —                |
| PR2 Main Table       | 9               | 0                |
| PR3 Create Sidepane  | 10              | 0                |
| PR4 Detail Sidepane  | 21              | 0                |
| PR5 Global Exclusion | 9               | 0                |
