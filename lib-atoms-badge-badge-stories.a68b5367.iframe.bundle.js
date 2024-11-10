(self.webpackChunk_accentiostudios_excelsior_angular=self.webpackChunk_accentiostudios_excelsior_angular||[]).push([[714],{"./projects/excelsior-angular/src/lib/atoms/badge/badge.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BlueLight:()=>BlueLight,Error:()=>Error,Indigo:()=>Indigo,Purple:()=>Purple,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>badge_stories,pink:()=>pink});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var badge_componentngResource=__webpack_require__("./projects/excelsior-angular/src/lib/atoms/badge/badge.component.scss?ngResource"),badge_componentngResource_default=__webpack_require__.n(badge_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),ex_icon_component=__webpack_require__("./projects/excelsior-angular/src/lib/atoms/icon/ex-icon.component.ts");let ExBadgeComponent=class ExBadgeComponent{constructor(){this.text="Default Badge",this.type="success",this.onClick=new core.EventEmitter}static#_=this.propDecorators={text:[{type:core.Input}],type:[{type:core.Input}],onClick:[{type:core.Output}]}};ExBadgeComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ex-badge",template:'<span class="badge" [ngClass]="type">\n  <div class="content-icon">\n    <ex-icon [name]="\'dot\'" />\n  </div>\n  {{ text }}\n</span>\n',standalone:!0,imports:[common.CommonModule,ex_icon_component.y],styles:[badge_componentngResource_default()]})],ExBadgeComponent);const badge_stories={title:"1.Atoms/Badge",component:ExBadgeComponent,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["success","pink","warning","error","purple","indigo","indigo","blue-light"]},text:{control:"text"}},args:{onClick:(0,__webpack_require__("./node_modules/@storybook/test/dist/index.mjs").fn)()}},Success={args:{text:"Success Badge",type:"success"}},pink={args:{text:"Pink Badge",type:"pink"}},Error={args:{text:"Error Badge",type:"error"}},Warning={args:{text:"Warning Badge",type:"warning"}},Purple={args:{text:"Purple Badge",type:"purple"}},Indigo={args:{text:"Indigo Badge",type:"indigo"}},BlueLight={args:{text:"Blue Light Badge",type:"blue-light"}},__namedExportsOrder=["Success","pink","Error","Warning","Purple","Indigo","BlueLight"];Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Success Badge',\n    type: 'success'\n  }\n}",...Success.parameters?.docs?.source}}},pink.parameters={...pink.parameters,docs:{...pink.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Pink Badge',\n    type: 'pink'\n  }\n}",...pink.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Error Badge',\n    type: 'error'\n  }\n}",...Error.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Warning Badge',\n    type: 'warning'\n  }\n}",...Warning.parameters?.docs?.source}}},Purple.parameters={...Purple.parameters,docs:{...Purple.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Purple Badge',\n    type: 'purple'\n  }\n}",...Purple.parameters?.docs?.source}}},Indigo.parameters={...Indigo.parameters,docs:{...Indigo.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Indigo Badge',\n    type: 'indigo'\n  }\n}",...Indigo.parameters?.docs?.source}}},BlueLight.parameters={...BlueLight.parameters,docs:{...BlueLight.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Blue Light Badge',\n    type: 'blue-light'\n  }\n}",...BlueLight.parameters?.docs?.source}}}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./projects/excelsior-angular/src/lib/atoms/badge/badge.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  /* // Basic colors */\n  --primary-color: #17202c;\n  --secondary-color: #33465f;\n  --teriary-color: #16d9f5;\n  --error-color: #ba1a1a;\n  /* // Surface Colors */\n  --surface-color: #ffffff;\n  --surface-container: #f5f5f5;\n  --on-surface-color: #101828;\n  --on-surface-color-variant: #475467;\n  --dark-surface-color: #17202c;\n  --dark-surface-container: #1f2a3a;\n  --dark-surface-bright: #33465f;\n  --dark-surface-container-bright: #364f71;\n  --on-dark-surface-color: #ffffff;\n  --on-dark-surface-color-variant: #94969c;\n  /* // Accent Colors */\n  --on-surface-accent-color: #008ea2;\n  --on-dark-surface-accent-color: #16d9f5;\n  /* // Outline */\n  --outline-color: #d0d5dd;\n  --outline-variant-color: #eaecf0;\n  --utility-success-50: #ecfdf3;\n  --utility-success-200: #abefc6;\n  --utility-success-500: #17b26a;\n  --utility-success-700: #067647;\n  --utility-pink-50: #fdf2fa;\n  --utility-pink-200: #fcceee;\n  --utility-pink-500: #ee46bc;\n  --utility-pink-700: #c11574;\n  --utility-warning-50: #fffaeb;\n  --utility-warning-200: #fedf89;\n  --utility-warning-500: #f79009;\n  --utility-warning-700: #b54708;\n  --utility-purple-50: #f4f3ff;\n  --utility-purple-200: #d9d6fe;\n  --utility-purple-500: #7a5af8;\n  --utility-purple-700: #5925dc;\n  --utility-indigo-50: #eef4ff;\n  --utility-indigo-200: #c7d7fe;\n  --utility-indigo-500: #6172f3;\n  --utility-indigo-700: #3538cd;\n  --utility-blue-light-50: #f0f9ff;\n  --utility-blue-light-200: #b9e6fe;\n  --utility-blue-light-500: #0ba5ec;\n  --utility-blue-light-700: #026aa2;\n  --utility-error-50: #fef3f2;\n  --utility-error-200: #fecdca;\n  --utility-error-500: #f62a1b;\n  --utility-error-700: #b42318;\n  --radius-full: 9999px;\n  --radius-md: 8px;\n  --radius-xs: 4px;\n  --radius-xl: 12px;\n  --spacing-xxs: 2px;\n  --spacing-sm: 6px;\n  --spacing-xl: 16px;\n  --ex-space-none: 0;\n  --ex-space-xs: 4px;\n  --ex-space-sm: 16px;\n  --ex-space-md: 24px;\n  --ex-space-md2: 32px;\n  --ex-space-lg: 48px;\n  --ex-space-xl: 96px;\n  --button-primary-color_hover: #3e5779;\n  --button-primary-border_hover: #6941c6;\n  --bg-disabled: #f2f4f7;\n  --bg-primary: #ffffff;\n  --bg-secondary: #f9fafb;\n  --fg-quinary: #98a2b3;\n  --fg-disabled: #98a2b3;\n  --border-disabled_subtle: #eaecf0;\n  --on-disabled: #a7a7a7;\n  --shadow-xs: 0px 1px 2px 0px #1018280d;\n  --text-primary-900: #101828;\n  --text-secondary-700: #344054;\n  --text-tertiary: #475467;\n  --border-primary: #d0d5dd;\n  --border-secondary: #eaecf0;\n  --primary-color: #17202c;\n  --secondary-color: #33465f;\n  --teriary-color: #16d9f5;\n  --error-color: #ba1a1a;\n  --surface-color: #ffffff;\n  --surface-container: #f5f5f5;\n  --on-surface-color: #101828;\n  --on-surface-color-variant: #475467;\n  --dark-surface-color: #17202c;\n  --dark-surface-container: #1f2a3a;\n  --dark-surface-bright: #33465f;\n  --dark-surface-container-bright: #364f71;\n  --on-dark-surface-color: #ffffff;\n  --on-dark-surface-color-variant: #94969c;\n  --on-surface-accent-color: #008ea2;\n  --on-dark-surface-accent-color: #16d9f5;\n  --outline-color: #d0d5dd;\n  --outline-variant-color: #eaecf0;\n}\n\n* {\n  font-optical-sizing: auto;\n}\n\n.badge {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border-radius: var(--radius-full);\n  border: solid 1px;\n  color: var(--primary-color);\n}\n\n.badge .content-icon {\n  display: inline-block;\n}\n\n.badge.success {\n  background-color: var(--utility-success-50);\n  border-color: var(--utility-success-200);\n  color: var(--utility-success-700);\n}\n\n.badge.success .content-icon {\n  color: var(--utility-success-500);\n}\n\n.badge.pink {\n  background-color: var(--utility-pink-50);\n  border-color: var(--utility-pink-200);\n  color: var(--utility-pink-700);\n}\n\n.badge.pink .content-icon {\n  color: var(--utility-pink-500);\n}\n\n.badge.warning {\n  background-color: var(--utility-warning-50);\n  border-color: var(--utility-warning-200);\n  color: var(--utility-warning-700);\n}\n\n.badge.warning .content-icon {\n  color: var(--utility-warning-500);\n}\n\n.badge.purple {\n  background-color: var(--utility-purple-50);\n  border-color: var(--utility-purple-200);\n  color: var(--utility-purple-700);\n}\n\n.badge.purple .content-icon {\n  color: var(--utility-purple-500);\n}\n\n.badge.indigo {\n  background-color: var(--utility-indigo-50);\n  border-color: var(--utility-indigo-200);\n  color: var(--utility-indigo-700);\n}\n\n.badge.indigo .content-icon {\n  color: var(--utility-indigo-500);\n}\n\n.badge.blue-light {\n  background-color: var(--utility-blue-light-50);\n  border-color: var(--utility-blue-light-200);\n  color: var(--utility-blue-light-700);\n}\n\n.badge.blue-light .content-icon {\n  color: var(--utility-blue-light-500);\n}\n\n.badge.error {\n  background-color: var(--utility-error-50);\n  border-color: var(--utility-error-200);\n  color: var(--utility-error-700);\n}\n\n.badge.error .content-icon {\n  color: var(--utility-error-500);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);