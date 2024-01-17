"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[758],{4770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=n(5893),i=n(1151);const r={sidebar_position:7},o="Chip",d={id:"components/chip",title:"Chip",description:"The Chips can be used to display entities in small blocks.",source:"@site/docs/components/chip.md",sourceDirName:"components",slug:"/components/chip",permalink:"/docs/components/chip",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/docs/components/chip.md",tags:[],version:"current",lastUpdatedAt:1705497890,formattedLastUpdatedAt:"Jan 17, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"ComponentsSidebar",previous:{title:"CheckBox",permalink:"/docs/components/checkbox"},next:{title:"Divider",permalink:"/docs/components/divider"}},c={},l=[{value:"Import",id:"import",level:3},{value:"Usage",id:"usage",level:3},{value:"Props",id:"props",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"chip",children:"Chip"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Chips"})," can be used to display entities in small blocks."]}),"\n",(0,s.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { Chip } from '@tra-tech/react-native-kitra';\n"})}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { Chip } from '@tra-tech/react-native-kitra';\nimport { View } from 'react-native';\n\nconst App = () => (\n <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>\n      <Chip\n        icon={{ iconName: 'penguin', iconPosition: 'left', iconType: 'material-community' }}\n        label=\"Small\"\n        size='large'\n        onChange={e => console.log(e)}\n        colorStyle={{ backgroundColor: 'tomato', selectBackgroundColor: 'white', selectTitleColor: 'tomato', titleColor: 'white' }}\n      />\n  </View>\n);\n\nexport default App;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prop name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"label"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Text of chip."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"value"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsxs)(t.td,{children:["Status of chip.                  Default value: ",(0,s.jsx)(t.code,{children:"'false'"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"textStyle"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:(0,s.jsx)(t.code,{children:"StyleProp<TextStyle>"})})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Additional styles to apply to the chip."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"style"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,s.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Additional styles to apply to the label."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"icon"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:" { iconName: string,"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"  iconType: IconType,"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"  iconPosition: 'left' | 'right'"})," }"]}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Adds an icon to a component with options for specifying the icon's name, type, and position  , enabling quick customization of the component's appearance."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"colorStyle"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:" { backgroundColor: string, selectBackgroundColor: string, selectTitleColor: string,"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"titleColor: string }"})]}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Styles for chip color."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"size"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:" 'small' | 'medium' | 'large'"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsxs)(t.td,{children:["The size of the chip. Default value: ",(0,s.jsx)(t.code,{children:"'small'"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onChange"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"(event:boolean)=> void"})}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Returns whether the chip is selected."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"disable"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean "})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsxs)(t.td,{children:["If true the user won't be able to toggle the chip. Default value: ",(0,s.jsx)(t.code,{children:"false"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"theme"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UITheme "})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"The theme to use for the component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"typography"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UITypography"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"The typography to use for the component."})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);