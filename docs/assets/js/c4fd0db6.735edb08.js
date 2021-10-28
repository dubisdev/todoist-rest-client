"use strict";(self.webpackChunktodoist_rest_client_documentation=self.webpackChunktodoist_rest_client_documentation||[]).push([[21],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7697:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:30},l="Get All Tasks",c={unversionedId:"Tasks/remote/get-all-tasks",id:"Tasks/remote/get-all-tasks",isDocsHomePage:!1,title:"Get All Tasks",description:"By now, Completed tasks are not implemented in the REST API, so no completed task will be returned by using this client.",source:"@site/docs/Tasks/remote/get-all-tasks.md",sourceDirName:"Tasks/remote",slug:"/Tasks/remote/get-all-tasks",permalink:"/todoist-rest-client/docs/Tasks/remote/get-all-tasks",editUrl:"https://github.com/dubisdev/todoist-rest-client-documentation/edit/master/docs/Tasks/remote/get-all-tasks.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Get A Task",permalink:"/todoist-rest-client/docs/Tasks/remote/get-one-task"},next:{title:"Get Today Tasks",permalink:"/todoist-rest-client/docs/Tasks/remote/get-today-tasks"}},p=[{value:"getAll()",id:"getall",children:[],level:2},{value:"getAllJSON()",id:"getalljson",children:[],level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-all-tasks"},"Get All Tasks"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"By now, ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/68368731/todoist-api-get-all-completed-tasks#:~:text=Completed%20tasks%20are%20not%20implemented%20in%20the%20REST%20API%20yet.%20To%20be%20able%20to%20retrieve%20completed%20tasks%2C%20you%20should%20be%20using%20the%20Sync%20API%3A%20https%3A//developer.todoist.com/sync/v8/%23get-all-completed-items"},"Completed tasks are not implemented in the REST API"),", so no completed task will be returned by using this client."))),(0,a.kt)("h2",{id:"getall"},"getAll()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const myClient // an authorized client instance\n\nmyClient.task.getAll().then(res => console.log(res)) // ["task1 content", "task2 content", ...]\n')),(0,a.kt)("h2",{id:"getalljson"},"getAllJSON()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const myClient // an authorized client instance\n\nmyClient.task.getAllJSON().then(res => console.log(res)) // [{task1...}, {task2...}, ...]\n")))}d.isMDXComponent=!0}}]);