"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[8339],{7078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var d=n(5893),r=n(1151);const s={sidebar_position:21},i="Text Input",l={id:"components/text-input",title:"Text Input",description:"The Text Input, a text input with label, count, helper text, left and right icons, and animations for the label and input box.",source:"@site/docs/components/text-input.md",sourceDirName:"components",slug:"/components/text-input",permalink:"/react-native-kitra/docs/next/components/text-input",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/doc/docs/components/text-input.md",tags:[],version:"current",lastUpdatedAt:1711106915,formattedLastUpdatedAt:"Mar 22, 2024",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"ComponentsSidebar",previous:{title:"Switch",permalink:"/react-native-kitra/docs/next/components/switch"},next:{title:"Toggle Button",permalink:"/react-native-kitra/docs/next/components/toggle-button"}},c={},o=[{value:"Import",id:"import",level:3},{value:"Usage",id:"usage",level:3},{value:"Props",id:"props",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"text-input",children:"Text Input"}),"\n",(0,d.jsxs)(t.p,{children:["The ",(0,d.jsx)(t.strong,{children:"Text Input"}),", a text input with label, count, helper text, left and right icons, and animations for the label and input box."]}),"\n",(0,d.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-js",children:"import { TextInput } from '@tra-tech/react-native-kitra';\n"})}),"\n",(0,d.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-js",children:'import { TextInput, Icon } from \'@tra-tech/react-native-kitra\';\nimport { View } from \'react-native\';\n\nconst App = () => (\n  <View style={{ justifyContent: \'center\', flex: 1 }}>\n    <TextInput\n      label="E-mail"\n      size="large"\n      left={<Icon type="ant-design" name="check" size={20} />}\n      right={<Icon type="ant-design" name="apple1" size={20} />}\n      count\n      defaultValue="Default Value"\n      maxLength={20}\n      helperText="Normal"\n      errorMessage="ERROR"\n    />\n  </View>\n);\n\nexport default App;\n'})}),"\n",(0,d.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Prop name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Required"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"size"}),(0,d.jsx)(t.td,{children:(0,d.jsx)("code",{children:"'small' | 'medium' | 'large'"})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsxs)(t.td,{children:["The size of the text input. Default Value: ",(0,d.jsx)(t.code,{children:"'medium'  "})]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"iconPosition"}),(0,d.jsx)(t.td,{children:(0,d.jsx)("code",{children:"'left' | 'right' "})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Location of the icon."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"labelColor"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"{focus:string, default:string}"})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Label color for focus and unfocus status"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"helperText"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Text of helper text."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"helperTextStyle"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:(0,d.jsx)(t.code,{children:"StyleProp<TextStyle>"})})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Additional styles to apply to the helper text."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"variant"}),(0,d.jsx)(t.td,{children:(0,d.jsx)("code",{children:"'filled' | 'outlined'"})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsxs)(t.td,{children:["Variant of the TextInput. Default value: ",(0,d.jsx)(t.code,{children:"'filled'"})," ,"]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"containerStyle"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:(0,d.jsx)(t.code,{children:"StyleProp<TextStyle>"})})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Style of outter input container."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"inputContainerStyle"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:(0,d.jsx)(t.code,{children:"StyleProp<TextStyle>"})})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Style of inner input container."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"labelContainerStyle"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:(0,d.jsx)(t.code,{children:"StyleProp<TextStyle>"})})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Style of label container."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"count"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean"})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsxs)(t.td,{children:["Shows the number of text input characters. Default value: ",(0,d.jsx)(t.code,{children:"false"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"label"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"The text to use for the floating label."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"labelStyle"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:(0,d.jsx)(t.code,{children:"StyleProp<TextStyle>"})})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Additional styles to apply to the label text."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"editable"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean"})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsxs)(t.td,{children:["If false, text is not editable. Default value: ",(0,d.jsx)(t.code,{children:"true"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"inputStyle"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,d.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Additional styles to apply to the text input."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"errorMessage"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"string"})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Error message."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"error"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"boolean "})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"If error is true error message is shown."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"left"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"https://reactnative.dev/docs/react-node",children:(0,d.jsx)(t.code,{children:"React.ReactNode"})})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Used to add a react node to the left of the text input."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"right"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"https://reactnative.dev/docs/react-node",children:(0,d.jsx)(t.code,{children:"React.ReactNode"})})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Used to add a react node to the right of the text input."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"...TextInputProps"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.a,{href:"https://reactnative.dev/docs/textinput#props",children:(0,d.jsx)(t.code,{children:"TextInputProps"})})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"Any additional props to be passed TextInput component."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"theme"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"UITheme                                     "})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"The UI theme to use for the component."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"typography"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"UITypography                                "})}),(0,d.jsx)(t.td,{children:"No"}),(0,d.jsx)(t.td,{children:"The UI typography to use for the component."})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var d=n(7294);const r={},s=d.createContext(r);function i(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);