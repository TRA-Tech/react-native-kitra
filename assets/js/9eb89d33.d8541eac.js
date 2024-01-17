"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[148],{8051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var s=n(5893),r=n(1151);const d={sidebar_position:5},o="Button",i={id:"components/button",title:"Button",description:"The Button component is a customizable button that can display either a label or an icon, or both. It is built using the Pressable component from react-native and allows for various states like focused and disabled.",source:"@site/docs/components/button.md",sourceDirName:"components",slug:"/components/button",permalink:"/docs/components/button",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/docs/components/button.md",tags:[],version:"current",lastUpdatedAt:1705497890,formattedLastUpdatedAt:"Jan 17, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"ComponentsSidebar",previous:{title:"Badge",permalink:"/docs/components/badge"},next:{title:"CheckBox",permalink:"/docs/components/checkbox"}},c={},l=[{value:"Import",id:"import",level:3},{value:"Usage",id:"usage",level:3},{value:"Props",id:"props",level:3},{value:"Types",id:"types",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"button",children:"Button"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Button"})," component is a customizable button that can display either a label or an icon, or both. It is built using the ",(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/pressable",children:"Pressable"})," component from react-native and allows for various states like focused and disabled."]}),"\n",(0,s.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { Button } from "@tra-tech/react-native-kitra";    \n'})}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { Button, Icon } from '@tra-tech/react-native-kitra';\nimport { View } from 'react-native';\n\nconst App = () => (\n  <View style={{ flexDirection: 'column', alignItems: 'center' }}>\n    <Button \n      size=\"medium\" \n      iconPosition=\"left\" \n      label=\"Press Me!\" \n      style={{ alignSelf: 'center', marginBottom: 10 }} \n      onPress={()=>console.log('pressed')}>\n        <Icon type=\"material-community\" size={20} name=\"penguin\" />\n    </Button>\n  </View>\n);\n\nexport default App;\n\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Prop"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"size"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"'small' | 'medium' | 'large'"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsxs)(t.td,{children:["The size of the button. Default value: ",(0,s.jsx)(t.code,{children:"'medium'"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"disabled"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"boolean"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsxs)(t.td,{children:["Determines whether the button is disabled. Default value: ",(0,s.jsx)(t.code,{children:"false"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"label"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"The label to display on the button."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"iconPosition"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"'left' | 'right'"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsxs)(t.td,{children:["The position of the icon in relation to the label. Default value: ",(0,s.jsx)(t.code,{children:"'left'"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"style"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,s.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"The style object for the button."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"textStyle"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:(0,s.jsx)(t.code,{children:"StyleProp<TextStyle>"})})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"The style object for the button's text."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"children"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/react-node",children:(0,s.jsx)(t.code,{children:"React.ReactNode"})})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Icons to be rendered inside the button."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"statusStyle"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ActionProps"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Contains style definitions for a button component's normal, focused, and disabled states, specifying background and text colors."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"theme"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UITheme"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"The theme to use for the component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"typography"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UITypography"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"The typography to use for the component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"...PressableProps"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/pressable#props",children:(0,s.jsx)(t.code,{children:"Pressable"})})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsxs)(t.td,{children:["Any additional props to be passed to the underlying ",(0,s.jsx)(t.code,{children:"Pressable"})," component."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"types",children:"Types"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ActionProps"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:" { default:{container: {backgroundColor: string},text: {color: string}},"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"focused: {container: {backgroundColor: string},text: {color: string}},"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"disabled: {container: { backgroundColor: string},text:{color:string}}}"})]})]})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(7294);const r={},d=s.createContext(r);function o(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);