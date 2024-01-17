"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[673],{3839:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(5893),i=r(1151);const s={sidebar_position:3},d="Avatar",a={id:"components/avatar",title:"Avatar",description:"The Avatar component can display an image or initials in a circular or rounded rectangle shape. It also has a customizable badge that can be positioned at the top or bottom of the Avatar, and can display text or an icon. This component can be used in various applications that require a user profile picture or initials, such as social media or messaging apps.",source:"@site/docs/components/avatar.md",sourceDirName:"components",slug:"/components/avatar",permalink:"/react-native-kitra/docs/components/avatar",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/docs/components/avatar.md",tags:[],version:"current",lastUpdatedAt:1705498208,formattedLastUpdatedAt:"Jan 17, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"ComponentsSidebar",previous:{title:"Activity Indicator",permalink:"/react-native-kitra/docs/components/activity-indicator"},next:{title:"Badge",permalink:"/react-native-kitra/docs/components/badge"}},o={},c=[{value:"Import",id:"import",level:3},{value:"Usage",id:"usage",level:3},{value:"Props",id:"props",level:3},{value:"Avatar Group",id:"avatar-group",level:2},{value:"Import",id:"import-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Props",id:"props-1",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"avatar",children:"Avatar"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Avatar"})," component can display an image or initials in a circular or rounded rectangle shape. It also has a customizable badge that can be positioned at the top or bottom of the Avatar, and can display text or an icon. This component can be used in various applications that require a user profile picture or initials, such as social media or messaging apps."]}),"\n",(0,n.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { Avatar } from '@tra-tech/react-native-kitra';\n"})}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { Avatar,Icon } from '@tra-tech/react-native-kitra';\nimport { View } from 'react-native';\n\nconst App = () => (\n   <View style={{ alignItems: 'center', flexDirection: 'row' }}>\n      <Avatar\n        borderStyle=\"circular\"\n        size=\"medium\"\n        badgePosition=\"bottom\"\n        badgeContent={<Icon name=\"penguin\" type=\"material-community\" size={20} />}\n        source={{ uri: 'https://randomuser.me/api/portraits/men/62.jpg' }}\n      />\n    </View>\n);\n\nexport default App;\n"})}),"\n",(0,n.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Prop name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"size"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"'small' | 'medium'"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsxs)(t.td,{children:["The size of the avatar. Default value: ",(0,n.jsx)(t.code,{children:"'medium'  "})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/image#imagesource",children:(0,n.jsx)(t.code,{children:"ImageSourcePropType"})})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Used to specify the image source."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"borderStyle"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"'circular' | 'rounded'"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsxs)(t.td,{children:["Specifies the border type of the avatar. Default value: ",(0,n.jsx)(t.code,{children:"'circular'"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"avatarIcon"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"React.ReactNode      "})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Used to add icon to avatar."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"containerStyle"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/view-style-props",children:(0,n.jsx)(t.code,{children:"StyleProp<ViewStyle>"})})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Additional styles to apply to the avatar container."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"label"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Represents the initials of the name to be written on the avatar."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"labelStyle"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://reactnative.dev/docs/text-style-props",children:(0,n.jsx)(t.code,{children:"StyleProp<TextStyle>"})})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Additional styles to apply to the label text."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"badgePosition"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"'top' | 'bottom'"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Badge component location."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"badgeStyle"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"{  containerStyle?: StyleProp<ViewStyle>, textStyle?: StyleProp<TextStyle> }   "})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Additional styles to apply to the badge component."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"badgeContent"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"React.ReactNode "})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Additional content to apply to the badge component."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"theme"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"UITheme                                     "})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The theme to use for the component."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"typography"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"UITypography                                "})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The typography to use for the component."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"avatar-group",children:"Avatar Group"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Avatar Group"}),", used to list avatars side by side."]}),"\n",(0,n.jsx)(t.h3,{id:"import-1",children:"Import"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { AvatarGroup } from '@tra-tech/react-native-kitra';\n"})}),"\n",(0,n.jsx)(t.h3,{id:"usage-1",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { AvatarGroup } from '@tra-tech/react-native-kitra';\nimport { View } from 'react-native';\n\nconst App = () => (\n     <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 30 }}>\n      <AvatarGroup\n        avatarLimit={5}\n        limitContainerStyle={{ backgroundColor: '#82B98E', style: { fontSize: 10 } }}\n        avatarsType={[\n          { source: { uri: 'https://randomuser.me/api/portraits/men/62.jpg' } },\n          { source: { uri: 'https://randomuser.me/api/portraits/men/40.jpg' } },\n          { source: { uri: 'https://randomuser.me/api/portraits/women/26.jpg' } },\n          { label: 'Dogus Erdem' },\n          { label: 'Ahmet Kagan Yoruk' },\n          { label: 'Nadire Kasap' },\n        ]}\n      />\n    </View>\n);\nexport default App;\n  \n"})}),"\n",(0,n.jsx)(t.h3,{id:"props-1",children:"Props"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Prop name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"avatarsType"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Array<{"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:" source?: ImageSourcePropType,"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:" borderStyle?: 'circular' | 'rounded',"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:" avatarIcon?: React.ReactNode,"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:" containerStyle?: StyleProp<ViewStyle>,"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:" label?: string,"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"  labelStyle?: StyleProp<TextStyle>,"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:" badgePosition?: 'top' | 'bottom',"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:" badgeStyle?: { containerStyle?: StyleProp<ViewStyle>,"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"textStyle?: StyleProp<TextStyle> },"}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"badgeContent?: React.ReactNode "}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"}> "})]}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"Takes avatar props into array."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"avatarLimit"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"number"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsxs)(t.td,{children:["Limit of avatars to be listed. Default value: ",(0,n.jsx)(t.code,{children:"10"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limitContainerStyle"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"'circular' | 'rounded'"})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"Additional styles to apply to the limit container."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"theme"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"UITheme                                     "})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The theme to use for the component."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"typography"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"UITypography                                "})}),(0,n.jsx)(t.td,{children:"No"}),(0,n.jsx)(t.td,{children:"The typography to use for the component."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>d});var n=r(7294);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);