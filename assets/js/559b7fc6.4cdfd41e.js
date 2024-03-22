"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[377],{6153:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=t(5893),n=t(1151);const o={sidebar_position:15},a="Progress Bar",i={id:"components/progress-bar",title:"Progress Bar",description:"The ProgressBar component is a visual indicator of a progress. It displays a progress bar with a color that can be customized. The progress bar will animate and fill up based on the progress passed in as a percentage value.",source:"@site/docs/components/progress-bar.md",sourceDirName:"components",slug:"/components/progress-bar",permalink:"/react-native-kitra/docs/next/components/progress-bar",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/doc/docs/components/progress-bar.md",tags:[],version:"current",lastUpdatedAt:1711106915,formattedLastUpdatedAt:"Mar 22, 2024",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"ComponentsSidebar",previous:{title:"Pagerview",permalink:"/react-native-kitra/docs/next/components/pagerview"},next:{title:"Radio Button",permalink:"/react-native-kitra/docs/next/components/radio-button"}},d={},c=[{value:"Import",id:"import",level:3},{value:"Usage",id:"usage",level:3},{value:"Props",id:"props",level:3}];function l(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"progress-bar",children:"Progress Bar"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.strong,{children:"ProgressBar"})," component is a visual indicator of a progress. It displays a progress bar with a color that can be customized. The progress bar will animate and fill up based on the progress passed in as a percentage value."]}),"\n",(0,s.jsx)(r.h3,{id:"import",children:"Import"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { ProgressBar } from '@tra-tech/react-native-kitra';\n"})}),"\n",(0,s.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"import { ProgressBar } from '@tra-tech/react-native-kitra';\nimport { View, StyleSheet } from 'react-native';\n\nconst App = () => (\n  <View style={style.container}>\n    <ProgressBar progress={50} barColor=\"#EDEAF8\" progressColor=\"#8973CD\" />\n    <ProgressBar progress={25} />\n  </View>\n);\n\nconst style = StyleSheet.create({\n  container: { flex: 1, justifyContent: 'center', rowGap: 50 },\n});\n\nexport default App;\n\n"})}),"\n",(0,s.jsx)(r.h3,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Prop Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Required"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"progress"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"number"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsxs)(r.td,{children:["The progress value as a percentage. Default value: ",(0,s.jsx)(r.code,{children:"0"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"barColor"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"The background color of the progress bar."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"progressColor"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"The color of the progress bar."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"progressStyle"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,s.jsx)(r.code,{children:"StyleProp<ViewStyle>"})})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"Style object to be applied to the progress bar."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"theme"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"UITheme"})}),(0,s.jsx)(r.td,{children:"No"}),(0,s.jsx)(r.td,{children:"The theme to use for the component."})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>a});var s=t(7294);const n={},o=s.createContext(n);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);