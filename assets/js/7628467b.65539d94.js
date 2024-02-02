"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[602],{6600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=n(5893),i=n(1151);const r={sidebar_position:1,title:"Accordion List"},o=void 0,d={id:"components/accordion-list",title:"Accordion List",description:"The Accordion List component provides an accordion-style list with collapsible sections. The component also supports customization of labels, icons, styles, and themes.",source:"@site/docs/components/accordion-list.md",sourceDirName:"components",slug:"/components/accordion-list",permalink:"/react-native-kitra/docs/components/accordion-list",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/doc/docs/components/accordion-list.md",tags:[],version:"current",lastUpdatedAt:1706859329,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Accordion List"},sidebar:"ComponentsSidebar",next:{title:"Activity Indicator",permalink:"/react-native-kitra/docs/components/activity-indicator"}},c={},l=[{value:"Import",id:"import",level:3},{value:"Usage",id:"usage",level:3},{value:"Props",id:"props",level:3}];function a(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Accordion List"})," component provides an accordion-style list with collapsible sections. The component also supports customization of labels, icons, styles, and themes.\nIt uses animations from the ",(0,s.jsx)(t.a,{href:"https://docs.swmansion.com/react-native-reanimated/",children:"react-native-reanimated"})," library to animate the opening and closing of the accordion sections."]}),"\n",(0,s.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { AccordionList } from "@tra-tech/react-native-kitra";    \n'})}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { AccordionList } from \"@tra-tech/react-native-kitra\";    \n\nconst AccordionListData =[\n  {name:'React',value:1},\n  {name:'Native',value:2},\n  {name:'Kitra',value:3},\n  {name:'React Native Kitra',value:4}]\n\nconst App =()=>{\n    return(\n        <View style={{ backgroundColor: '#8973CD', padding: 10, borderRadius: 5 }}>\n          <AccordionList\n            displayedItem={x => x.name}\n            itemDisplay={x => x.name}\n            onSelect={x => console.log(x)}\n            label=\"Grey Daze\"\n            left={() => <MaterialCommunityIcons name=\"flower-tulip\" size={24} color=\"dimgrey\" />}\n            data={AccordionListData}\n          />\n        </View>\n    )\n }\n\n export default App;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Array<any>  "})}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"The data to render in the accordion list."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"label"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"The label to display at the top of the accordion list."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"left"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"(expanded: boolean) => React.ReactNode "})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"An optional function that returns a React element to display on the left side of the label."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"right"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"(expanded: boolean) => React.ReactNode"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"An optional function that returns a React element to display on the right side of the label."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"labelContainerStyle"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,s.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Additional styles to apply to the label container."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"labelStyle"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:(0,s.jsx)(t.code,{children:"StyleProp<TextStyle>"})})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Additional styles to apply to the label text."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rowTextStyle"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:(0,s.jsx)(t.code,{children:"StyleProp<TextStyle>"})})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Additional styles to apply to the row text."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rowStyle"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,s.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Additional styles to apply to each row container."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"onSelect"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"(item: any) => void "})}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"A callback function that will be called when a row is selected."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"itemDisplay"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"(item: any) => string | JSX.Element | null "})}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"A function that returns a string or JSX element to display for each row."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"theme"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UITheme"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"The theme to use for the component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"typography"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"UITypography"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"The typography to use for the component."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);