"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[356],{7619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=n(5893),r=n(1151);const i={sidebar_position:20},o="Switch",c={id:"components/switch",title:"Switch",description:"The Switch component is renders a boolean input.",source:"@site/docs/components/switch.md",sourceDirName:"components",slug:"/components/switch",permalink:"/docs/components/switch",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/docs/components/switch.md",tags:[],version:"current",lastUpdatedAt:1705497890,formattedLastUpdatedAt:"Jan 17, 2024",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"ComponentsSidebar",previous:{title:"Swipe",permalink:"/docs/components/swipe"},next:{title:"Text Input",permalink:"/docs/components/text-input"}},d={},a=[{value:"Import",id:"import",level:3},{value:"Import",id:"import-1",level:3},{value:"Props",id:"props",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"switch",children:"Switch"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Switch"})," component is renders a boolean input."]}),"\n",(0,s.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { Switch } from '@tra-tech/react-native-kitra';\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"import-1",children:"Import"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { Switch } from '@tra-tech/react-native-kitra';\nimport { useState } from 'react';\nimport { View } from 'react-native';\n\nconst App = () => {\n  const [isEnabled, setIsEnabled] = useState(false);\n  return (\n    <View style={{ alignItems: 'center' }}>\n      <Switch\n        onValueChange={() => setIsEnabled(!isEnabled)}\n        value={isEnabled}\n      />\n    </View>\n  );\n};\n\nexport default App;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prop name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"...SwitchProps"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/switch#props",children:(0,s.jsx)(t.code,{children:"SwitchProps"})})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsxs)(t.td,{children:["Any additional props to be passed to the underlying ",(0,s.jsx)(t.code,{children:"Switch"})," component."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"theme"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UITheme "})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"The theme to use for the component."})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);