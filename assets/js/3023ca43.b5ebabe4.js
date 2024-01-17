"use strict";(self.webpackChunkkitra_doc=self.webpackChunkkitra_doc||[]).push([[492],{1599:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>E,contentTitle:()=>C,default:()=>_,frontMatter:()=>V,metadata:()=>T,toc:()=>S});var a=t(5893),r=t(1151),s=t(7294),i=t(6905),l=t(2466),c=t(6550),o=t(469),d=t(1980),u=t(7392),p=t(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const a=(0,c.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=m(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=x({queryString:t,groupId:a}),[u,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,p.Nk)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),v=(()=>{const e=c??u;return g({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,r]),tabValues:r}}var b=t(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=c[t].value;a!==r&&(d(n),s(a))},p=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:p,onClick:u,...s,className:(0,i.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=v(e);return(0,a.jsxs)("div",{className:(0,i.Z)("tabs-container",j.tabList),children:[(0,a.jsx)(f,{...e,...n}),(0,a.jsx)(y,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,a.jsx)(k,{...e,children:h(e.children)},String(n))}const I={tabItem:"tabItem_Ymn6"};function N(e){let{children:n,hidden:t,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.Z)(I.tabItem,r),hidden:t,children:n})}const V={sidebar_position:1},C="Getting Started",T={id:"doc/getting-started",title:"Getting Started",description:"Installation",source:"@site/docs/doc/getting-started.md",sourceDirName:"doc",slug:"/doc/getting-started",permalink:"/react-native-kitra/docs/doc/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/TRA-Tech/react-native-kitra/tree/main/docs/doc/getting-started.md",tags:[],version:"current",lastUpdatedAt:1705498208,formattedLastUpdatedAt:"Jan 17, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"DocSidebar",next:{title:"Notification",permalink:"/react-native-kitra/docs/doc/Notification"}},E={},S=[{value:"Installation",id:"installation",level:2},{value:"Implementation",id:"implementation",level:2}];function A(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n","\n","\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Go to the project folder in terminal and run the following code:"}),"\n"]}),"\n",(0,a.jsxs)(w,{groupId:"operating-systems",children:[(0,a.jsx)(N,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"yarn add @tra-tech/react-native-kitra\n"})})}),(0,a.jsx)(N,{value:"npm",label:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @tra-tech/react-native-kitra\n"})})})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Packages you need to download separately to use:"}),"\n"]}),"\n",(0,a.jsxs)(w,{groupId:"non-mac-operating-systems",children:[(0,a.jsxs)(N,{value:"React Native CLI",label:"React Native CLI",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"react-native-reanimated"})}),(0,a.jsxs)(w,{groupId:"operating-systems",children:[(0,a.jsx)(N,{value:"yarn",label:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"yarn add react-native-reanimated\n"})})}),(0,a.jsx)(N,{value:"npm",label:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install react-native-reanimated\n"})})})]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation",children:"Click for react-native-reanimated installation instructions."})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"react-native-gesture-handler"})}),(0,a.jsxs)(w,{groupId:"operating-systems",children:[(0,a.jsx)(N,{value:"yarn",label:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"yarn add react-native-gesture-handler\n"})})}),(0,a.jsx)(N,{value:"npm",label:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install react-native-gesture-handler\n"})})})]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://docs.swmansion.com/react-native-gesture-handler/docs/installation",children:"Click for react-native-gesture-handler installation instructions."})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"react-native-vector-icons"})}),(0,a.jsxs)(w,{groupId:"operating-systems",children:[(0,a.jsx)(N,{value:"yarn",label:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"yarn add react-native-vector-icons\n"})})}),(0,a.jsx)(N,{value:"npm",label:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install react-native-vector-icons\n"})})})]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/oblador/react-native-vector-icons#installation",children:"Click for react-native-vector-icons installation instructions."})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"react-native-pager-view"})}),(0,a.jsxs)(w,{groupId:"operating-systems",children:[(0,a.jsx)(N,{value:"yarn",label:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"yarn add react-native-pager-view\n"})})}),(0,a.jsx)(N,{value:"npm",label:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install react-native-pager-view\n"})})})]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/callstack/react-native-pager-view#getting-started",children:"Click for react-native-pager-view installation instructions."})})]}),(0,a.jsxs)(N,{value:"Expo",label:"Expo",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"react-native-reanimated"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npx expo install react-native-reanimated\n"})}),(0,a.jsx)(n.p,{children:"After the installation completes, you must also add the Babel plugin to babel.config.js:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"module.exports = function (api) {\n  api.cache(true);\n  return {\n    presets: ['babel-preset-expo'],\n    plugins: ['react-native-reanimated/plugin'],\n  };\n};\n"})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"react-native-gesture-handler"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"npm2yarn",children:"npx expo install react-native-gesture-handler\n"})}),(0,a.jsx)(n.p,{children:"Add this import to the top of your app entry file, such as App.js:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import 'react-native-gesture-handler';\n"})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsxs)(n.p,{children:["Wrap your root component in ",(0,a.jsx)(n.strong,{children:"KitraProvider"})," from react-native-kitra."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import { KitraProvider } from '@tra-tech/react-native-kitra';\nimport App from './src/App';\n\nexport default function Main() {\n  return (\n    <KitraProvider>\n      <App />\n    </KitraProvider>\n  );\n}\n\n"})})]})}function _(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(A,{...e})}):A(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(7294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);