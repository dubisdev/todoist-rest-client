"use strict";(self.webpackChunktodoist_rest_client_documentation=self.webpackChunktodoist_rest_client_documentation||[]).push([[267],{840:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var o=s(7462),n=s(3366),a=(s(7294),s(3905)),i=["components"],r={sidebar_position:2},c="Todoist Resource Objects",d={unversionedId:"todoist-resources",id:"todoist-resources",isDocsHomePage:!1,title:"Todoist Resource Objects",description:'We call "Todoist Resources" to all the Todoist elements that can be managed through their API:',source:"@site/docs/todoist-resources.md",sourceDirName:".",slug:"/todoist-resources",permalink:"/todoist-rest-client/docs/todoist-resources",editUrl:"https://github.com/dubisdev/todoist-rest-client-documentation/edit/master/docs/todoist-resources.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"JS Todoist-Rest-Client",permalink:"/todoist-rest-client/docs/intro"},next:{title:"Tasks JSON Objects",permalink:"/todoist-rest-client/docs/Tasks/tasks-objects"}},l=[{value:"Resource Schemas",id:"resource-schemas",children:[],level:2}],m={toc:l};function u(e){var t=e.components,s=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"todoist-resource-objects"},"Todoist Resource Objects"),(0,a.kt)("p",null,'We call "Todoist Resources" to all the Todoist elements that can be managed through their API:'),(0,a.kt)("p",null,"\ud83d\uddd2 Projects ",(0,a.kt)("br",null),"\n\ud83d\uddd2 Sections ",(0,a.kt)("br",null),"\n\ud83d\uddd2 ",(0,a.kt)("a",{parentName:"p",href:"/docs/Tasks/tasks-objects"},(0,a.kt)("strong",null,"Tasks"))," ",(0,a.kt)("br",null),"\n\ud83d\uddd2 Comments ",(0,a.kt)("br",null),"\n\ud83d\uddd2 Labels ",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"resource-schemas"},"Resource Schemas"),(0,a.kt)("p",null,"Every of these resources has its own properties (each task has its content, date, ...). The client you some classes that allow you to create these elements ",(0,a.kt)("strong",{parentName:"p"},"without having errors in their schemas"),". The classes can be imported directly from the package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// we can import the classes from the package\nimport { Task, Project } from "todoist-rest-client";\n\nlet myTask = new Task({ content: "Task content" });\n\nlet errorTask = new Task();\n\nconsole.log(myTask);\nconsole.log(errorTask);\n\n/*\n{   content: "Task content"   }\n{   content: "_NO_CONTENT_"   }\n*/\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},'The client creates a "',(0,a.kt)("em",{parentName:"p"},"No_Content"),'" task to avoid errors when creating the task in the server.'))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"With this classes you are only creating JSON objects, they are not being created in the Todoist Servers!\nTo do that you must use the ",(0,a.kt)("inlineCode",{parentName:"p"},"client._resource_type_.create()")," method."))))}u.isMDXComponent=!0}}]);