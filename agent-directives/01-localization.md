# Localization Directives

When acting upon this repository, all AI agents must strictly adhere to the following localization rules:

1. **Parity Between Locales**: 
   - The primary locales for this project are English (`en.json`) and Portuguese (`pt.json`), located in the `src/locales/` directory.
   - **Crucial**: Whenever you make a change, addition, or deletion to the English locale (`en.json`), you **MUST** make the exact corresponding change translated to the Portuguese locale (`pt.json`), and vice-versa.
   - The JSON keys must remain completely identical across all locale files. Only the values should be translated.

2. **UI Component Updates**:
   - If a new text element is added to any Vue component, DO NOT hardcode the text in the component. 
   - Instead, add the new key to `ui` section of the locale JSON files, and use the `$t('ui.keyName')` method provided by `vue-i18n`.

3. **CV Data Updates**:
   - If updating the resume data (adding a new job, updating skills, etc.), ensure the data structure inside the `cv` object is mirrored perfectly in all language files.

Failure to follow these directives will cause the language toggle to break or display missing keys.
