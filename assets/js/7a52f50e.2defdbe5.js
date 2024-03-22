"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[781],{6506:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(5893),i=n(1151);const r={sidebar_position:2},c=void 0,s={id:"doc/Notification",title:"Notification",description:"Applying notification",source:"@site/versioned_docs/version-1.x/doc/Notification.md",sourceDirName:"doc",slug:"/doc/Notification",permalink:"/react-native-kitra/docs/doc/Notification",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/doc/versioned_docs/version-1.x/doc/Notification.md",tags:[],version:"1.x",lastUpdatedAt:1711106915,formattedLastUpdatedAt:"Mar 22, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"DocSidebar",previous:{title:"Getting Started",permalink:"/react-native-kitra/docs/doc/getting-started"},next:{title:"Theme",permalink:"/react-native-kitra/docs/doc/Theme"}},a={},d=[{value:"Applying notification",id:"applying-notification",level:2},{value:"Applying custom notification",id:"applying-custom-notification",level:2},{value:"Show notifications on screen",id:"show-notifications-on-screen",level:2},{value:"Kitra Provider Props",id:"kitra-provider-props",level:3},{value:"showNotification Types",id:"shownotification-types",level:3}];function l(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"applying-notification",children:"Applying notification"}),"\n",(0,o.jsx)(e.p,{children:"To use notification, you need to wrap the root component with provider."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import { KitraProvider } from '@tra-tech/react-native-kitra';\nimport App from './src/App';\n\nexport default function Main() {\n  return (\n    <KitraProvider>\n      <App />\n    </KitraProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"applying-custom-notification",children:"Applying custom notification"}),"\n",(0,o.jsx)(e.p,{children:"To use notification, you need to wrap the root component with provider."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"\nimport { KitraProvider } from '@tra-tech/react-native-kitra';\nimport App from './src/App';\n\nconst linearMessageType = (theme: any, colorSheme: any) => ({\n  SUCCESS: {\n    backgroundColor: {\n      color: theme.successBackground,\n      location: [0.2, 1],\n      bottomColor: theme.successBottom,\n      bottomLocation: [0, 0.8],\n    },\n    icon: <NotificationSuccess />,\n  },\n  WARNING: {\n    backgroundColor: {\n      color: theme.warningBackground,\n      location: colorSheme === 'dark' ? [0, 0.8] : [0, 0.2, 0.4, 0.6, 0.8],\n      bottomColor: theme.warningBottom,\n      bottomLocation: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8],\n    },\n    icon: <NotificationInfo />,\n  },\n  ERROR: {\n    backgroundColor: {\n      color: theme.errorBackground,\n      location: colorSheme === 'dark' ? [0.2, 1] : [0, 0.3, 0.6],\n      bottomColor: theme.errorBottom,\n      bottomLocation: [0, 0.2, 0.4, 0.6, 0.8],\n    },\n    icon: <NotificationError />,\n  },\n});\n\nexport default function Main() {\n  return (\n    <KitraProvider linearMessageType={(theme, colorScheme) => linearMessageType(theme, colorScheme)}>\n      <App />\n    </KitraProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"show-notifications-on-screen",children:"Show notifications on screen"}),"\n",(0,o.jsxs)(e.p,{children:["To show notifications on the screen, use the ",(0,o.jsx)(e.strong,{children:"useNotification"})," hook."]}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.strong,{children:"showNotification"})," function is used to organize and show notifications. You can customize these values to create your own notification. You can also use linear gradient colors."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import { useNotification } from '@tra-tech/react-native-kitra';\n\nexport function App() {\n  const {showNotification}= useNotification();\n\n  return (\n  <View>\n    <TouchableOpacity \n      onPress={()=> showNotification({ type: 'WARNING', header: 'WARNING NOTIFICATION', message: 'Warning Information' })}>\n      <Text>Show Notification</Text>\n    </TouchableOpacity>\n  </View>\n  );\n}\n"})}),"\n",(0,o.jsx)(e.h3,{id:"kitra-provider-props",children:"Kitra Provider Props"}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Prop name"}),(0,o.jsx)(e.th,{children:"Type"}),(0,o.jsx)(e.th,{children:"Required"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"containerStyle"}),(0,o.jsx)(e.td,{children:(0,o.jsx)(e.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,o.jsx)(e.code,{children:"StyleProp<ViewStyle>"})})}),(0,o.jsx)(e.td,{children:"No"}),(0,o.jsx)(e.td,{children:"Additional styles to apply to the notification container."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"linearMessageType"}),(0,o.jsxs)(e.td,{children:[(0,o.jsx)(e.code,{children:"(theme?:any, colorScheme?:('dark'|'light')=> {[key:string]:"}),(0,o.jsx)("br",{}),(0,o.jsx)(e.code,{children:" {backgroundColor:{color:string[],"}),(0,o.jsx)("br",{}),(0,o.jsx)(e.code,{children:" location:number [],"}),(0,o.jsx)("br",{}),(0,o.jsx)(e.code,{children:"bottomColor:string [],"}),(0,o.jsx)("br",{}),(0,o.jsx)(e.code,{children:"bottomLocation:number []} icon:React.ReactNodeonPress:()=>void}}"})]}),(0,o.jsx)(e.td,{children:"No"}),(0,o.jsx)(e.td,{children:"Notification linear gradient style to show."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"limit"}),(0,o.jsx)(e.td,{children:(0,o.jsx)(e.code,{children:"number"})}),(0,o.jsx)(e.td,{children:"No"}),(0,o.jsxs)(e.td,{children:["Maximum notification to show. Default value: ",(0,o.jsx)(e.code,{children:"3"})]})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"onPress"}),(0,o.jsx)(e.td,{children:(0,o.jsx)(e.code,{children:"()=>void"})}),(0,o.jsx)(e.td,{children:"No"}),(0,o.jsx)(e.td,{children:"Function to execute on press."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"messageType"}),(0,o.jsx)(e.td,{children:(0,o.jsx)(e.code,{children:" [key: status]: { backgroundColor: string, icon: React.ReactNode}"})}),(0,o.jsx)(e.td,{children:"No"}),(0,o.jsx)(e.td,{children:"Notification style to show."})]})]})]}),"\n",(0,o.jsx)(e.h3,{id:"shownotification-types",children:"showNotification Types"}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Name"}),(0,o.jsx)(e.th,{children:"Type"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"showNotification"}),(0,o.jsx)(e.td,{children:(0,o.jsx)(e.code,{children:"{type:status, header?:string, message?:string"})})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"status"}),(0,o.jsxs)(e.td,{children:["status: ",(0,o.jsx)("code",{children:" 'SUCCESS' | 'WARNING' | 'ERROR' | 'INFO'"})]})]})]})]})]})}function h(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>c});var o=n(7294);const i={},r=o.createContext(i);function c(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);